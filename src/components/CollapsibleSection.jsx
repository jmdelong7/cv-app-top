import React, { useState } from 'react';
import '../styles/CollapsibleSection.css';

const CollapsibleSection = ({ title, children, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapsible-section ${isOpen ? 'is-open' : ''}`}>
      <div className="section-header" onClick={toggleSection}>
        <h3>{title}</h3>
        <span className="toggle-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="section-content">{children}</div>}
    </div>
  );
};

export default CollapsibleSection;
