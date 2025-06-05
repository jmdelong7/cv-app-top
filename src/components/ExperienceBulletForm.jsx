import React, { useState } from 'react';
import '../styles/ExperienceBulletForm.css';

function ExperienceBulletForm({
  experiences = [],
  onAddBullet,
  onRemoveBullet,
}) {
  const [selectedExpIndex, setSelectedExpIndex] = useState('');
  const [bulletText, setBulletText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedExpIndex === '' || !bulletText.trim()) return;

    onAddBullet(parseInt(selectedExpIndex), bulletText.trim());
    setBulletText('');
  };

  const handleRemoveBullet = (expIndex, bulletIndex) => {
    onRemoveBullet(expIndex, bulletIndex);
  };

  return (
    <div className="experience-bullet-form">
      <form onSubmit={handleSubmit} className="bullet-form">
        <div className="form-row">
          <select
            value={selectedExpIndex}
            onChange={(e) => setSelectedExpIndex(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Select Experience</option>
            {experiences.map((exp, index) => (
              <option key={index} value={index}>
                {exp.organization} - {exp.role}
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

      {experiences.length > 0 && (
        <div className="bullet-list">
          {experiences.map(
            (exp, expIndex) =>
              exp.bullets &&
              exp.bullets.length > 0 && (
                <div key={expIndex} className="experience-bullets">
                  <h4>{exp.organization} - Bullet Points</h4>
                  <ul>
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="bullet-item">
                        <span>{bullet}</span>
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveBullet(expIndex, bulletIndex)
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

export default ExperienceBulletForm;
