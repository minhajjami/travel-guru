import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import room1 from "../../assets/Image/Rectangle 26.png"
import room2 from "../../assets/Image/Rectangle 27.png"
import room3 from "../../assets/Image/Rectangle 28.png"

const SearchRoom = (props) => {
    const { key,title, bedding, facilities, cancel, rating, ratingCount, price} = props.room;
    let {image} = props.room;
    if(key === '1')
        image = room1
    else if(key === '2')
        image = room2
    else
        image = room3;

    return (
        <Container>
            <Row>
                <Col md={7}>
                    {
                        <img src={image} style={{width:"100%"}} alt="Bed One" />
                    }
                </Col>
                <Col md={5}>
                    <h5>{title}</h5>
                    <p>{bedding}</p>
                    <p>{facilities}</p>
                    <p>{cancel}</p>
                    <div className='d-flex rating'>
                        {/* <img src={star} alt={"stars"} /> */}
                        <pre>{rating}({ratingCount})  ${price}/night</pre>
                    </div>
             </Col>
        </Row>
    </Container>
    );
};

export default SearchRoom;