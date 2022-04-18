import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../Images/logo1.png";
// import logo1 from "../../../Images/download.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      sticky="top"
      variant="light"
    >
      <Container>
        <NavLink to="/">
          <img width={50} src={logo} alt="" />
        </NavLink>
        <Navbar.Brand as={Link} to="/" className=" ms-2 title fw-bolder">
          HEALTH COACH
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto navbar-color">
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to={"/blogs"}
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to={"/about"}
            >
              About
            </NavLink>
            {user ? (
              <NavLink
                onClick={() => signOut(auth)}
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to={"/login"}
              >
                LogOut
              </NavLink>
            ) : (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-link" : "link"
                }
                to={"/login"}
              >
                Login
              </NavLink>
            )}
            <NavLink
              className={({ isActive }) => (isActive ? "active-link" : "link")}
              to={"/register"}
            >
              Sign up
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
