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

function ResumeDisplay({ resumeData }) {
  return (
    <div className="resume-display">
      <header className="resume-header">
        <h1 className="resume-name">{resumeData.name || 'Your Name'}</h1>
        <Subheadings subheadings={resumeData.subheadings} />
        <hr />
      </header>
    </div>
  );
}

export default ResumeDisplay;
