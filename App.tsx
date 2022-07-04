import * as React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import './style.css';

function Card() {
  return (
    <Link to="/library/doctor-strange" className="Card">
      <h4>Dr. Strange</h4>
      <img src="https://static.hdrezka.ac/i/2022/2/18/j09948c99c8cfwk71c80m.png"></img>
    </Link>
  );
}

function CardView() {
  return (
    <div className="CardView">
      {Array.apply(null, Array(4)).map(function (x, i) {
        return <Card />;
      })}
    </div>
  );
}

function Home() {
  return (
    <div className="content">
      <h1>Home</h1>
      <hr />
      <h2>Recommended for you</h2>
      <CardView category="Recommended" />
      <h2>Continue watching</h2>
      <CardView category="Continue" />
    </div>
  );
}

function Library() {
  return (
    <div className="content">
      <h1>Library</h1>
      <hr />
    </div>
  );
}

function Downloads() {
  return (
    <div className="content">
      <h1>Downloads</h1>
      <hr />
    </div>
  );
}

function Settings() {
  return (
    <div className="content">
      <h1>Settings</h1>
      <hr />
    </div>
  );
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
