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
  const sectionHeading = 'Welcome to my website';
  const sectionContent = 'This is a sample React application.';
  const articleTitle = 'Article Title';
  const articleText = 'This is the content of the article.';
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