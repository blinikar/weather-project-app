import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SampleComponent} from "./components/SampleComponent";

function App() {
  return (
    <div className="App">
      <SampleComponent text={"This is sample component"} />
    </div>
  );
}

export default App;
