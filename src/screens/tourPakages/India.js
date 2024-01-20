import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../redux/slices/fetchApi';
import { Container, Spinner } from 'react-bootstrap';

const India = () => {
  const dispatch = useDispatch();
  const feature = useSelector((state) => state.getApi.data?.features);
  const isLoading = useSelector((state) => state.getApi.loading);


  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container>
      <h4 className='mt-4'>I have just fetch & render, random API data with integration of redux toolkit. </h4>

      <hr></hr>

      {isLoading === "pending" ? (
        <>
        <Spinner animation='border' role='status'>
          <span className='sr-only'>Loading...</span>
        </Spinner>
          <h2>Loading...</h2>
          </>
      ) : (
        feature &&
        feature.map((item, index) => (
          <div key={index}>
            <h3>{item.properties.city}</h3>
            <p>
              {item.properties.name} ___ City Code :- {item.properties.citycode}
            </p>
          </div>
        ))
      )}
    </Container>
  );
};

export default India;
