import React,{Component} from 'react';
import Aux from '../HOC/Auxi';
import Photos from '../Components/Photos/Photos';
import  Comments from '../Components/Comments/Comments';
import Albums from '../Components/Albums/Albums';
import Posts from '../Components/Posts/Posts';
import Todos from '../Components/Todos/Todos';
import Users from '../Components/Users/Users';
import Error from '../Components/404error/404error';

import {Route,Switch, Redirect} from 'react-router-dom';

class Layout extends Component
{
    render()
    {
        return (
          <Aux>
          <Switch >
              <Route path="/" exact>HOME</Route>
              <Route path="/posts" exact><Posts /></Route>
              <Route path="/comments" exact><Comments /></Route>
              <Route path="/albums" exact><Albums /></Route>
              <Route path="/photos" exact><Photos /></Route>
              <Route path="/todos" exact><Todos /></Route>
              <Route path="/users" exact><Users /></Route>
              <Redirect from="/:id" to="/posts" />
              {/* <Route path="/:id"><Error /></Route>*/}
          </Switch>
          </Aux>
        )
    }
}

export default Layout;