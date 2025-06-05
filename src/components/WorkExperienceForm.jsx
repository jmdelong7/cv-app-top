import React, { useState } from 'react';
import '../styles/WorkExperienceForm.css';

function WorkExperienceForm({ experiences = [], onAdd, onEdit, onRemove }) {
  const [formData, setFormData] = useState({
    organization: '',
    date: '',
    role: '',
    location: ''
  });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.organization || !formData.role) return;

    if (editingIndex !== null) {
      onEdit(editingIndex, { ...formData });
      setEditingIndex(null);
    } else {
      onAdd({ ...formData });
    }
    
    // Reset form
    setFormData({
      organization: '',
      date: '',
      role: '',
      location: ''
    });
  };

  const handleEdit = (index) => {
    setFormData({ ...experiences[index] });
    setEditingIndex(index);
  };

  const handleCancel = () => {
    setFormData({
      organization: '',
      date: '',
      role: '',
      location: ''
    });
    setEditingIndex(null);
  };

  return (
    <div className="work-experience-form">
      <form onSubmit={handleSubmit} className="experience-form">
        <div className="form-row">
          <input
            type="text"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Organization"
            className="form-input"
            required
          />
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
            name="role"
            value={formData.role}
            onChange={handleChange}
            placeholder="Role"
            className="form-input"
            required
          />
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
              Add Experience
            </button>
          ) : (
            <>
              <button type="submit" className="btn btn-primary">
                Update Experience
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

      {experiences.length > 0 && (
        <div className="experience-list">
          <ul>
            {experiences.map((exp, index) => (
              <li key={index} className="experience-item">
                <div className="experience-header">
                  <strong>{exp.organization}</strong>
                  <span>{exp.date}</span>
                </div>
                <div className="experience-details">
                  <span>{exp.role}</span>
                  <span>{exp.location}</span>
                </div>
                <div className="experience-actions">
                  <button
                    type="button"
                    onClick={() => handleEdit(index)}
                    className="btn-icon"
                    aria-label="Edit experience"
                  >
                    ✏️
                  </button>
                  <button
                    type="button"
                    onClick={() => onRemove(index)}
                    className="btn-icon"
                    aria-label="Remove experience"
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

export default WorkExperienceForm;
