import React,{Component} from 'react';
import axios from '../../axios-order';

class comments extends Component
{
    state={
        COMMENTS : null
    }
    render()
    {
        axios.get('/comments')
        .then(response => {
          const refe=response.data.map(igKey => {
              return (
                  <div key={igKey["id"]}>
                   {igKey["postId"]}
                   {igKey["id"]}
                   {igKey["name"]}
                   {igKey["email"]}
                   {igKey["body"]}
                  </div>
              );
          });

          this.setState({COMMENTS : refe});
        })
        .catch(error => {
            console.log(error);
        })
        ;
        return (
            <div>
                {this.state.COMMENTS}
            </div>
        );
    }
};

export default comments;