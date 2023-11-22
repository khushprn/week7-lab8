// Section.js
import React from 'react';
import './Section.css';

const Section = ({ heading, content }) => {
  return (
    <section className="section">
      <h2>{heading}</h2>
      <p>{content}</p>
    </section>
  );
};

export default Section;