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
      <h1 className="Header">Library</h1>
      <hr />
    </div>
  )
}

function Downloads() {
  return (
    <div>
      <h1 className="Header">Downloads</h1>
      <hr />
    </div>
  )
}

function Settings() {
  return (
    <div>
      <h1 className="Settings">Settings</h1>
      <hr />
    </div>
  )
}

export default function App() {
  return (
    <div id="app">
      <nav id="sidebar">
        <Link to="/home">Home</Link>
        <Link to="/library">Library</Link>
        <Link to="/downloads">Downloads</Link>
        <Link to="/settings">Settings</Link>
      </nav>
      <div id="main">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="library" element={<Library />} />
        </Routes>
      </div>
    </div>
  );
}
