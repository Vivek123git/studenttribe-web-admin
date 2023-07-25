import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import { Col, Dropdown } from "react-bootstrap";
import logo from "./../Assets/Image/stLogo.png";
import search from "./../Assets/Image/search.png";
import bellIcon from "./../Assets/Image/BellIcon.png";
import "./../App.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { toast } from 'react-toastify';
import { useSelector } from "react-redux";

function NavbarComp() {
  const expand = "lg";
  const navigate = useNavigate();

  const location = useLocation();
  const currentURL = location.pathname;
  const auth = localStorage.getItem("state")
  const parsedAuthData = JSON.parse(auth);
  const firstWord = parsedAuthData.auth.user.results.first_name[0]
  const profileImg = parsedAuthData.auth.user.results.profile_img;

  const handleSignOut = () => {
    Cookies.remove("token");
    Cookies.remove("auth");
    toast.info('Logout successfully!');
    navigate("/");
  };
  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            {/* <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header> */}
            <Offcanvas.Body>
              <Nav className="justify-content-evenly flex-grow-1">
              <Nav className="navbar-col" >
                <Nav.Link as={Link} to="/dashboard" style={{padding:"0px 20px" }}>
                    <h4
                      style={{
                        color:
                          currentURL === "/dashboard" ? "#ce202f" : "black",
                          borderBottom: currentURL==="/dashboard" ? "2px solid #ce202f" : "none",
                          paddingBottom: currentURL==="/dashboard" ? "5px" : "5px"
                          
                      }}
                    >
                      Dashboard
                    </h4>  
                </Nav.Link>
                <Nav.Link as={Link} to="/analytics" style={{ textDecoration: "none",padding:"0px 20px" }}>
                    <h4
                      style={{
                        color:
                          currentURL === "/analytics" ? "#ce202f" : "black",
                          borderBottom: currentURL==="/analytics" ? "2px solid #ce202f" : "none",
                          paddingBottom: currentURL==="/analytics" ? "5px" : "5px"
                      }}
                    >
                      Analytics
                    </h4> 
                </Nav.Link>
                <Nav.Link as={Link} to="/events" style={{ textDecoration: "none",padding:"0px 20px" }}>
                    <h4
                      style={{
                        color:
                        currentURL === "/events" || currentURL === "/create-event" ? "#ce202f" : "black",
                        borderBottom: currentURL === "/events" || currentURL === "/create-event" ? "2px solid #ce202f" : "none",
                        paddingBottom: currentURL === "/events" || currentURL === "/create-event" ? "5px" : "5px"
                        
                      }}
                    >
                      Events
                    </h4>
                </Nav.Link>
                <Nav.Link as={Link} to="/internship" style={{ textDecoration: "none",padding:"0px 20px" }}>
                    <h4
                      style={{
                        color:
                        currentURL === "/internship" || currentURL === "/opportuinity-post" ? "#ce202f" : "black",
                        borderBottom: currentURL === "/internship" || currentURL === "/opportuinity-post" ? "2px solid #ce202f" : "none",
                        paddingBottom: currentURL === "/internship" || currentURL === "/opportuinity-post" ? "5px" : "5px"

                      }}
                    >
                      Internships
                    </h4>
                </Nav.Link>
                </Nav>
                <Nav className="navbar-col" >
                  {/* <Col> */}
                    <img className="navbar-logo-img" src={logo} alt="Logo" />
                  {/* </Nav> */}
                </Nav>
                
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
            <Col className="navbar-col" md={5}>
                <Nav.Link  className="nav-dropdown">
                    <img src={search} alt="Search" />

                </Nav.Link>
                <Nav.Link  className="nav-dropdown">
                    <img src={bellIcon} alt="Bell Icon" />

                </Nav.Link>
                <Nav.Link className="nav-dropdown">
                  <div style={{ display: "flex" }}>
                    <Dropdown>
                      <Dropdown.Toggle variant="default" id="dropdown-basic">
                      {profileImg ? <img width={"60px"} className="avtar_png_nav" src={profileImg} alt="Profile Image" /> : <h4 className="avtar_png">{firstWord}</h4>}
                      </Dropdown.Toggle>

                      <Dropdown.Menu >
                        <Dropdown.Item as={Link} to="/my-profile">
                          <h6 >My Profile</h6>
                        </Dropdown.Item>
                        <Dropdown.Item as={Link} to="/company-profile">
                          <h6 >Company Profile</h6>
                        </Dropdown.Item>
                        <Dropdown.Item onClick={handleSignOut}>
                          <h6 >Sign Out</h6>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </Nav.Link>
                </Col>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComp;
