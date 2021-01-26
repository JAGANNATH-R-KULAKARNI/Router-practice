import React,{Component} from 'react';
import axios from '../../axios-order';

class photos extends Component
{
    state={
        PHOTOS: null
    }
      

    render()
    {
        axios.get('/photos')
        .then(response => {
          const refe=response.data.map(igKey => {
              return (
                  <div key={igKey["id"]}>
                   {igKey["albumId"]}
                   {igKey["id"]}
                  <div> <img src={igKey["url"]}></img></div>
                   {igKey["thumbnailUrl"]}
                   {igKey["title"]}
                  </div>
              );
          });

          this.setState({PHOTOS : refe});
        })
        .catch(error => {
            console.log(error);
        })
        ;

        return (
            <div>
                {this.state.PHOTOS}
            </div>
        );
    }
};

export default photos;