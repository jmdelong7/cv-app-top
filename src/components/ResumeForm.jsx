import React, { useState } from 'react'
import Header from './Header'
import InputFieldShell from './InputFieldShell'

function ResumeForm() {
  const [fields, setFields] = useState([''])

  const addField = idx => {
    const newFields = [...fields]
    newFields.splice(idx + 1, 0, '')
    setFields(newFields)
  }

  const removeField = idx => {
    if (fields.length === 1) return
    setFields(fields.filter((_, i) => i !== idx))
  }

  const updateField = (idx, value) => {
    const newFields = [...fields]
    newFields[idx] = value
    setFields(newFields)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <form className="resume-form" onSubmit={handleSubmit}>
      <Header />
      <div className="form-sections">
        {fields.map((value, idx) => (
          <InputFieldShell
            key={idx}
            value={value}
            onChange={v => updateField(idx, v)}
            onAdd={() => addField(idx)}
            onRemove={() => removeField(idx)}
          />
        ))}
      </div>
    </form>
  )
}

export default ResumeForm
