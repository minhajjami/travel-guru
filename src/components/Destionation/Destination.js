import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Destination = (props) => {
    const { title, description,id } = props.destination;
    console.log(props);
    return (
        <Col md={4}>
            <Link to={"/places/"+id}>
                <Card>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            <p>{description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    );
};

export default Destination;