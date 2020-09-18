import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';

const Header = () => {
    return (
        <Container>
        <Navbar expand="lg">
            <Navbar.Brand href="/home" className="logoImg"> <img src={logo} alt="" style={{width:"180px"}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="mx-auto">
                <Form inline>
                    <FormControl type="text" placeholder="Search Your Destination..."className="mr-sm-2 search pr-5" />
                </Form>
                <Nav>
                    <Nav.Link to='/news'>News</Nav.Link>
                    <Nav.Link to='/destination'>Destination</Nav.Link>
                    <Nav.Link to='/blog'>Blog</Nav.Link>
                    <Nav.Link to='/contact'>Contact</Nav.Link>
                    <Link to='/login'><Button className="btn btn-warning">Login</Button></Link> 
                </Nav>
                
            </Navbar.Collapse>
        </Navbar>
    </Container>
    );
};

export default Header;