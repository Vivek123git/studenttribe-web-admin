import React,{useState,useEffect} from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import logo from "./../../Assets/Image/stLogo.png";
import "./AccountPage.css";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";

const SignUp = () => {

  const [signUp ,setSignUp] = useState({
    name :"",
    email:"",
    password:""
  })

  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setValidated(true);
    if (e.currentTarget.checkValidity() === true) {
          console.log("submit")
        }
  }

  const handleChange=(e)=>{
   const {name,value} = e.target;
   setSignUp({
    ...signUp,
    [name]:value
   })
  }

  useEffect(() => {
    Cookies.remove("token");
    Cookies.remove("auth");
  }, []);

  return (
    <Container fluid className="account-container">
      <Row className="account-row">
        <Col className="logo-section" md={4}>
          <img src={logo} className="logo-img" />
        </Col>
        <Col md={8} className="form-container">
          <Container style={{width:"80%"}}>
            <h1>Sign up</h1>
            <h4 className="already-signup">Already have an account?<Link to="/"  style={{textDecoration:"none"}}><span style={{color:"#CC202E"}}>Log in</span></Link></h4>
            <Row className="form-row" >
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <div className="login-form">
                  <h4>Full Name</h4>
                  <Form.Control type="text" placeholder="Enter your full name" 
                  name="name"
                  onChange={handleChange}
                  value={signUp.name}
                  required
                  />
                <Form.Control.Feedback type="invalid">
                  Please fill this field
                </Form.Control.Feedback>
                </div>

                <div className="login-form" style={{padding :"10px 0px"}}>
                  <h4>Email</h4>
                  <Form.Control type="text" placeholder="Enter your email address" 
                  name = "email"
                  onChange={handleChange}
                  value={signUp.email}
                  required pattern=".+@gmail\.com"
                  />
                <Form.Control.Feedback type="invalid">
                  Please enter valid email address.
                </Form.Control.Feedback>
                </div>

                <div className="login-form">
                  <h4>Password</h4>
                  <Form.Control type="text" placeholder="Enter password" 
                  name = "password"
                  onChange={handleChange}
                  value={signUp.password}
                  required pattern=" /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/"
                  />
                <Form.Control.Feedback type="invalid">
                  Must be 8 or more characters and contain atleast 1 number
                </Form.Control.Feedback>
                </div>

                <div className="login-form">
                  <button>Create Account</button>
                </div>
                <p style={{ display: "flex", justifyContent: "center" }}>Or</p>
                <Row className="footer-row">
                  <Col className="footer-login-btn">
                    <div className="footer-btn">
                      <h6>Sign in with Google</h6>
                    </div>
                  </Col>
                  <Col className="footer-login-btn">
                    <div className="footer-btn">
                      <h6>Sign in with Facebook</h6>
                    </div>
                  </Col>
                  <p style={{display:"flex",justifyContent:"center",paddingTop:"10px" }}>By continuing I agree all term and condition of student tribe</p>
                </Row>
              </Form>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;