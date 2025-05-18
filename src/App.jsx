import React, { useState } from 'react'
import ResumeForm from './components/ResumeForm'
import ResumeDisplay from './components/ResumeDisplay'
import './App.css'

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    subheadings: []
  })

  const updateResumeData = (field, value) => {
    setResumeData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="app-container">
      <div className="form-container">
        <ResumeForm 
          resumeData={resumeData}
          updateResumeData={updateResumeData}
        />
      </div>
      <div className="resume-container">
        <ResumeDisplay resumeData={resumeData} />
      </div>
    </div>
  )
}

export default App