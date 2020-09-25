import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css';

const Destination = (props) => {
    const { title, id, image } = props.destination;
    console.log(props);
    return (
        <Link to={"/places/" + id}>
            <Card className="bg-dark text-white box">
                <Card.Img src={image} alt="Card image" className="card-img" />
                <Card.ImgOverlay>
                    <Card.Title>{title}</Card.Title>
                </Card.ImgOverlay>
            </Card>
        </Link>
    );
};

export default Destination;