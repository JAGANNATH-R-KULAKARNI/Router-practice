import React,{Component} from 'react';
import Aux from '../../HOC/Auxi';
import TopBar from '../../TopBar/TopBar';
import { MDBInputGroup,MDBInput,MDBContainer, MDBCol, MDBCard, MDBIcon, MDBBtn } from "mdbreact";
class NameOfTask extends Component
{
  render()
  {
    return (
      
      <Aux>
    

      <section className="text-center my-5">
       
        <p className="grey-text w-responsive mx-auto mb-5">
        <TopBar />
        </p>
       

        <MDBContainer className="d-flex flex-wrap">
          <MDBCol md="12" className="mb-4">
          <div className="shadow-box-example hoverable">
            <MDBCard className="card-image" >
              <div className="text-white text-center d-flex align-items-center rgba-wheat-strong py-5 px-4 rounded">
                <div>
                  <h6 className="purple-text">
                    <MDBIcon icon="table" />
                    <MDBContainer>
        
        <MDBInputGroup
          material
          containerClassName="mb-2 mt-0"
          prepend="Name"
          size="lg"
        />
      </MDBContainer>
      <MDBContainer>
        <br />
      
        <MDBInputGroup
          material
          containerClassName="mb-2 mt-0"
          prepend="Title of Note"
        />
      </MDBContainer>
                  </h6>
                  <br />
                  <p className="pb-3">
                  <MDBInput type="textarea" label="Notes" rows="2" cols="100"/>
                  </p>
                  
                  <MDBBtn tag="a" size="lg" floating gradient="purple">
               <MDBIcon icon="bolt" />Add To Database
             </MDBBtn>
                </div>
              </div>
            </MDBCard>
            </div>
          </MDBCol>
        
        </MDBContainer>
        
      </section>
 

      </Aux>
      );
  }
};

export default NameOfTask;
<MDBInput label="Example label" outline />