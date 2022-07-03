import * as React from 'react';
import { Link } from "react-router-dom";
import './style.css';

export default function App() {
  return (
    <div id="app">
      <nav id="sidebar">
        <Link to="/home">Home</Link>
        <Link to="Library">Library</Link>
        <Link to="Downloads">Downloads</Link>
        <Link to="Settings">Settings</Link>
      </nav>
      <div id="main">

      </div>
    </div>
  );
}
