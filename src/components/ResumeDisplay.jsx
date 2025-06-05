import React from 'react';
import '../styles/ResumeDisplay.css';

const Subheading = ({ name, url }) => {
  if (!name) return null;

  return (
    <span className="subheading-name">
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      ) : (
        name
      )}
    </span>
  );
};

const Subheadings = ({ subheadings }) => {
  if (!subheadings?.length) return null;

  return (
    <div className="resume-subheadings">
      {subheadings.map((sub, index) => (
        <div key={index} className="subheading-item">
          <Subheading name={sub.name} url={sub.url} />
        </div>
      ))}
    </div>
  );
};

const WorkExperience = ({ experience }) => {
  return (
    <div className="work-experience-item">
      <div className="experience-header">
        <h3 className="organization">{experience.organization}</h3>
        <h3 className="date">{experience.date}</h3>
      </div>
      <div className="experience-details">
        <p className="role">{experience.role}</p>
        <p className="location">{experience.location}</p>
      </div>

      {experience.bullets && experience.bullets.length > 0 && (
        <ul className="experience-bullets-list">
          {experience.bullets.map((bullet, index) => (
            <li key={index} className="experience-bullet">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

function ResumeDisplay({ resumeData }) {
  return (
    <div className="resume-display">
      <header className="resume-header">
        <h1 className="resume-name">{resumeData.name || 'Your Name'}</h1>
        <Subheadings subheadings={resumeData.subheadings} />
      </header>

      {resumeData.workExperiences && resumeData.workExperiences.length > 0 && (
        <section className="resume-section">
          <h2>WORK EXPERIENCE</h2>
          <hr />
          <div className="work-experience-list">
            {resumeData.workExperiences.map((exp, index) => (
              <WorkExperience key={index} experience={exp} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default ResumeDisplay;
