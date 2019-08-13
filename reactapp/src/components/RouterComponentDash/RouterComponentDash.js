import React from 'react';
import '../../App.css';
import ExampleComponent from '../ExampleComponent/ExampleComponent.js';
import ToDoComponent from '../ToDoComponent/ToDoComponent.js'

class RoterComponentDash extends React.Component{
    render(){
        return (
          <div className="container">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="clearfix panelborder">
                <div className="clearfix col-md-12 col-xs-10 panel-heading-bottom-border"> 
                    <span> This is a react App Exampel Heading</span>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div><ExampleComponent></ExampleComponent></div>
                </div>
              </div>
            </div>              
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="clearfix panelborder">
                <div className="clearfix col-md-12 col-xs-10 panel-heading-bottom-border"> 
                    <span> This is a react App ToDo Heading</span>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div><ToDoComponent></ToDoComponent></div>
                </div>
              </div>
            </div>              
          </div>
        )
    }
}
export default RoterComponentDash;