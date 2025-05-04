import React from 'react'
import AddFieldBtn from './AddFieldBtn'

function InputFieldShell({ removeBtn, field, addBtn }) {
    return (
        <div>
            <label htmlFor={field}>{field}</label>
            <input type="text" id={field} />
            {removeBtn && <button onClick={removeBtn}>Remove</button>}
            {addBtn && <AddFieldBtn onClick={addBtn} />}
        </div>
    )
}

export default InputFieldShell