import React from 'react';
import logo from './logo.svg';
import Basics from "./components/basics";
import Child from "./components/child";
import './App.css';
import CallApi from "./components/callApi/callApi"

function App() {
  return (
    <div className="App">
      <Basics />
      <Child name="komal" age="28" />
      <Child name="komalSingh komal" age="48" />
      <Child name="komalSingh" age="29" />
      <CallApi />
    </div>
  );
}

export default App;
