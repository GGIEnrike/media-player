import * as React from 'react';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import './style.css';

function Home() {
  return (
    <div>
      <h1 className="Header">Home</h1>
      <hr />
    </div>
  )
}

function Library() {
  return (
    <div>
      <h1 className="Header"></h1>
      <hr />
    </div>
  )
}

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
        <Routes>
          <Route path="home" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}
