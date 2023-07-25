import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import successfull from "./../../../Assets/Image/suceessfully.png"

const Publish = () => {
  return (
    <>
      <div className="profile-section">
        <Container>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <div className="profile-form">
              <h2>Post a Job</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />

              <div className="publish-body" >
                <img src={successfull}/>
                <h1 className="pt-4">Successfully Posted</h1>
                <h4>Your opportuinity has been successfully posted</h4>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Publish;
