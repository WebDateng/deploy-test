import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useLocation } from "react-router-dom";

function App() {
  const [search, setSearch] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search).get("name");
    setSearch(queryParams);
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React {search}
        </a>
      </header>
    </div>
  );
}

export default App;
