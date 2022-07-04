import * as React from 'react';
import {
  Link,
  Routes,
  Route
} from "react-router-dom";
import './style.css';

function Card() {
  return (
    <div className="Card">
      <h4>Film Name</h4>
    </div>
  )
}

function CardView() {
  return (
    <div className="CardView">
      { Array.apply(null, Array(25)).map(function (x, i) { return <Card /> }) }
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <hr />
      <h2>Recommended for you</h2>
      <CardView category="Recommended"/>
    </div>
  )
}

function Library() {
  return (
    <div>
      <h1 >Library</h1>
      <hr />
    </div>
  )
}

function Downloads() {
  return (
    <div>
      <h1 >Downloads</h1>
      <hr />
    </div>
  )
}

function Settings() {
  return (
    <div>
      <h1 >Settings</h1>
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
          <Route path="downloads" element={<Downloads />} />
          <Route path="settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
