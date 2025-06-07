import React, { useState } from 'react';
import '../styles/EducationForm.css';

function EducationForm({ educations = [], onAdd, onEdit, onRemove }) {
  const [formData, setFormData] = useState({
    university: '',
    date: '',
    degree: '',
    location: '',
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.university || !formData.degree) return;

    if (editingIndex !== null) {
      onEdit(editingIndex, { ...formData });
      setEditingIndex(null);
    } else {
      onAdd({ ...formData });
    }

    // Reset form
    setFormData({
      university: '',
      date: '',
      degree: '',
      location: '',
    });
  };

  const handleEdit = (index) => {
    setFormData({ ...educations[index] });
    setEditingIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      university: '',
      date: '',
      degree: '',
      location: '',
    });
    setEditingIndex(null);
  };

  return (
    <div className="education-form">
      <form onSubmit={handleSubmit} className="education-entry-form">
        <div className="form-row">
          <input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            placeholder="University/Institution"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Date"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="Degree"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="form-input"
          />
        </div>
        <div className="form-row">
          {editingIndex === null ? (
            <button type="submit" className="btn btn-primary full-width">
              Add Education
            </button>
          ) : (
            <>
              <button type="submit" className="btn btn-primary">
                Update Education
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>

      {educations.length > 0 && (
        <div className="education-list">
          <ul>
            {educations.map((edu, index) => (
              <li key={index} className="education-item">
                <div className="education-header">
                  <strong>{edu.university}</strong>
                  <span>{edu.date}</span>
                </div>
                <div className="education-details">
                  <span>{edu.degree}</span>
                  <span>{edu.location}</span>
                </div>
                <div className="education-actions">
                  <button
                    type="button"
                    onClick={() => handleEdit(index)}
                    className="btn-icon"
                    aria-label="Edit education"
                  >
                    ✏️
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="btn-icon"
                    aria-label="Remove education"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default EducationForm;
