import React from 'react'

function AddFieldBtn({ onClick }) {
  return (
    <button
      className="add-field-btn"
      onClick={onClick}
      style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}
    >
      <span style={{ fontSize: '1.25rem' }}>+</span>
    </button>
  )
}

export default AddFieldBtn