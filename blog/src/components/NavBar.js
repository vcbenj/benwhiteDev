import React from "react";
import "./../App.css";
import {
    Navbar,
    NavItem,
    NavbarToggler,
    Collapse,
    Nav,
    NavbarBrand
} from 'reactstrap';
import { NavLink } from "react-router-dom";
// import { NavLink as Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Nav className="Navbar">
            
           <NavLink to='/'> Home </NavLink>
           <NavLink to='/projects'> Projects </NavLink>
           <NavLink to='/resume'> Resume </NavLink>
           <NavLink to='/blog'> Blog </NavLink>
           <NavLink to='/about'> About </NavLink>
             
        </Nav>
    );
}

export default NavBar;