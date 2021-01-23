import React,{Component} from 'react';
import Aux from '../HOC/Auxi';
import './TopBar.css';
import Logo from '../assets/Images/homework.png';
import Todo from '../assets/Images/todo.png';
import { MDBAnimation } from "mdbreact";

class TopBar extends Component
{
    render()
    {
        return (
            <Aux>
             <div className="shadow-box-example hoverable">
                <div className="TopBar_Logo">
                <MDBAnimation type="swing" infinite duration="5s" delay="10s">
                    <img src={Logo} alt="Logo" />
                    </MDBAnimation> 
             
                    </div>
              
                  

                    <MDBAnimation type="swing" infinite duration="5s" delay="10s">
                    <img src={Todo} alt="Logo" />
                    </MDBAnimation> 
             </div>
            </Aux>
        );
    }
}

export default TopBar;