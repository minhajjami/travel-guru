import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
        <Navbar  variant="light">
             <Navbar.Brand href="#home">Travel Guru</Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search your destination" className="mr-sm-2" />
            </Form>
            <Nav className="mr-auto">
                <Nav.Link href="/home">News</Nav.Link>
                <Nav.Link href="#features">Destination</Nav.Link>
                <Nav.Link href="#pricing">Blog</Nav.Link>
                <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
            <Button variant="outline-primary">Login</Button>
        </Navbar>
        </Container>
    );
};

export default Header;