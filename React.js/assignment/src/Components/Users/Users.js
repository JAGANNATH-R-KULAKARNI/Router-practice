import React,{Component} from 'react';
import axios from '../../axios-order';

class users extends Component
{
    state={
        USERS : null 
    };

    render()
    {
        axios.get('/users')
        .then(response => {
            const refe=response.data.map(igKey => {
                return (
                    <div key={igKey["id"]}>
                        {igKey["username"]}
                        {igKey["email"]}
                        {igKey["name"]}
                    </div>
                );

            });
            this.setState({USERS : refe});
        })
        .catch(error =>{
            console.log(error);
        })
        ;

        return (
            <div>
                {this.state.USERS}
            </div>
        );
    }
};

export default users;