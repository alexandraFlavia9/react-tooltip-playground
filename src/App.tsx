import React from 'react';
import './App.css';
import Tooltip from "./tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip title="title" content="content" position="bottom">
        <p>Edit <code>src/App.tsx</code> and save to reload.</p>
      </Tooltip>
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
