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
import "./NavBar.css"
// import { NavLink as Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Nav className="Navbar">
            
           <NavLink to='/' className="myLink"> Home </NavLink>
           <NavLink to='/projects' className="myLink"> Projects </NavLink>
           <NavLink to='/resume' className="myLink"> Resume </NavLink>
           <NavLink to='/blog' className="myLink"> Blog </NavLink>
           <NavLink to='/about' className="myLink"> About </NavLink>
             
        </Nav>
    );
}

export default NavBar;
