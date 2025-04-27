// Create a header component. This will utilize the section component.
// The header will take input from the user and display their name, and various info
// It will be be able to be edited by clicking a master edit button.

import React, { useState } from 'react';
import Section from './Section';

function Header() {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    title: 'Software Developer',
    company: 'Tech Company',
    email: 'john.doe@example.com',
  });

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <header className="header">
      <div className="header-controls">
        <button onClick={handleEditToggle}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>

      <Section title="User Profile">
        {isEditing ? (
          <div className="edit-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <input
                type="text"
                id="title"
                name="title"
                value={userData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company:</label>
              <input
                type="text"
                id="company"
                name="company"
                value={userData.company}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
              />
            </div>
          </div>
        ) : (
          <div className="user-info">
            <h3>{userData.name}</h3>
            <p>{userData.title}</p>
            <p>{userData.company}</p>
            <p>{userData.email}</p>
          </div>
        )}
      </Section>
    </header>
  );
}

export default Header;
