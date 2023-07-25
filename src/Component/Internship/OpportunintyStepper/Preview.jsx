import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import {HiOutlineHome}  from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import {AiOutlineCalendar} from "react-icons/ai"

const Preview = ({ step, setStep }) => {
  const handleContinue = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div className="profile-section">
        <Container>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <div className="profile-form">
              <h2>Publish</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />

              <div className="profile-div">
                <Row className="w-100 form-screen">
                  <Row>
                    <Col md={3}>
                      <img
                        src="https://img.freepik.com/free-photo/painting-flowers-with-purple-flower-left_1340-23754.jpg?w=900&t=st=1687177056~exp=1687177656~hmac=c10bef7dd7d94a60e88ef596fb57d994c9921dd001ec5ce5ace6a191fb56dfac"
                        style={{ width: "80px", borderRadius: "10px" }}
                      />
                    </Col>
                    <Col>
                      <h4>UI/UX Designer Intern</h4>
                      <h5
                        style={{
                          fontWeight: "500",
                          color: "#000",
                          fontSize: "17px",
                        }}
                      >
                        Boston Consulting Group
                      </h5>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="d-flex" md={5}>
                    <HiOutlineHome className="preview-icon"/>
                    <p className="preview-col-p">Work From Home</p>
                    </Col>
                    <Col className="d-flex" md={3}>
                    <AiOutlineCalendar className="preview-icon"/>
                    <p className="preview-col-p">3 Months </p>
                    </Col>
                    <Col className="d-flex" md={4}>
                    <BiMoney className="preview-icon"/>
                    <p className="preview-col-p">10,000/Months</p>
                    </Col>
                  </Row>
                  <div>
                    <p className="preview-col-p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate natus quia nemo vitae nihil. Quas, praesentium facilis porro iusto aliquid nihil esse harum sapiente laborum aut maiores doloribus. Ad, culpa.</p>
                  </div>
                </Row>
              </div>

              <Row className="text-center pb-4 ">
                <Col md={2} className="d-flex align-self-center">
                  <BsArrowLeft
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    onClick={handleBack}
                  />
                </Col>
                <Col style={{ textAlign: "initial" }}>
                  <button className="save-btn">Save for later</button>
                </Col>
                <Col style={{ textAlign: "initial" }}>
                  <button className="save-btn" onClick={handleContinue}>
                    Send for Approval
                  </button>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Preview;
