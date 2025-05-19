import React, { useState } from 'react';
import '../styles/SubheadingForm.css';

function SubheadingForm({ subheadings, onAdd, onEdit, onRemove }) {
  const [formData, setFormData] = useState({ name: '', url: '' });
  const [editingIndex, setEditingIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    // Format URL if needed
    const formattedData = {
      ...formData,
      url: formData.url && !formData.url.match(/^https?:\/\//)
        ? `https://${formData.url}`
        : formData.url
    };

    if (editingIndex !== null) {
      onEdit(editingIndex, formattedData);
      setEditingIndex(null);
    } else {
      onAdd(formattedData);
    }
    setFormData({ name: '', url: '' });
  };

  const handleEdit = (index) => {
    setFormData({ ...subheadings[index] });
    setEditingIndex(index);
  };

  const handleCancel = () => {
    setFormData({ name: '', url: '' });
    setEditingIndex(null);
  };

  return (
    <div className="subheading-form-container">
      <form onSubmit={handleSubmit} className="subheading-form">
        <div className="form-row">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="phone, email, etc."
            className="form-input"
            required
          />
          <input
            type="text"
            name="url"
            value={formData.url}
            onChange={handleChange}
            placeholder="URL (e.g., example.com)"
            className="form-input"
          />
        </div>
        <div className="form-row">
          <button type="submit" className="btn btn-primary full-width">
            {editingIndex !== null ? 'Update' : 'Add Contact Info'}
          </button>
          {editingIndex !== null && (
            <button 
              type="button" 
              className="btn btn-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="subheading-list">
        {subheadings.map((sub, index) => (
          <div key={index} className="subheading-form-item">
            <span>
              {sub.name}
              {sub.url && (
                <a href={sub.url} target="_blank" rel="noopener noreferrer" className="subheading-link">
                  {' '} (link)
                </a>
              )}
            </span>
            <div className="subheading-actions">
              <button 
                onClick={() => handleEdit(index)}
                className="btn-icon"
                type="button"
                aria-label="Edit subheading"
              >
                ✏️
              </button>
              <button 
                onClick={() => onRemove(index)}
                className="btn-icon"
                type="button"
                aria-label="Remove subheading"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubheadingForm;
