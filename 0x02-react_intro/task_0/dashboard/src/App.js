import React from "react";
import "./App.css";
import holberton_logo from "./holberton_logo.jpg";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </div>
    </>
  );
}

export default App;
