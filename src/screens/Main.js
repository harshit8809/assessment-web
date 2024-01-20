// import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from 'mdb-react-ui-kit'
// import React from 'react'
// import { Container } from 'react-bootstrap'

// const Main = () => {


//   return (
//     <Container>

//       {cardDataOne && cardDataOne.map((item)=>{
//         return(

//           <MDBCard className="mt-5 bg-body-tertiary shadow hover-effect">

//           <MDBCardImage src={item.image} alt='...' position='top' />
//           <MDBCardBody>
//             <MDBCardText>
//               {item.description}
//             </MDBCardText>
//           </MDBCardBody>
//         </MDBCard>


//         )
//       })}

//       </Container>
//   )
// }

// export default Main




//!
// import { MDBCard, MDBCardBody, MDBCardImage, MDBCardText } from 'mdb-react-ui-kit';
// import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import { cardDataOne } from '../dummyData/DummyData';

// const Main = () => {
//   const navigation = useNavigate();

//   const showDetails = (cardNo) => {
//     navigation(`/tourCardDetails/${cardNo}`);
//   };

//   // Split the cardDataOne into arrays of three cards
//   const chunkedCards = [];
//   for (let i = 0; i < cardDataOne.length; i += 3) {
//     chunkedCards.push(cardDataOne.slice(i, i + 3));
//   }

//   return (
//     <Container>
//       {chunkedCards.map((row, rowIndex) => (
//         <Row key={rowIndex}>
//           {row.map((item, colIndex) => (
//             <Col key={colIndex}>
//               <MDBCard
//                 onClick={() => showDetails(item.cardNo)}
//                 className="mt-5 bg-body-tertiary shadow hover-effect"
//               >
//                 <MDBCardImage src={item.image} alt='...' position='top' />
//                 <MDBCardBody>
//                   <MDBCardText>{item.description}</MDBCardText>
//                 </MDBCardBody>
//               </MDBCard>
//             </Col>
//           ))}
//         </Row>
//       ))}
//     </Container>
//   );
// };

// export default Main;



//!
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBIcon, MDBInput, MDBInputGroup } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { cardDataOne } from '../dummyData/DummyData';
import { Link } from 'react-router-dom';

const Main = () => {

  const [searchTerm, setSearchTerm] = useState('');


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCardData = cardDataOne.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Row>
        <Col>
        <h2 className='mt-3'>Plan your trip where you want to</h2>
        </Col>

        <Col className='mt-3 xs'>
        <MDBInputGroup >
          <MDBInput label='Search'
            onChange={handleSearchChange} value={searchTerm}
          />
          <MDBBtn rippleColor='dark'>
            <MDBIcon icon='search' />
          </MDBBtn>
        </MDBInputGroup>
        </Col>
      </Row>
      <Row>

        {
          filteredCardData.map((item, index) => (
            <Col key={index} md={4}>

            <Link to={item.path}>
              <MDBCard
                className="mt-4 bg-body-tertiary shadow hover-effect"
                style={{ marginBottom: '20px', transition: 'transform 0.3s' }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <MDBCardImage src={item.image} alt='...' position='top' />
                <MDBCardBody>
                  <MDBCardTitle className='text-start'>{item.title}</MDBCardTitle>
                  <MDBCardText className='text-start'>{item.description}</MDBCardText>

                  {/* <Link >
                    <Button
                    >View</Button>
                  </Link> */}
                </MDBCardBody>
              </MDBCard>
              </Link>


            </Col>
          ))
        }
      </Row>
    </Container>
  );
};

export default Main;
