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

const Education = ({ education }) => {
  return (
    <div className="education-display-item">
      <div className="education-header">
        <h3 className="university">{education.university}</h3>
        <h3 className="date">{education.date}</h3>
      </div>
      <div className="education-details">
        <p className="degree">{education.degree}</p>
        <p className="location">{education.location}</p>
      </div>

      {education.bullets && education.bullets.length > 0 && (
        <ul className="education-bullets-list">
          {education.bullets.map((bullet, index) => (
            <li key={index} className="education-bullet">
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Skills = ({ skills }) => {
  if (!skills?.length) return null;

  return (
    <section className="resume-section">
      <h2>SKILLS</h2>
      <hr />
      <div className="skills-list">
        {skills.map((skillGroup, index) => (
          <p key={index} className="skills-item">
            <span className="skills-header">{skillGroup.header}:</span>{' '}
            {skillGroup.skills.join(', ')}
          </p>
        ))}
      </div>
    </section>
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

      {resumeData.educations && resumeData.educations.length > 0 && (
        <section className="resume-section">
          <h2>EDUCATION</h2>
          <hr />
          <div className="education-list">
            {resumeData.educations.map((edu, index) => (
              <Education key={index} education={edu} />
            ))}
          </div>
        </section>
      )}

      {/* Skills Section */}
      <Skills skills={resumeData.skills} />
    </div>
  );
}

export default ResumeDisplay;
