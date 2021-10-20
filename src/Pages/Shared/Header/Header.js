import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
  const {user,logOut} =useAuth()||{}
    return (
        <>
       <Navbar bg="dark" variant="dark"  sticky="top" collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand href="#home"><h1 className="text-secondary">DOCTORS POINTS</h1></Navbar.Brand>

      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Nav.Link as={HashLink} to="/home#home">HOME</Nav.Link>
        <Nav.Link as={HashLink} to="/home#servies">SERVICES</Nav.Link>
        <Nav.Link as={Link} to ="/doctors">OUR DOCTORS</Nav.Link>
        <Nav.Link as={Link} to ="/departments">DEPARTMENTS</Nav.Link>
      
        {user?.email?<Button variant="warning" onClick={logOut}>LOGOUT</Button>:
        <Nav.Link as={Link} to ="/login">LOGIN</Nav.Link>}
      <Navbar.Text>
     <span className="text-light"> Sign in :</span> <span className="text-info" >{user?.email?.substring(0, user?.email?.lastIndexOf("@"))}</span>
      </Navbar.Text>
      </Navbar.Collapse>
      </Container>
    </Navbar>
      </>
    );
};

export default Header;