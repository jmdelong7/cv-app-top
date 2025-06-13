import React, { useState } from 'react';
import '../styles/SkillsForm.css';

function SkillsForm({ skills = [], onAddSkill, onRemoveSkill }) {
  const [formData, setFormData] = useState({
    header: '',
    skillsInput: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.header.trim() || !formData.skillsInput.trim()) return;

    const parsedSkills = formData.skillsInput
      .split(',')
      .map((s) => s.trim())
      .filter((s) => s);

    if (parsedSkills.length === 0) return;

    onAddSkill({ header: formData.header.trim(), skills: parsedSkills });

    setFormData({ header: '', skillsInput: '' });
  };

  return (
    <div className="skills-form">
      <form onSubmit={handleSubmit} className="skills-entry-form">
        <div className="form-row">
          <input
            type="text"
            name="header"
            value={formData.header}
            onChange={handleChange}
            placeholder="Skill Header (e.g., Programming Languages)"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="skillsInput"
            value={formData.skillsInput}
            onChange={handleChange}
            placeholder="Skills (comma separated)"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <button type="submit" className="btn btn-primary full-width">
            Add Skills
          </button>
        </div>
      </form>

      {skills.length > 0 && (
        <div className="skills-list-display">
          <ul>
            {skills.map((skillGroup, index) => (
              <li key={index} className="skills-item-display">
                <span className="skills-header-display">
                  {skillGroup.header}:
                </span>
                <span className="skills-names-display">
                  {skillGroup.skills.join(', ')}
                </span>
                {onRemoveSkill && (
                  <button
                    type="button"
                    onClick={() => onRemoveSkill(index)}
                    className="btn-icon"
                    aria-label="Remove skill group"
                  >
                    🗑️
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SkillsForm;
