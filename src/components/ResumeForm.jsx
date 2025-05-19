import React, { useState } from 'react';
import SubheadingForm from './SubheadingForm';
import WorkExperienceForm from './WorkExperienceForm';
import CollapsibleSection from './CollapsibleSection';
import '../styles/ResumeForm.css';

function ResumeForm({ resumeData, updateResumeData }) {
  // Initialize work experiences from resumeData or empty array
  const [workExperiences, setWorkExperiences] = useState(resumeData.workExperiences || []);
  const handleNameChange = (e) => {
    updateResumeData('name', e.target.value);
  };

  const handleAddSubheading = (subheading) => {
    const updatedSubheadings = [...(resumeData.subheadings || []), subheading];
    updateResumeData('subheadings',  updatedSubheadings);
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

  // Work Experience Handlers
  const handleAddExperience = (newExperience) => {
    const updatedExperiences = [...workExperiences, newExperience];
    setWorkExperiences(updatedExperiences);
    updateResumeData('workExperiences', updatedExperiences);
  };

  const handleUpdateExperience = (index, updatedExperience) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[index] = updatedExperience;
    setWorkExperiences(updatedExperiences);
    updateResumeData('workExperiences', updatedExperiences);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = workExperiences.filter((_, i) => i !== index);
    setWorkExperiences(updatedExperiences);
    updateResumeData('workExperiences', updatedExperiences);
  };

  return (
    <div className="resume-form">
      <h2>Resume Builder</h2>
      
      <CollapsibleSection title="Name">
        <div className="form-section">
          <input
            type="text"
            value={resumeData.name}
            onChange={handleNameChange}
            placeholder="Your Name"
            className="form-input"
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Contact Information">
        <div className="form-section">
          <SubheadingForm
            subheadings={resumeData.subheadings || []}
            onAdd={handleAddSubheading}
            onEdit={handleUpdateSubheading}
            onRemove={handleRemoveSubheading}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Work Experience">
        <div className="form-section">
          <WorkExperienceForm
            experiences={workExperiences}
            onAdd={handleAddExperience}
            onEdit={handleUpdateExperience}
            onRemove={handleRemoveExperience}
          />
        </div>
      </CollapsibleSection>
    </div>
  );
}

export default ResumeForm;
