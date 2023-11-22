// App.js
import React from 'react';
import './App.css';
import Header from './Header';
import Section from './Section';
import Article from './Article';
import Sidebar from './Sidebar';
import Footer from './Footer';

const App = () => {
  // Define JavaScript variables for dynamic content
  const headerTitle = 'My React App';
  const sectionHeading = 'Welcome to website of Khushpreet';
  const sectionContent = 'This is a sample React application made by Khush.';
  const articleTitle = 'Atricle of React';
  const articleText = 'This is my first sample React application.';
  const sidebarContent = 'Sidebar Content';
  const footerText = '© 2023 My React App';

  return (
    <div className="app">
      <Header title={headerTitle} />
      <Section heading={sectionHeading} content={sectionContent} />
      <Article title={articleTitle} text={articleText} />
      <Sidebar content={sidebarContent} />
      <Footer text={footerText} />
    </div>
  );
};

export default App;