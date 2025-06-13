import React, { useState } from 'react';
import '../styles/EducationBulletForm.css';

function EducationBulletForm({
  educations = [],
  onAddBullet,
  onRemoveBullet,
}) {
  const [selectedEduIndex, setSelectedEduIndex] = useState('');
  const [bulletText, setBulletText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEduIndex === '' || !bulletText.trim()) return;

    onAddBullet(parseInt(selectedEduIndex), bulletText.trim());
    setBulletText('');
  };

  const handleRemoveBullet = (eduIndex, bulletIndex) => {
    onRemoveBullet(eduIndex, bulletIndex);
  };

  return (
    <div className="experience-bullet-form">
      <form onSubmit={handleSubmit} className="bullet-form">
        <div className="form-row">
          <select
            value={selectedEduIndex}
            onChange={(e) => setSelectedEduIndex(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select Education</option>
            {educations.map((edu, index) => (
              <option key={index} value={index}>
                {edu.university} - {edu.degree}
              </option>
            ))}
          </select>
        </div>

        <div className="form-row">
          <input
            type="text"
            value={bulletText}
            onChange={(e) => setBulletText(e.target.value)}
            placeholder="Add bullet point"
            className="form-input"
            required
          />
        </div>

        <div className="form-row">
          <button type="submit" className="btn btn-primary full-width">
            Add Bullet Point
          </button>
        </div>
      </form>

      {educations.length > 0 && (
        <div className="bullet-list">
          {educations.map(
            (edu, eduIndex) =>
              edu.bullets &&
              edu.bullets.length > 0 && (
                <div key={eduIndex} className="experience-bullets">
                  <h4>{edu.university} - Bullet Points</h4>
                  <ul>
                    {edu.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="bullet-item">
                        <span>{bullet}</span>
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveBullet(eduIndex, bulletIndex)
                          }
                          className="btn-icon"
                          aria-label="Remove bullet"
                        >
                          🗑️
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )
          )}
        </div>
      )}
    </div>
  );
}

export default EducationBulletForm;
