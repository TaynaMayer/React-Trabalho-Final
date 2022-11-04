import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Home } from '../../screens/Home/Index'
import { Manage } from '../../screens/Manage/Manage'
import { ShoppingCart } from '../../screens/ShoppingCart/ShoppingCart'


export const Header = () => {
    return (
      <Router>
        <>
         <Navbar bg="dark" variant="dark">
          <Container>
              <Navbar.Brand href="#home">ECOMMERCE</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"../../screens/Home/Index"}>Home</Nav.Link>
                <Nav.Link as={Link} to={'../../screens/Admin/Admin'}>Manage</Nav.Link>
                <Nav.Link as={Link} to={"../../screens/ShoppingCart/ShoppingCart"}><i className="bi bi-cart"></i></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
        </>
        <>
            <Routes>
              <Route path="../../screens/Home/Index" element={<Home />} />
            </Routes>
            <Routes>
              <Route path="../../screens/Manage/Manage" element={<Manage />} />
            </Routes>
            <Routes>
              <Route path="../../screens/ShoppingCart/ShoppingCart" element={<ShoppingCart />} />
            </Routes>
        </>
      </Router>
    );
}