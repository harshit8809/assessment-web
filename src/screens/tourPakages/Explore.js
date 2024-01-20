import React, { useState, useEffect } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import { mockData } from '../../dummyData/DummyData';
import { MDBInput } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { addFormData } from '../../redux/slices/StateSlice';
import { useNavigate } from 'react-router-dom';

const Explore = () => {
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        setCountries(mockData.countries);
    }, []);

    useEffect(() => {
        if (selectedCountry !== '') {
            setStates(mockData.states[selectedCountry]);
        } else {
            setStates([]);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState !== '') {
            setCities(mockData.cities[selectedState]);
        } else {
            setCities([]);
        }
    }, [selectedState]);



const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedCountry && selectedState && selectedCity && name && age !== "") {
        const countryName = countries.find(country => country.id == selectedCountry)?.name || '';
        const stateName = states.find(state => state.id == selectedState)?.name || '';
        const cityName = cities.find(city => city.id == selectedCity)?.name || '';

        let dataToSend = {
            name,
            age,
            selectedCountry: countryName,
            selectedState: stateName,
            selectedCity: cityName,
        };

        dispatch(addFormData(dataToSend));



        console.log("dataToSend", dataToSend);

        setName('');
        setAge('');

        navigate("/allBookingDetails");

        alert(`Trip booked for ${cityName}`)
    } else {
        alert("Please fill all the fields");
    }
};



    return (
        <Container className='mt-4'>
            <h2 className='mb-2'>Book your destination</h2>
            <hr className='mb-4'></hr>
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col >
                        <Form.Select onChange={(e) => setSelectedCountry(e.target.value)}>
                            <option value="">Select a country</option>

                            {countries.map((country) => (
                                <option key={country.id} value={country.id}>
                                    {country.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>

                    <Col>
                        <Form.Select onChange={(e) => setSelectedState(e.target.value)}>
                            <option value="">Select a state</option>
                            {states.map((state) => (
                                <option key={state.id} value={state.id}>
                                    {state.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>

                    <Col>
                        <Form.Select onChange={(e) => setSelectedCity(e.target.value)}>
                            <option value="">Select a city</option>
                            {cities.map((city) => (
                                <option key={city.id} value={city.id}>
                                    {city.name}
                                </option>
                            ))}
                        </Form.Select>
                    </Col>

                    <Row className='mt-5 ' xs={12} md={8} lg={3}>
                        <Col>
                            <MDBInput label='Full Name' id='form1' type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </Col>

                        <Col>
                            <MDBInput label='Age' id='form1' type='number'
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                        </Col>

                    </Row>

                </Row>

                <Button type='submit' className='mt-5'>Submit</Button>
            </form>

        </Container>
    );
};

export default Explore;



