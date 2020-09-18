import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import places from '../../fakeData/places';
import BookingForm from '../BookingForm/BookingForm';


const DestinationDetail = () => {
    const { placeId } = useParams();
    const place= places.find(p=>p.id===placeId)

    return (
        <Container>
        <Row>
            <Col md={5}>
                <h1>{place.title}</h1>
                <p>{place.description}</p> 
            </Col>
            <Col md={5}>
                <BookingForm placeInfo={place} key={place.key}></BookingForm>
            </Col>
        </Row>
    </Container>
    );
};

export default DestinationDetail;