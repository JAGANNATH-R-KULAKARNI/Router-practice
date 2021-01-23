import React,{ Component } from 'react';
import Aux from './HOC/Auxi';
import TopBar from './TopBar/TopBar';
import NameOfTask from './Inputs/NameOfTask/NameOfTask';
import { MDBBtn, MDBIcon } from "mdbreact";
import FromDatabase from './Outputs/FromDatabase';

class App extends Component
{
  render()
  {
    return (
      <Aux>
           
            <NameOfTask />
           
           <FromDatabase />
           
      </Aux>
    );
  }
};

export default App;