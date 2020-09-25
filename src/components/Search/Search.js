import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import fakeRooms from '../../fakeData/rooms';
import places from '../../fakeData/places';
import SearchRoom from '../SearchRoom/SearchRoom';

const Search = () => {
    const fakethreeRooms = fakeRooms.slice(0, 3);
    const [rooms, setRooms] = useState(fakethreeRooms)

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();
    const destination = query.get("key");
    const destinationDetails = places.find(dest => dest.key === destination);

    return (
        <Container>
            <Row>
                <Col md={7}>
                    <h5>Stay in {destinationDetails.title}</h5>
                    {
                        rooms.map(room => <SearchRoom room={room} key={room.key}></SearchRoom>)
                    }
                </Col>
                <Col md={5}>
                <div class="mapouter mt-4">
                    <div class="gmap_canvas">
                        <iframe width="600" height="820" id="gmap_canvas" src={destinationDetails.mapUrl} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://www.whatismyip-address.com/divi-discount/"></a>
                    </div>   
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;