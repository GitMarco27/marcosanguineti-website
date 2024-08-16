import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib";
import React, { ReactNode } from "react";
import './styles.css';

interface State {
  searchQuery: string;
}

class PublicationsGallery extends StreamlitComponentBase<State> {
  public state = {
    searchQuery: ""
  };

  public render = (): ReactNode => {
    return (
      <div>
        <h3>Publications Gallery</h3>

        <input
          type="text"
          id="searchInput"
          className="search-bar"
          placeholder="Search for titles..."
          value={this.state.searchQuery}
          onChange={this.handleSearchChange}
        />

        <div className="gallery-container" id="galleryContainer">
          {this.getFilteredGalleryItems().map((item, index) => (
            <a
              key={index}
              className="gallery-item"
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="gallery-image"
                src={item.imgSrc}
                alt={`Article ${index + 1}`}
              />
              <div className="gallery-content">
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-subtitle">{item.year}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  private handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const searchQuery = event.target.value;
    this.setState({ searchQuery });
    this.sendSearchQueryToPython(searchQuery);
  };

  private sendSearchQueryToPython = (query: string) => {
    Streamlit.setComponentValue(query);
  };

  private getFilteredGalleryItems = () => {
    const galleryItems = [
      {
        href: "https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2023/87110/1168626",
        imgSrc: "https://www.researchgate.net/publication/316239920/figure/fig2/AS:488733469351937@1493534547484/NASA-Rotor-37-geometry.png",
        title: "Advantages of Machine Learning Methods in Aerodynamic Blade Optimization",
        year: "2023",
      },
      {
        href: "https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2022/V10DT34A021/1149434",
        imgSrc: "https://www.mdpi.com/machines/machines-11-00334/article_deploy/html/images/machines-11-00334-g004b.png",
        title: "Rotor37 Aerodynamic Optimization: A Machine Learning Approach",
        year: "2022",
      },
      {
        href: "https://asmedigitalcollection.asme.org/GT/proceedings-abstract/GT2021/84935/1119846",
        imgSrc: "https://www.chreed.com/wp-content/uploads/2018/04/Centrifugal-Air-Compressor-Propeller.jpg",
        title: "Centrifugal compressor aero-mechanical design: a machine learning approach",
        year: "2021",
      },
      {
        href: "https://link.springer.com/article/10.1007/s11012-020-01230-1",
        imgSrc: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1007%2Fs11012-020-01230-1/MediaObjects/11012_2020_1230_Fig4_HTML.png?as=webp",
        title: "Variable cant angle winglets for improvement of aircraft flight performance",
        year: "2020",
      },
      {
        href: "https://www.mdpi.com/2226-4310/5/4/126",
        imgSrc: "https://www.mdpi.com/aerospace/aerospace-05-00126/article_deploy/html/images/aerospace-05-00126-g005-550.jpg",
        title: "CFD study of the impact of variable cant angle winglets on total drag reduction",
        year: "2018",
      },
    ];

    const { searchQuery } = this.state;
    return galleryItems.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  public componentDidMount() {
    this.sendComponentReady();
    this.updateFrameHeight();
  }

  public componentDidUpdate() {
    this.updateFrameHeight();
  }

  private sendComponentReady = () => {
    Streamlit.setComponentValue({ apiVersion: 1 });
  };

  private updateFrameHeight = () => {
    window.setTimeout(() => {
      Streamlit.setFrameHeight();
    }, 0);
  };
}

export default withStreamlitConnection(PublicationsGallery);
