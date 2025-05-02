import React from "react";
import {
    NameField,
    ContactField,
    TitleField,
} from "./components/EditableField/index";
import "./styles/Header.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Editable Field Demo</h1>
                <div>
                    <NameField value="John Doe" />
                </div>
                <div>
                    <ContactField value="john.doe@example.com" />
                </div>
                <div>
                    <TitleField value="Software Engineer" />
                </div>
            </header>
        </div>
    );
}

export default App;
