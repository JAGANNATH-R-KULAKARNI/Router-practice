import React,{Component} from 'react';
import axios from '../../axios-order';

class todos extends Component
{
    state={
        TODOS : null
    };

    render()
    {
        axios.get('/todos')
        .then(response => {
            const refe=response.data.map(igKey => {
                return (
                    <div key={igKey["id"]}>
                        {igKey["userId"]}
                        {igKey["id"]}
                        {igKey["completed"]}
                    </div>
                );

            });
            this.setState({TODOS : refe});
        })
        .catch(error =>{
            console.log(error);
        })
        ;

        return (
            <div>
                {this.state.TODOS}
            </div>
        );
    }
};

export default todos;