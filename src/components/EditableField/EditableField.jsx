import React, { useState, useEffect } from "react";

const EditableField = ({ value, onChange, className, placeholder }) => {
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        console.log("EditableField rendered with:", {
            value,
            className,
            placeholder,
            editing,
        });
    }, [value, className, placeholder, editing]);

    return editing ? (
        <input
            autoFocus
            className={`editable-field ${className}`}
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
            onBlur={() => setEditing(false)}
            onKeyDown={(e) => {
                if (e.key === "Enter") e.target.blur();
            }}
        />
    ) : (
        <span
            className={className}
            onClick={() => setEditing(true)}
            style={{ cursor: "text" }}
        >
            {value || placeholder}
        </span>
    );
};

export default EditableField;
