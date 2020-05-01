import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div className="header">
        <h1>
          Coon Miner
        </h1>
      </div>
      <div className="container">
        <form action="/" data-remote="true" method="post" className="search-container">
          <input type="text" id="q" name="q" placeholder="What can I help you with today?" className="search-input"/>
          <img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png" alt="search icon"/>
        </form>
      </div>
      <small>You are running this application in <b>{process.env.FOO}</b> mode.</small>
    </div>
  );
}

export default App;
