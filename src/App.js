import React from 'react';
import logo from './logo.svg';
import Basics from "./components/basics";
import Child from "./components/child";
import Navbar from "./components/Navbar";
import './App.css';
import CallApi from "./components/callApi/callApi"
import Men from './components/men';
import Women from './components/women';
import Kids from './components/kids'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Basics />
      <Child name="komal" age="28" />
      <Child name="komalSingh komal" age="48" />
      <Child name="komalSingh" age="29" />
      <CallApi />
      <Men />
      <Women />
      <Kids></Kids>
    </div>
  );
}

export default App;
