import React from 'react';
import './App.css';
import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';


function App() {
  return (
    <div className="App">
      <ParentComp />
    </div>
  );
}

export default App;
