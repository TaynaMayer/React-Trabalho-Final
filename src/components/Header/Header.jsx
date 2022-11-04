import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <>
         <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home">ECOMMERCE</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <Nav.Link href=""><i className="bi bi-cart"></i></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
    );
}