import resume from "../resume.json";
import React, { useState } from "react";
import Section from "./Section";

function Header() {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(resume.header);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    return <Section title={"header"}></Section>;
}

export default Header;
