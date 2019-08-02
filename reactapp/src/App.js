import React from 'react';
import './App.css';
import ExampleComponent from './components/ExampleComponent/ExampleComponent.js';
import ToDoComponent from './components/ToDoComponent/ToDoComponent.js'
const divStyle = {
  border : '1px solid pink',
  display : 'block',
  height: '100px',
  overflow : 'hidden'
};
const headingStyle = {
  border : '1px solid pink',
  display : 'block',
  height: '25px',
  overflow : 'hidden'
};

function App() {
  let lClasses = `DashBoardLeft clearfix`;
  let rClasses = `DashBoardRight clearfix`;

  return (
    <div className="App">
      <div className="Appx">This is a react dashboard</div>
      <div className={lClasses}>
        <div style={headingStyle}>This is a react App Exampel Heading</div>
        <div style={divStyle}><ExampleComponent></ExampleComponent></div>
      </div>
      <div className={rClasses}>
        <div style={headingStyle}>This is a react App ToDo Heading</div>
        <div style={divStyle}><ToDoComponent></ToDoComponent></div>
      </div>
    </div>

   );
}

export default App;
