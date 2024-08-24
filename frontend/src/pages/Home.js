import React from 'react';

function Home() {
  return (
    <div className="home-container">
        <img src="/ms.png" alt="alt" className="centered-image" />

        <h1>Marco Sanguineti</h1>
        <h2>AI Engineer</h2>
        <h2>Senior Python Developer</h2>
        <h3>&#128511; This website is under construction &#128511;</h3>


        <div className="contact-icons">
            <a href="https://www.linkedin.com/in/marco-sanguineti/" className="linkedin">
            <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/GitMarco27" className="github">
            <i className="fab fa-github"></i>
            </a>
            <a href="https://medium.com/@marcosanguineti" className="medium">
            <i className="fab fa-medium"></i>
            </a>
            <a href="https://www.youtube.com/@marcosanguineti2710" className="youtube">
            <i className="fab fa-youtube"></i>
            </a>
            <a href="https://scholar.google.com/citations?user=hZHz6y4AAAAJ&hl=en" className="scholar">
            <i className="fas fa-graduation-cap"></i>
            </a>
            <a href="https://github.com/GitMarco27/marcosanguineti-website" className="source">
            <i className="fa-solid fa-code"></i>
            </a>
        </div>
        </div>
  );
}

export default Home;
