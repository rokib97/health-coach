import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../../firebase.init";
// import logo from "../../../Images/logo1.png";
import logo1 from "../../../Images/download.png";
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
          <img width={75} src={logo1} alt="" />
        </NavLink>
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
