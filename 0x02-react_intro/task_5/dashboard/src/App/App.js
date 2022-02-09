import React from "react";
import "./App.css";
import holberton_logo from "../assets/holberton_logo.jpg";
import { getFullYear, getFooterCopy } from "../utils/utils";

function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <button>OK</button>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

export default App;
