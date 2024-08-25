import React from 'react';

function Career() {
  return (
    <div class="timeline-container">
        <div class="timeline">
            <div class="timeline-item current fineco">
                <div class="circle"></div>
                <a href="https://www.fineco.it" class="content">
                    <img src="https://zenprospect-production.s3.amazonaws.com/uploads/pictures/664ea1985971bb0001be19e8/picture" alt="Fineco Bank Logo" class="company-logo"/>
                    <h3>AI Engineer at Fineco Bank S.p.a.</h3>
                    <span>July 2023 - Present</span>
                    <ul>
                        <li>This is a placeholder: this section need to be filled</li>
                        <li>Another placeholder</li>
                        <li>Third one here</li>
                    </ul>
                    <div class="icons">
                        <i class="fa-brands fa-python"></i>
                        <i class="fa-solid fa-cloud"></i>
                        <i class="fa-solid fa-database"></i>
                    </div>
                </a>
            </div>


            <div class="timeline-item">
                <div class="circle"></div>
                <a href="https://www.example.com" class="content">

                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png" alt="Example Company Logo" class="company-logo"/>
                    <h3>Placeholder</h3>
                    <span>May 2118 - May 2220</span>
                    <ul>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                    <div class="icons">
                        <i class="fab fa-html5"></i>
                        <i class="fab fa-css3-alt"></i>
                        <i class="fab fa-bootstrap"></i>
                    </div>
                </a>
            </div>
        </div>
    </div>
  );
}

export default Career;
