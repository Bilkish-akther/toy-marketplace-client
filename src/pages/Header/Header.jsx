/* eslint-disable no-undef */
/*eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../component/providers/AuthProvider";
import Footer from "../Footer/Footer";
import "./Header.css";
const ref = React.createRef();

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  const { createUser, logOut, user } = useContext(AuthContext);
  console.log(user);
  return (
    <Container ref={ref}>
      <Navbar className="mt-4 rounded " bg="light" expand="lg">
        <Container>
          <img  className="rounded-circle pe-4 iconDesign" src="https://i.ibb.co/w4prJLZ/icon-logo.jpg" alt="" />
          <Navbar.Brand as={Link} to="/" className="HeaderBrand">
          Doll Fantasy Dreams
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto gap-4">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeLink" : "inActiveLink"
                }
                to="/"
              >
                HOME
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeLink" : "inActiveLink"
                }
                to="/allToys"
              >
                 All Toys
              </NavLink>
              {user!=null?<NavLink
                className={({ isActive }) =>
                  isActive ? "activeLink" : "inActiveLink"
                }
                to="/myToys"
              >
                My Toys
              </NavLink>:''}
              {user!=null?<NavLink
                className={({ isActive }) =>
                  isActive ? "activeLink" : "inActiveLink"
                }
                to="/addToy"
              >
                Add Toys
              </NavLink>:''}
              <NavLink
                className={({ isActive }) =>
                  isActive ? "activeLink" : "inActiveLink"
                }
                to="/blog"
              >
                BLOG
              </NavLink>
            </Nav>
            {user && (
              <div className="img__wrap">
                <img
                  height={60}
                  width={60}
                  className="profileImage"
                  src={user.photoURL}
                  alt=""
                />
                <p className="img__description">{user.displayName}</p>
              </div>
            )}
          </Navbar.Collapse>

          {user != null ? (
            <Button variant="danger" onClick={logOut}>
              LOGOUT
            </Button>
          ) : (
            <Link to="/login" className="text-decoration-none">
              <Button variant="success" className="">
                LOGIN
              </Button>
            </Link>
          )}
        </Container>
      </Navbar>

      <Outlet></Outlet>

      <Footer></Footer>

      {location.pathname == "/blog" && (
        <div className="mb-4 d-flex align-items-center justify-content-center">
        </div>
      )}
    </Container>
  );
};

export default Header;
