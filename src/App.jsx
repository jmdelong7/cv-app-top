import React, { useState } from 'react';
import ResumeForm from './components/ResumeForm';
import ResumeDisplay from './components/ResumeDisplay';
import dummyData from './dummyData.json';
import './App.css';

function App() {
  const [resumeData, setResumeData] = useState(dummyData);
  const [isFormVisible, setIsFormVisible] = useState(true);

  const updateResumeData = (field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="app-container">
      <div className={`form-container ${!isFormVisible ? 'collapsed' : ''}`}>
        {isFormVisible ? (
          <>
            <div className="form-header">
              <h2>Resume Builder</h2>
              <button
                className="toggle-form-btn"
                onClick={toggleFormVisibility}
                aria-label="Hide form"
              >
                ◀
              </button>
            </div>
            <ResumeForm
              resumeData={resumeData}
              updateResumeData={updateResumeData}
            />
          </>
        ) : (
          <button
            className="toggle-form-btn expand-btn"
            onClick={toggleFormVisibility}
            aria-label="Show form"
          >
            ▶
          </button>
        )}
      </div>
      <div className={`resume-container ${!isFormVisible ? 'expanded' : ''}`}>
        <ResumeDisplay resumeData={resumeData} />
      </div>
    </div>
  );
}

export default App;
