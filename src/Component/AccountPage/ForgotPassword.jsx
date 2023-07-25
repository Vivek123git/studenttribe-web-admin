import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "./../../Assets/Image/stLogo.png";
import "./AccountPage.css";

const ForgotPassword = () => {
  return (
    <Container fluid className="account-container">
      <Row className="account-row">
        <Col className="logo-section" md={4}>
          <img src={logo} className="logo-img" />
        </Col>
        <Col md={8} className="form-container">
          <Container style={{width:"80%"}}>
            <h1>Forgot Password</h1>
            <Row className="form-row" >
              <form>
              <div className="login-form">
                  <h4>New Password</h4>
                  <input type="text" placeholder="Enter your Full Name " />
                </div>

                <div className="login-form" style={{padding :"10px 0px"}}>
                  <h4>Confirm Password</h4>
                  <input type="text" placeholder="Enter your Email Address " />
                </div>


                <div className="login-form">
                  <button>Forgot Password</button>
                </div>
                
              </form>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;