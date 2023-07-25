import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { onGetJobtype, onGetSkill } from "../../../Action/IntershipAction";

const JobDetails = ({ setStep, step }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [job , setJob] = useState({
    title:"",
    type:"",
    description:"",
    location:"",
    openings:"",
    skills:"",
    year:"",
    month:"",
    startDate:"",
    payBy:"",
    minimum:"",
    maximum:"",
    benifits:""
  })
  const [jobType,setJobType] = useState([])
  const [skill,setSkill] = useState([])

  const handleSave = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(()=>{
    dispatch(onGetJobtype(setJobType))
    dispatch(onGetSkill(setSkill))
  },[])


  return (
    <>
      <div className="profile-section">
        <Container>
          <Form style={{ display: "flex", justifyContent: "center" }}>
            <div className="profile-form">
              <h2>Job Details</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />
              <div className="profile-div">
                <Row className="progile-row">
                  <div className="form-field">
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Job Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Event Title"
                        name="title"
                        value={job.title}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Job Type</Form.Label>
                      <Form.Select name="type" value={job.type}>
                        <option>Select Type</option>
                        {jobType.map((elem,id)=>{
                          return(
                            <option value={elem.id}>{elem.name}</option>
                          )
                        })}
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Job Description</Form.Label>
                      <Form.Control
                        style={{ height: "100%" }}
                        as="textarea"
                        rows={5}
                        placeholder="Write a something about your event"
                        name="description"
                        value={job.description}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Job Location</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Event Title"
                        name="location"
                        value={job.location}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>No. of Openings</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Event Title"
                        name="openings"
                        value={job.openings}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Skill</Form.Label>
                      <Form.Select name="skills" value={job.skills}>
                        <option>Select Skill</option>
                        {skill.map((elem,id)=>{
                          return(
                            <option value={elem.id}>{elem.name}</option>
                          )
                        })}
                      </Form.Select>
                    </Form.Group>

                    <h4>Job Duration</h4>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3 mt-3">
                          <h4 style={{ fontWeight: "500", color: "#ce202f" }}>
                            Year
                          </h4>
                          <Form.Select>
                            <option>2023</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3 mt-3">
                          <h4 style={{ fontWeight: "500", color: "#ce202f" }}>
                            Month
                          </h4>
                          <Form.Select>
                            <option>June</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Form.Group className="mb-3 mt-3">
                        <Form.Label>Expected Start Date</Form.Label>
                        <Form.Control
                          type="date"
                          placeholder="Enter Event Title"
                          name="startDate"
                          value={job.startDate}
                        />
                      </Form.Group>
                    </Row>
                    <h4>Compensation</h4>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3 mt-3">
                          <h4 style={{ fontWeight: "500", color: "#ce202f" }}>
                            Pay By
                          </h4>
                          <Form.Select>
                            <option>Date</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3 mt-3">
                          <h4 style={{ fontWeight: "500", color: "#ce202f" }}>
                            Minimum
                          </h4>
                          <Form.Control
                          type="number"
                          placeholder="10,000"
                          name="minimum"
                          value={job.minimum}
                        />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3 mt-3">
                          <h4 style={{ fontWeight: "500", color: "#ce202f" }}>
                            Maximum
                          </h4>
                          <Form.Control
                          type="number"
                          placeholder="20,000"
                          name="maximim"
                          value={job.maximum}
                        />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Benifits Offered</Form.Label>
                      <Form.Select value={job.benifits} name="benifits">
                        <option>Benifits</option>
                      </Form.Select>
                    </Form.Group>
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
                  <button className="save-btn">Clear</button>
                </Col>
                <Col style={{ textAlign: "initial" }}>
                  <button className="save-btn" onClick={handleSave}>
                    Save
                  </button>
                </Col>
              </Row>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default JobDetails;
