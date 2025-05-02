import EditableField from "./EditableField";
import React, { useState } from "react";

export const NameField = (props) => {
    const [text, setText] = useState(props.value);
    return (
        <EditableField
            {...props}
            value={text}
            onChange={setText}
            className="name-field"
            placeholder="Enter your name"
        />
    );
};

export const ContactField = (props) => {
    const [text, setText] = useState(props.value);
    return (
        <EditableField
            {...props}
            value={text}
            onChange={setText}
            className="contact-field"
            placeholder="email, phone, etc."
        />
    );
};

export const TitleField = (props) => {
    const [text, setText] = useState(props.value);
    return (
        <EditableField
            {...props}
            value={text}
            onChange={setText}
            className="title-field"
            placeholder="Section Title"
        />
    );
};
