import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/Auth";
import SignOutButton from "./SignOut";
import "../../App.css";
import { Navbar, Nav, Container } from "react-bootstrap";
const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  return <div>{currentUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>;
};

const NavigationAuth = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" aria-label="Brand Logo">
          <img src="/icon96.png" alt="brand logo" height="50" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/"
            className="text-uppercase font-weight-bold"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/account"
            className="text-uppercase font-weight-bold"
          >
            Profile
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/restaurants"
            className="text-uppercase font-weight-bold"
          >
            Find Restaurants
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/cart"
            className="text-uppercase font-weight-bold"
          >
            Cart
          </Nav.Link>
          <SignOutButton />
        </Nav>
      </Container>
    </Navbar>
  );
};

const NavigationNonAuth = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" aria-label="Brand Logo">
          <img src="/icon96.png" alt="brand logo" height="50" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link
            as={Link}
            to="/"
            className="text-uppercase font-weight-bold"
          >
            Home
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/restaurants"
            className="text-uppercase font-weight-bold"
          >
            Find Restaurants
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="/signup"
            className="text-uppercase font-weight-bold"
          >
            Sign-up
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/signin"
            className="text-uppercase font-weight-bold"
          >
            Sign-In
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/cart"
            className="text-uppercase font-weight-bold"
          >
            Cart
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Navigation;
