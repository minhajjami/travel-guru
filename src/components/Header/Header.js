import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg">
                <Link to="/">
                    <img src={logo} alt="logo" className="mr-5 bg-img-color" />
                </Link>
                <input type="text" className="input-form" placeholder="Search your Destination..." />
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Contact</Link>
                        </li>
                        <Link to="/login" style={{paddingLeft:'50px'}}>
                            <button className="btn btn-warning">Login</button>
                        </Link>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;