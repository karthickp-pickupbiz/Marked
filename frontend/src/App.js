import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [markdown, setMarkdown] = useState(''); 
  const [html, setHtml] = useState(''); 

  useEffect(() => {
    const convertMarkdownToHtml = async () => {
      if (markdown) {
        const response = await fetch('http://localhost:5000/convert', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ markdown }),
        });
        const data = await response.json();
        setHtml(data.html); 
      } else {
        setHtml(''); 
      }
    };

    convertMarkdownToHtml();
  }, [markdown]); 

  return (
    <div className="app">
      <div className="editor">
        <h2>Markdown Editor</h2>
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)} 
          placeholder="Type your Markdown here"
        />
      </div>
      <div className="preview">
        <h2>Preview</h2>
        <div
          className="html-preview"
          dangerouslySetInnerHTML={{ __html: html }} 
        />
      </div>
    </div>
  );
};

export default App;



