import React,{Component} from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol,  MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";

class fromDatabase extends Component
{
    render()
    {
        return (
         
            <MDBContainer className="mt-5 text-center">
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
          <div className="shadow-box-example hoverable">
            <MDBCardBody>
              <MDBCardTitle className="h3">Retriev Data from Database</MDBCardTitle>
              <MDBCardText>
              Load the notes from the Database ,that you have uploaded
              </MDBCardText>
              <MDBBtn href="#" gradient="purple" rounded>
                RETRIEV
              </MDBBtn>
            </MDBCardBody>
            </div>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  
        );
    }
};

export default fromDatabase;
