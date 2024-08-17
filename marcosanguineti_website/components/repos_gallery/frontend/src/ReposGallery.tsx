import {
  Streamlit,
  StreamlitComponentBase,
  withStreamlitConnection,
} from "streamlit-component-lib";
import React, { ReactNode } from "react";
import './styles.css';

// Define the type for a GitHub repository
interface Repository {
  name: string;
  html_url: string;
  created_at: string;
  description: string;
  // Add any other properties you might need
}

interface State {
  searchQuery: string;
  repositories: Repository[]; // Update state to expect an array of Repository objects
}

class ReposGallery extends StreamlitComponentBase<State> {
  public state: State = {
    searchQuery: "",
    repositories: [], // Initialize with an empty array
  };

  public componentDidMount() {
    this.fetchGitHubRepositories("GitMarco27"); // Fetch repositories for a specific GitHub user
    this.sendComponentReady();
    this.updateFrameHeight();
  }

  public componentDidUpdate() {
    this.updateFrameHeight();
  }

  public render = (): ReactNode => {
    return (
      <div>
        <h3>Repositories Gallery</h3>
        <h5>A collection of my GitHub public repositories</h5>

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
                alt={`Repository ${index + 1}`}
              />
              <div className="gallery-content">
                <h1 className="gallery-title">{item.title}</h1>
                <span className="gallery-description">{item.description}</span>
                <hr></hr>
                <p className="gallery-subtitle">{item.year}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  };

  private handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchQuery: event.target.value });
  };

  // Method to fetch public repositories from GitHub
  private fetchGitHubRepositories = async (username: string) => {
    const url = `https://api.github.com/users/${username}/repos`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const repositories: Repository[] = await response.json(); // Explicitly cast the response to Repository[]
      this.setState({ repositories });
    } catch (error) {
      console.error("Failed to fetch repositories", error);
    }
  };

  // Helper method to pick a consistent image from a list of URLs based on repository name
  private getConsistentImage = (repoName: string, images: string[]) => {
  // Convert repository name into an array of characters
  const chars = repoName.split('');
  // Calculate a hash based on character codes
  let hash = 0;
  for (let i = 0; i < chars.length; i++) {
    hash += chars[i].charCodeAt(0);
  }
  // Determine the index based on the hash and the length of the images array
  const index = hash % images.length;
  return images[index];
};

  // Filter and map repositories to gallery items with consistent images
  private getFilteredGalleryItems = () => {
    const { searchQuery, repositories } = this.state;

    // List of image URLs to map to repositories
    const imageUrls = [
      "https://github.blog/wp-content/uploads/2023/10/Collaboration-DarkMode-2.png?resize=1200%2C630",
      "https://user-cube.github.io/devops-cheatsheet/assets/images/github/github-logo.png",
      "https://github.blog/wp-content/uploads/2023/01/1200x640.png?fit=1200%2C640",
      "https://miro.medium.com/v2/resize:fit:1100/1*CWFkh5z8oa6dZfn5_gkKKQ.jpeg",
      "https://images.ctfassets.net/wfutmusr1t3h/2sX2KYqfnGuZTqWIDUUdEI/5e36aaaab860a3bd4e026fa52d597d87/og-image-24.jpg",
      "https://blog.desdelinux.net/wp-content/uploads/2021/03/github.jpg",
      "https://kinsta.com/wp-content/uploads/2020/01/git-vs-github.png",
      "https://github.blog/wp-content/uploads/2024/01/1200x630-Collaboration-Unfurl-LIGHT-Logo.png?resize=1200%2C630",
      "https://github.blog/wp-content/uploads/2023/08/1200x630-Blog-Master.png?fit=1200%2C630",
      "https://media.licdn.com/dms/image/D5612AQHIlV0RWP_CLA/article-cover_image-shrink_720_1280/0/1667503724357?e=2147483647&v=beta&t=jLnimv1DB-xpQvO4tflcZfNZoH3w4VCNFIF7oBMLbcw"
    ];

    return repositories
      .filter(repo =>
        repo.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .map(repo => ({
        href: repo.html_url,
        imgSrc: this.getConsistentImage(repo.name, imageUrls), // Consistent image URL
        title: repo.name,
        year: new Date(repo.created_at).getFullYear().toString(),
        description: repo.description,
      }));
  };

  private sendComponentReady = () => {
    Streamlit.setComponentValue({ apiVersion: 1 });
  };

  private updateFrameHeight = () => {
    window.setTimeout(() => {
      Streamlit.setFrameHeight();
    }, 0);
  };
}

export default withStreamlitConnection(ReposGallery);
