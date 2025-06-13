import React, { useState } from 'react';
import SubheadingForm from './SubheadingForm';
import WorkExperienceForm from './WorkExperienceForm';
import EducationForm from './EducationForm';
import ExperienceBulletForm from './ExperienceBulletForm';
import EducationBulletForm from './EducationBulletForm';
import CollapsibleSection from './CollapsibleSection';
import SkillsForm from './SkillsForm';
import '../styles/ResumeForm.css';

function ResumeForm({ resumeData, updateResumeData }) {
  // Initialize work experiences from resumeData or empty array
  const [workExperiences, setWorkExperiences] = useState(
    resumeData.workExperiences || []
  );

  // Initialize education entries from resumeData or empty array
  const [educations, setEducations] = useState(resumeData.educations || []);

  // Initialize skills from resumeData or empty array
  const [skills, setSkills] = useState(resumeData.skills || []);

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
    const updatedSubheadings = resumeData.subheadings.filter(
      (_, i) => i !== index
    );
    updateResumeData('subheadings', updatedSubheadings);
  };

  // Work Experience Handlers
  const handleAddExperience = (newExperience) => {
    // Initialize with empty bullets array
    const experienceWithBullets = {
      ...newExperience,
      bullets: [],
    };
    const updatedExperiences = [...workExperiences, experienceWithBullets];
    setWorkExperiences(updatedExperiences);
    updateResumeData('workExperiences', updatedExperiences);
  };

  const handleUpdateExperience = (index, updatedExperience) => {
    const updatedExperiences = [...workExperiences];
    // Preserve existing bullets if they exist
    updatedExperience.bullets = updatedExperiences[index].bullets || [];
    updatedExperiences[index] = updatedExperience;
    setWorkExperiences(updatedExperiences);
    updateResumeData('workExperiences', updatedExperiences);
  };

  const handleRemoveExperience = (index) => {
    const updatedExperiences = workExperiences.filter((_, i) => i !== index);
    setWorkExperiences(updatedExperiences);
    updateResumeData('workExperiences', updatedExperiences);
  };

  // Education Handlers
  const handleAddEducation = (newEducation) => {
    // Initialize with empty bullets array
    const educationWithBullets = {
      ...newEducation,
      bullets: [],
    };
    const updatedEducations = [...educations, educationWithBullets];
    setEducations(updatedEducations);
    updateResumeData('educations', updatedEducations);
  };

  const handleUpdateEducation = (index, updatedEducation) => {
    const updatedEducations = [...educations];
    // Preserve existing bullets if they exist
    updatedEducation.bullets = updatedEducations[index].bullets || [];
    updatedEducations[index] = updatedEducation;
    setEducations(updatedEducations);
    updateResumeData('educations', updatedEducations);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
    updateResumeData('educations', updatedEducations);
  };

  // Bullet point handlers
  const handleAddBullet = (expIndex, bulletText) => {
    const updatedExperiences = [...workExperiences];
    if (!updatedExperiences[expIndex].bullets) {
      updatedExperiences[expIndex].bullets = [];
    }
    updatedExperiences[expIndex].bullets.push(bulletText);
    setWorkExperiences(updatedExperiences);
    updateResumeData('workExperiences', updatedExperiences);
  };

  const handleRemoveBullet = (expIndex, bulletIndex) => {
    const updatedExperiences = [...workExperiences];
    updatedExperiences[expIndex].bullets = updatedExperiences[
      expIndex
    ].bullets.filter((_, i) => i !== bulletIndex);
    setWorkExperiences(updatedExperiences);
    updateResumeData('workExperiences', updatedExperiences);
  };

  // Education Bullet point handlers
  const handleAddEducationBullet = (eduIndex, bulletText) => {
    const updatedEducations = [...educations];
    if (!updatedEducations[eduIndex].bullets) {
      updatedEducations[eduIndex].bullets = [];
    }
    updatedEducations[eduIndex].bullets.push(bulletText);
    setEducations(updatedEducations);
    updateResumeData('educations', updatedEducations);
  };

  const handleRemoveEducationBullet = (eduIndex, bulletIndex) => {
    const updatedEducations = [...educations];
    updatedEducations[eduIndex].bullets = updatedEducations[
      eduIndex
    ].bullets.filter((_, i) => i !== bulletIndex);
    setEducations(updatedEducations);
    updateResumeData('educations', updatedEducations);
  };

  // Skills Handlers
  const handleAddSkill = (newSkillGroup) => {
    const updatedSkills = [...skills, newSkillGroup];
    setSkills(updatedSkills);
    updateResumeData('skills', updatedSkills);
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
    updateResumeData('skills', updatedSkills);
  };

  // Clear all data handler
  const handleClearAllData = () => {
    // Reset all local state
    setWorkExperiences([]);
    setEducations([]);
    setSkills([]);

    // Reset all resume data
    updateResumeData('name', '');
    updateResumeData('subheadings', []);
    updateResumeData('workExperiences', []);
    updateResumeData('educations', []);
    updateResumeData('skills', []);
  };

  return (
    <div className="resume-form">
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

      <CollapsibleSection title="Work Experience Bullets">
        <div className="form-section">
          <ExperienceBulletForm
            experiences={workExperiences}
            onAddBullet={handleAddBullet}
            onRemoveBullet={handleRemoveBullet}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Education">
        <div className="form-section">
          <EducationForm
            educations={educations}
            onAdd={handleAddEducation}
            onEdit={handleUpdateEducation}
            onRemove={handleRemoveEducation}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Education Bullets">
        <div className="form-section">
          <EducationBulletForm
            educations={educations}
            onAddBullet={handleAddEducationBullet}
            onRemoveBullet={handleRemoveEducationBullet}
          />
        </div>
      </CollapsibleSection>

      <CollapsibleSection title="Skills">
        <div className="form-section">
          <SkillsForm
            skills={skills}
            onAddSkill={handleAddSkill}
            onRemoveSkill={handleRemoveSkill}
          />
        </div>
      </CollapsibleSection>

      <div className="clear-data-container">
        <button
          onClick={handleClearAllData}
          className="clear-data-button"
          aria-label="Clear all resume data"
        >
          Clear All Data
        </button>
      </div>
    </div>
  );
}

export default ResumeForm;
