import { useState } from 'react';
import Section from './components/Section';
import Header from './components/Header1';
import './App.css';

function App() {
  return (
    <>
      <Header></Header>
      <h1>Hello World</h1>
      <Section title="Section 1">
        <p>This is the first section</p>
      </Section>
    </>
  );
}

export default App;
