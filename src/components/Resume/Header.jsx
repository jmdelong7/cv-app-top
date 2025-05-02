import React from "react";
import { NameField, ContactField, TitleField } from "../EditableField";

const Header = () => {
    return (
        <div className="header">
            <NameField value="John Doe" />
            <ContactField value="john.doe@example.com" />
            <TitleField value="Software Engineer" />
        </div>
    );
};

export default Header;
