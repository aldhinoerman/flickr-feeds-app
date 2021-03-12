import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar className='main-nav'>
            <Nav>
                <NavLink to="/all">All</NavLink>
                <NavLink to="/city">City</NavLink>
                <NavLink to="/village">Village</NavLink>
                <NavLink to="/people">People</NavLink>
                <NavLink to="/healthy">Healthy</NavLink>
            </Nav>
        </Navbar >
    );
}

export default Navigation;