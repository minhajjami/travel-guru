import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Destination = (props) => {
    const { title, description} = props.destination;
    return (
        <Col md={4}>
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <p>{description}</p>
                </Card.Text>
            </Card.Body>
        </Card>
    </Col>
    );
};

export default Destination;