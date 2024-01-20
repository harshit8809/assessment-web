import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from 'mdb-react-ui-kit';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import '../components/css/TourLocationCard.css'; // Import the CSS file

const TourLocationCard = (props) => {


  return (
    
      <MDBCard onClick={props.onClick} className="mt-5 bg-body-tertiary shadow hover-effect">
      
        <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/182.webp' alt='...' position='top' />
        <MDBCardBody>
          <MDBCardText>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
     
  );
};

export default TourLocationCard;
