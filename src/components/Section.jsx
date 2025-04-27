import React, { useState } from "react";
function Section({ title, children }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSubmit = () => {
        setIsEditing(false);
        // Form submission logic would be handled by parent components
    };

    return (
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">{title}</h2>
                <div className="section-controls">
                    {isEditing ? (
                        <button onClick={handleSubmit}>Submit</button>
                    ) : (
                        <button onClick={handleEditToggle}>Edit</button>
                    )}
                </div>
            </div>
            <div className="section-content">{children}</div>
        </section>
    );
}

export default Section;
