import React, { useState } from "react";

function FormSection({ fields }) {
    const [formData, setFormData] = useState(
        fields.reduce((acc, field) => ({ ...acc, [field]: "" }), {})
    );

    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData((prev) => {
            prev, ([name] = value);
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return null;
}

export default FormSection;
