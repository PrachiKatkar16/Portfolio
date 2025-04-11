import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className='main'>
      <h1>Work Experience</h1>
      <p className="subtitle">My professional journey and work history as a developer.</p>
    <div className="experience-wrapper">
      <h1><span className='exp-heading'>Experience &</span>  <span className='edu-heading'>Education</span></h1>
      <p className="subtitle">My professional journey and educational background that have shaped my expertise</p>
      <div className="main-container">

        {/* Left Side */}
        <div className="left-panel">
          <section className="section">
            <h2>Work Experience</h2>

            <div className="exp-card">
              <div className="exp-header">
                <h3>Associate Engineer</h3>
                <span className="date">Oct 2024 - Present</span>
              </div>
              <p><strong>Workdeft Solutions LLP</strong></p>
              <ul>
                <li>Developing and maintaining the Batelco Calendar App using Laravel and MySQL.</li>
                <li>Implementing event scheduling, user roles, and notification features for enterprise users.</li>
                <li>Enhancing system performance and UI responsiveness through efficient backend logic and clean front-end integration.</li>
              </ul>
              <div className="tags">
                <span>MERN</span>
                <span>Laravel</span>
                <span>Node.js</span>
                <span>SQL</span>
              </div>
            </div>

            <div className="exp-card">
              <div className="exp-header">
                <h3>Web Developer Intern</h3>
                <span className="date">March 2023 - May 2023</span>
              </div>
              <p><strong>KanakDigitex Platinum Pvt. Ltd.</strong></p>
              <ul>
                <li>Delivered two e-commerce platforms using HTML, CSS, Bootstrap, and Tailwind CSS.</li>
                <li>Built and maintained TapFinder and GloryShadi websites for enhanced online presence.</li>
                <li>Managed CMS platforms including WordPress and Shopify.</li>
              </ul>
              <div className="tags">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
                <span>Bootstrap</span>
                <span>Tailwind CSS</span>
                <span>WordPress</span>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Achievements</h2>
            <div className="achievement-card">
              <strong>Avishkar-2023</strong>
              <p>Presented an innovative project at the university-level competition.</p>
            </div>
            <div className="achievement-card">
              <strong>Academic Excellence</strong>
              <p>Achieved the highest academic ranking in the entire engineering program.</p>
            </div>
            <div className="achievement-card">
              <strong>Innovative Project Competition</strong>
              <p>Participated and showcased a real-world impact project.</p>
            </div>
          </section>
        </div>

        {/* Right Side */}
        <div className="right-panel">
                    <section className="section education-section">
            <h2>Education</h2>

            <div className="education-item">
                <div className="timeline-dot"></div>
                <div className="education-content">
                <h3>Bachelor of Computer Engineering (BE)</h3>
                <p>Savitribai Phule Pune University</p>
                <div className="tags">
                    <span className="year-tag">2021 - 2024</span>
                    <span className="score-tag">CGPA: 9.25</span>
                </div>
                </div>
            </div>

            <div className="education-item">
                <div className="timeline-dot"></div>
                <div className="education-content">
                <h3>Diploma in Computer Engineering</h3>
                <p>Government Polytechnic Pune</p>
                <div className="tags">
                    <span className="year-tag">2018 - 2021</span>
                    <span className="score-tag">Percentage: 85.17</span>
                </div>
                </div>
            </div>
            </section>


          <section className="section">
            <h2>Technical Skills</h2>

            <div className="skills-box">
                <div className="category">
                <strong>Front-End Technologies</strong>
                <div className="tag-container purple">
                    <span>React.js</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>JavaScript</span>
                    <span>Bootstrap</span>
                    <span>Chakra UI</span>
                </div>
                </div>

                <div className="category">
                <strong>Back-End Technologies</strong>
                <div className="tag-container green">
                    <span>REST API</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>Axios</span>
                    <span>Google Books API</span>
                </div>
                </div>

                <div className="category">
                <strong>Developer Tools</strong>
                <div className="tag-container gray">
                    <span>Git</span>
                    <span>VS Code</span>
                    <span>Visual Studio</span>
                </div>
                </div>

                <div className="category">
                <strong>Databases</strong>
                <div className="tag-container teal">
                    <span>MongoDB</span>
                    <span>MySQL</span>
                </div>
                </div>
            </div>
            </section>

        </div>
      </div>
    </div>
  </div>
  );
};

export default Experience;
