import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import { AiOutlineEye } from "react-icons/ai";
import logo from "./../../Assets/Image/stLogo.png";
import eye from "./../../Assets/Image/Password-eye.png";
import "./AccountPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onSignIn } from "../../Action/AuthAction";
import Spinner from "react-bootstrap/Spinner";
import Cookies from "js-cookie";
import Modal from "react-bootstrap/Modal";
import { RxCross2 } from "react-icons/rx";

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    Cookies.remove("token");
    Cookies.remove("auth");
  }, []);

  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState(false);
  const [fgtLoader , setFgtLoader] = useState(false)

  const [validation, setValidation] = useState({
    passIcon: false,
    emailCheck: false,
    passCheck: false,
    fgtEmail:false
  });
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e,type) => {
    e.preventDefault();
    e.stopPropagation();
    
    setValidated(true);
  
    if (e.currentTarget.checkValidity() === true) {
        e.preventDefault();
        e.stopPropagation();
        // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(type==="forget"){
         setFgtLoader(true)
         console.log("sdfcsd")
        }
        else{
          setLoader(true);
          dispatch(onSignIn(state, navigate, setLoader));
        }
      }

    // e.preventDefault();
    // var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // var passFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    // if(!state.email.match(mailformat)){
    //   setValidation({
    //     ...validation,
    //     emailCheck:true
    //   })

    // }
    // else if(!state.password.match(passFormat)){
    //   setValidation({
    //     ...validation,
    //     passCheck:true
    //   })
    //   console.log("first2")
    // }
    // else{
    //   console.log("first3")
    // }
    

    // if (form.checkValidity() === false) {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //   if(type==="forget"){
    //     if(!state.email.match(mailformat)){
    //       setFgtLoader(true)
    //       setValidation({
    //         ...validation,
    //         fgtEmail:true
    //       })
    //     }
    //   }
    //   else{
    //     setLoader(true);
    //   dispatch(onSignIn(state, navigate, setLoader));
    //   }
    // }
   
  };

  const handlePassIcon = () => {
    if (validation.passIcon) {
      setValidation({
        ...validation,
        passIcon: false,
      });
    } else {
      setValidation({
        ...validation,
        passIcon: true,
      });
    }
  };

  return (
    <Container fluid className="account-container">
      <Row className="account-row">
        <Col className="logo-section" md={4}>
          <img src={logo} className="logo-img" />
        </Col>
        <Col md={8} className="form-container">
          <Container style={{ width: "80%" }}>
            <h1>Welcome Back</h1>
            <h2>Sign In</h2>
            <Row className="form-row">
              <Form noValidate validated={validated} onSubmit={(e)=>handleSubmit(e,"sign")}>
                <div className="login-form">
                  <h4>Email</h4>
                  <Form.Control
                    type="email"
                    placeholder="Enter your Email Address "
                    value={state.email}
                    name="email"
                    onChange={handleChange}
                    required pattern=".+@gmail\.com"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter valid email address.
                  </Form.Control.Feedback>
                </div>

                <div className="login-form">
                  <h4>Password</h4>
                  <div className="password-container">
                    <Form.Control
                      type={validation.passIcon ? "password" : "text"}
                      placeholder="Enter your Password"
                      value={state.password}
                      name="password"
                      onChange={handleChange}
                      required
                      // required pattern=" /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/"
                    />
             <Form.Control.Feedback type="invalid">
              Invalid password.
            </Form.Control.Feedback>
                    <div className="pass-icon" onClick={handlePassIcon}>
                      {validation.passIcon ? (
                        <img src={eye} />
                      ) : (
                        <AiOutlineEye style={{ fontSize: "25px" }} />
                      )}
                    </div>
                  </div>
                  <p className="fgt-pass">
                    Forgot Password?
                    <span
                      style={{
                        color: "#CC202E",
                        textDecoration: "underline",
                        fontWeight: "600",
                        cursor: "pointer",
                      }}
                      onClick={handleShow}
                    >
                      Reset
                    </span>
                  </p>
                </div>
                <div className="login-form">
                  <div className="password-container">
                    <button type="submit" >Sign-In</button>
                    <div className="pass-icon">
                      {loader ? (
                        <Spinner animation="border" variant="light" />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontWeight: "600",
                  }}
                >
                  or
                </p>
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
                  <p
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      paddingTop: "10px",
                    }}
                  >
                    By continuing I agree all term and condition of student
                    tribe
                  </p>
                </Row>
              </Form>
            </Row>
            <Modal show={show} centered onHide={handleClose}>
              <div
                className="d-flex justify-content-end p-1"
                style={{ fontSize: "40px" }}
              >
                <RxCross2 onClick={handleClose} className="cursor-pointer" />
              </div>
              <div className="text-center p-4">
                <h1>Forgot Password</h1>
              </div>
              <Form noValidate validated={validated} onSubmit={(e)=>handleSubmit(e,"forget")}>
              <div className="login-form p-4">
                <h4>Email</h4>
                <Form.Control
                  type="email"
                  placeholder="Enter your Email Address "
                  value={state.email}
                  name="email"
                  onChange={handleChange}
                  required pattern=".+@gmail\.com"
                />
            <Form.Control.Feedback type="invalid">
              Please enter valid email address.
            </Form.Control.Feedback>
              </div>
              <div className="login-form  d-flex justify-content-center p-4">
                <div className="password-container" style={{ width: "70%" }}>
                  <button type="submit">Forgot Password</button>
                  <div className="pass-icon">
                    {fgtLoader ? (
                      <Spinner animation="border" variant="light" />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              </Form>
            </Modal>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
