import React from 'react'
import '../styles/InputFieldShell.css'

export default function InputFieldShell({ value, onChange, onAdd, onRemove }) {
    return (
        <div className="input-field-shell">
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
            <button onClick={onRemove}>–</button>
            <button onClick={onAdd}>+</button>
        </div>
    )
}