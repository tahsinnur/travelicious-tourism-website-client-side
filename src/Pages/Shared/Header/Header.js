import React from 'react';
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
            <Navbar sticky="top" className="p-3 bg-white" collapseOnSelect expand="lg">
                <Container>
                    <Nav.Link as={HashLink} to="/home" className="text-uppercase fs-2 fw-bold" style={{color:"tomato"}}>Travelicious</Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end" style={{fontSize:"18px"}}>
                        <Nav.Link className="text-uppercase" style={{color:"#264247"}} as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link className="text-uppercase" style={{color:"#264247"}} as={HashLink} to="/home#packages">Tour Packages</Nav.Link>
                        <Nav.Link className="text-uppercase" style={{color:"#264247"}} as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link className="text-uppercase" style={{color:"#264247"}} as={HashLink} to="/home#about">About Us</Nav.Link>
                        {user?.email ?
                            <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic" style={{fontSize:"18px", color:"white", backgroundColor:"tomato", border:"none"}}>
                              {user.displayName}
                            </Dropdown.Toggle>
                          
                            <Dropdown.Menu style={{fontSize:"18px"}}>
                              <Dropdown.Item><Link to="/myorders" style={{textDecoration:"none", color:"#264247"}}>My Orders</Link></Dropdown.Item>
                              <Dropdown.Item><Link to="/manageorders" style={{textDecoration:"none", color:"#264247"}}>Manage Orders</Link></Dropdown.Item>
                              <Dropdown.Item><Link to="/addanewpackage" style={{textDecoration:"none", color:"#264247"}}>Add A New Package</Link></Dropdown.Item>
                              <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown> :
                            <Nav.Link as={Link} to="/login" ><Button className="px-4" style={{fontSize:"18px", backgroundColor:"tomato", border:"none"}}>Login</Button></Nav.Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;