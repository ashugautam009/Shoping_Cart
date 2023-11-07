import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useSelector } from "react-redux";

export default function App() {
  const items= useSelector((state)=>state.cart)
  return (
    <div className="m-2">
      <MDBContainer>
        <MDBRow className="mb-3"> 
            <MDBCol size="md">
              <MDBCard>
                <MDBCardImage 
                    src="" 
                    position="top" 
                    alt="..." 
                />
                <MDBCardBody>

                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the 
                        card titlr and make up the build of the card's components
                    </MDBCardText>
                    <MDBBtn href="#">Button</MDBBtn>
                    
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}