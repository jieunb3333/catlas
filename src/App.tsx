import React from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './Gallery'
import Main from './Main'
import Board from './Board'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <Main/>
          <Gallery/>
          <Board/>
        </p>
      </header>
    </div>
  );
}

export default App;
