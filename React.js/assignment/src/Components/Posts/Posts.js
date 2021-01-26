import React,{Component} from 'react';
import axios from '../../axios-order';

class posts extends Component
{
    state ={
        POSTS : null
    };

   
    render()
    {
        axios.get('/posts')
        .then(response =>{
            const refe=response.data.map(igKey => {
                return (<div key={igKey["id"]}>
                    {igKey["userId"]}
                    {igKey["id"]}
                    {igKey["title"]}
                    {igKey["body"]}
                </div>);
            });

            this.setState({POSTS : refe});
        })
        .catch(error => {
            console.log(error);
        })
        ;

        return (
            <div>
                {this.state.POSTS}
            </div>
        );
    }
};

export default posts;