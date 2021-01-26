import React,{Component} from 'react';
import Aux from '../../HOC/Auxi';
import './NavBar.css';
import {Link} from 'react-router-dom';

class navBar extends Component
{
    render()
    {
        return (
            <Aux>
                <ul className="NavBar">
                     <Link className="NavBarElements" to="/posts">Posts</Link>
                     <Link className="NavBarElements" to="/comments">Comments</Link>
                     <Link className="NavBarElements" to="/albums">Albums</Link>
                     <Link className="NavBarElements" to="/photos">Photos</Link>
                     <Link className="NavBarElements" to="/todos">Todos</Link>
                     <Link className="NavBarElements" to="/users">Users</Link>
                </ul>
            </Aux>
        );
    }
}

export default navBar;