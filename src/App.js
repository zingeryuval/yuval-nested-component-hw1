import React from 'react';
import logo from './logo.svg';
import './App.css';
import Article from './Article';

function App() {
  return (
    <div className="App">
      <Article title="This is my Title" content="This is my Content" image="https://opensas.files.wordpress.com/2013/06/32021684.jpg" ></Article>
    </div>
  );
}

export default App;
