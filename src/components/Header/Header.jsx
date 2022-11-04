import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import { Home } from '../../screens/Home/Index'
import { Manage } from '../../screens/Manage/Manage'
import { ShoppingCart } from '../../screens/ShoppingCart/ShoppingCart'

export const Header = () => {
    return (
      
      
        <>
         <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home">ECOMMERCE</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/Manage"}>Manage</Nav.Link>
                <Nav.Link as={Link} to={"/ShoppingCart"}><i className="bi bi-cart"></i></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
    );
}