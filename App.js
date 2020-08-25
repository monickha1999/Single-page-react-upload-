import React from 'react';
import logo from './background.png';
import './App.css';
import icon from './doctoricon.png';
import upload from './upload.png';
import left from './back@2x.png';
import right from './forward@2x.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <img src={icon} className="App-log" alt="icon"/>
        <h3>Upload your reports</h3>
        
        <img src={upload} className="upload" alt="icon"/>
        <img src={left} className="left" alt="left"/>
        <img src={right} className="right" alt="right"/>

        <button type="button" size="700">Pass</button>
        <button type="button1" size="700">Submit</button>
        </header>
        

    </div>
    
  );
}

export default App;
