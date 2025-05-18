import React from 'react';
import SubheadingForm from './SubheadingForm';
import '../styles/ResumeForm.css';

function ResumeForm({ resumeData, updateResumeData }) {
  const handleNameChange = (e) => {
    updateResumeData('name', e.target.value);
  };

  const handleAddSubheading = (subheading) => {
    const updatedSubheadings = [...(resumeData.subheadings || []), subheading];
    updateResumeData('subheadings', updatedSubheadings);
  };

  const handleUpdateSubheading = (index, updatedSubheading) => {
    const updatedSubheadings = [...resumeData.subheadings];
    updatedSubheadings[index] = updatedSubheading;
    updateResumeData('subheadings', updatedSubheadings);
  };

  const handleRemoveSubheading = (index) => {
    const updatedSubheadings = resumeData.subheadings.filter((_, i) => i !== index);
    updateResumeData('subheadings', updatedSubheadings);
  };

  return (
    <div className="resume-form">
      <h2>Resume Builder</h2>
      
      <div className="form-section">
        <h3>Name</h3>
        <input
          type="text"
          value={resumeData.name}
          onChange={handleNameChange}
          placeholder="Your Name"
          className="form-input"
        />
      </div>

      <div className="form-section">
        <h3>Contact Information</h3>
        <SubheadingForm
          subheadings={resumeData.subheadings || []}
          onAdd={handleAddSubheading}
          onEdit={handleUpdateSubheading}
          onRemove={handleRemoveSubheading}
        />
        <br />
      </div>
    </div>
  );
}

export default ResumeForm;
