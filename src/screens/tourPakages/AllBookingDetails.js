import React from 'react';
import { useSelector } from 'react-redux';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllBookingDetails = () => {
  const allBookingDetails = useSelector((state) => state.form.allFormData);

  return (
    <Container className='mt-4'>
      <h2>All Booking Details</h2>
      {allBookingDetails.length > 0 ? (
        <Table className='mt-4' striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Age</th>
              <th>Country</th>
              <th>State</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {allBookingDetails.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.selectedCountry}</td>
                <td>{item.selectedState}</td>
                <td>{item.selectedCity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <>
        <hr></hr>
        <h3 className='mt-5'>No data available</h3>

        <Link  to="/explore">
        <Button className='mt-3'>Book Trip Now</Button>
        </Link>
        </>
      )}
    </Container>
  );
};

export default AllBookingDetails;

