import React, { useState } from 'react'
import '../styles/Header.css'

function Header() {
  const [name, setName] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const handleNameClick = () => {
    setIsEditing(true)
  }

  const handleNameBlur = () => {
    setIsEditing(false)
  }

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  return (
    <header>
      {isEditing ? (
        <input 
          type="text"
          value={name} 
          onChange={handleNameChange} 
          className="header-name"
          autoFocus
          onBlur={handleNameBlur}
        />
      ) : (
        <h1 
          className="header-name" 
          onClick={handleNameClick}
        >
          {name || 'Name'}
        </h1>
      )}
    </header>
  )
}

export default Header