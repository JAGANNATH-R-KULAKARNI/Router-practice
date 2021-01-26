import React,{Component} from 'react';
import axios from '../../axios-order';

class albums extends Component
{
    state={
        ALBUMS : null
    }

    render()
    {
       axios.get('/albums')
        .then(response => {
            const refe = response.data.map(igKey => {
                return (
                    <div key={igKey["id"]}>
                        {igKey["userId"]}
                        {igKey["id"]}
                        {igKey["title"]}
                    </div>
                );
            })

            this.setState({ALBUMS : refe});
        })
        .catch(error => {
            console.log(error);
        })
        ;
        return (
            <div>
                {this.state.ALBUMS}
            </div>
        );
    }
};

export default albums;