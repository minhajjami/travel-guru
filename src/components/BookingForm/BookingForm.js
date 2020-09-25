import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useHistory } from 'react-router-dom';

const BookingForm = (props) => {
    const { title,origin,key } = props.placeInfo;
    const [selectedFromDate,setSelectedFromDate] = useState(null);
    const [selectedToDate,setSelectedToDate] = useState(null)
    const history = useHistory();

    const handleBookings = () =>{
        history.push(`/search?key=${key}`)
    }

    return (
        <Form>
            <Form.Group controlId="formGroupEmail">
                <Form.Label>Origin</Form.Label>
                <Form.Control type="text" value={origin} />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
                <Form.Label>Destination</Form.Label>
                <Form.Control type="text" value={title} />
            </Form.Group>
             <Form.Row className="d-flex">
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label style={{display: 'block'}}>From</Form.Label>
                    <DatePicker 
                        selected={selectedFromDate}
                        onChange={date => setSelectedFromDate(date)}
                        dateFormat='dd/mm/yyyy'
                        minDate={new Date()}
                        placeholderText="From Date"
                    ></DatePicker>
                </Form.Group> 

                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label style={{display: 'block'}}>To</Form.Label>
                    <DatePicker 
                        selected={selectedToDate}
                        onChange={date => setSelectedToDate(date)}
                        dateFormat='dd/mm/yyyy'
                        placeholderText="To Date"
                    ></DatePicker>
                </Form.Group>
            </Form.Row>
            <button className="btn btn-warning w-100" onClick={handleBookings}>Start Booking</button>
        </Form>
    );
};

export default BookingForm;