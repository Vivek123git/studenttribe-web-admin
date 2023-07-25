import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Alert } from "react-bootstrap";
import uploadImg from "./../../../Assets/Image/upoadImg.png";
import { BsArrowLeft } from "react-icons/bs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onGetEventDetails, onGetEventType } from "../../../Action/EventAction";
import Spinner from "react-bootstrap/Spinner";

const EventDetails = ({ setStep, step }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [event, setEvent] = useState({
    title: "",
    typeId: "",
    description: "",
    photo: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: ""
  });

  const [eventType, setEventType] = useState([]);
  const [loader , setLoader] = useState(false)
  const [errors, setErrors] = useState({});
  const [selectedFileName, setSelectedFileName] = useState("Upload Cover photo");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "photo") {
      const file = e.target.files[0];
      setEvent({
        ...event,
        photo: file
      });
      setSelectedFileName(file ? file.name : "Upload Cover photo"); 
    setErrors({
      ...errors,
      photo: "" // Clear the error for the photo field when a file is selected
    });
    } else {
      setEvent({
        ...event,
        [name]: value
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!event.title) {
      newErrors.title = "This field is required !";
      isValid = false;
    }
    if (!event.typeId) {
      newErrors.typeId = "This field is required !";
      isValid = false;
    }
    if (!event.description) {
      newErrors.description = "This field is required !";
      isValid = false;
    }
    if (!event.startDate) {
      newErrors.startDate = "This field is required !";
      isValid = false;
    }
    if (!event.startTime) {
      newErrors.startTime = "This field is required !";
      isValid = false;
    }
    if (!event.endDate) {
      newErrors.endDate = "This field is required !";
      isValid = false;
    }
    if (!event.endTime) {
      newErrors.endTime = "This field is required !";
      isValid = false;
    }
    if (!event.location) {
      newErrors.location = "This field is required !";
      isValid = false;
    }
    if (!event.photo) {
      newErrors.photo = "This field is required !";
      isValid = false;
    }
    console.log(event)
    console.log(newErrors)
    setErrors(newErrors);
    return isValid;
  };

  const handleSave = () => {
 setLoader(true)
    if (validateForm()) {
      dispatch(onGetEventDetails(event, step, setStep,setLoader));
    }
    setLoader(false)
  };

  const handleClear=()=>{
    setEvent({
      ...event,
      title: "",
    typeId: "",
    description: "",
    photo: "",
    startDate: "",
    startTime: "",
    endDate: "",
    endTime: "",
    location: ""
    })
  }

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(onGetEventType(setEventType));
  }, []);

  return (
    <>
      <div className="profile-section">
        <Container>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <div className="profile-form">
              <h2>Event Details</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />
              <div className="profile-div">
                <Row className="progile-row">
                  <Form className="form-field">
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Event Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Event Title"
                        name="title"
                        value={event.title}
                        onChange={handleChange}
                        isInvalid={!!errors.title}
                        required
                      />
                      {errors.title && (
                        <Form.Control.Feedback type="invalid">
                          {errors.title}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Event Type</Form.Label>
                      <Form.Control
                        as="select"
                        name="typeId"
                        value={event.typeId}
                        onChange={handleChange}
                        isInvalid={!!errors.typeId}
                      >
                        <option>Select Event Type</option>
                        {eventType.map((data, index) => (
                          <option key={index} value={data.id}>
                            {data.name}
                          </option>
                        ))}
                      </Form.Control>
                      {errors.typeId && (
                        <Form.Control.Feedback type="invalid">
                          {errors.typeId}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Event Description</Form.Label>
                      <Form.Control
                        style={{ height: "100%" }}
                        as="textarea"
                        rows={5}
                        placeholder="Write a something about your event"
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        isInvalid={!!errors.description}
                      />
                       {errors.description && (
                        <Form.Control.Feedback type="invalid">
                          {errors.description}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Cover Photo</Form.Label>
                      <Form.Control
                        type="file"
                        id="img1"
                        style={{ display: "none" }}
                        name="photo"
                        accept=".jpg, .jpeg, .png"
                        onChange={handleChange}
                        isInvalid={!!errors.photo}
                        
                      />
                      {errors.photo && (
                        <Form.Control.Feedback type="invalid">
                          {errors.photo}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    <label for="img1" className="upload-logo">
                      <div className="text-center">
                        <img  src={event.photo?event.photo:uploadImg} />
                        <p>{selectedFileName}</p>
                      </div>
                    </label>
                    <p>Photo must be jpg,png at a minimum of 800*600</p>
                  </Form>
                </Row>
              </div>
              <h2>Date and Time</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />
              <div className="profile-div">
                <Row className="progile-row">
                  <Form className="form-field">
                    <h4>Event Starts</h4>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3 mt-3">
                          <h4 style={{ fontWeight: "500", color: "#ce202f" }}>
                            Date
                          </h4>
                          <Form.Control
                            type="date"
                            name="startDate"
                            value={event.startDate}
                            onChange={handleChange}
                            isInvalid={!!errors.startDate}
                            
                          />
                          {errors.startDate && (
                        <Form.Control.Feedback type="invalid">
                          {errors.startDate}
                        </Form.Control.Feedback>
                      )}
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3 mt-3">
                          <h4 style={{ fontWeight: "500", color: "#ce202f" }}>
                            Time
                          </h4>
                          <Form.Control
                            type="time"
                            placeholder="Enter name of POC"
                            name="startTime"
                            value={event.startTime}
                            onChange={handleChange}
                            isInvalid={!!errors.startTime}
                            
                          />
                          {errors.startTime && (
                        <Form.Control.Feedback type="invalid">
                          {errors.startTime}
                        </Form.Control.Feedback>
                      )}
                        </Form.Group>
                      </Col>
                    </Row>
                    <h4>Event Ends</h4>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3 mt-3">
                          <h4 style={{ fontWeight: "500", color: "#ce202f" }}>
                            Date
                          </h4>
                          <Form.Control
                            type="date"
                            name="endDate"
                            value={event.endDate}
                            onChange={handleChange}
                            isInvalid={!!errors.endDate}
                            
                          />
                          {errors.endDate && (
                        <Form.Control.Feedback type="invalid">
                          {errors.endDate}
                        </Form.Control.Feedback>
                      )}
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3 mt-3">
                          <h4 style={{ fontWeight: "500", color: "#ce202f" }}>
                            Time
                          </h4>
                          <Form.Control
                            type="time"
                            name="endTime"
                            value={event.endTime}
                            onChange={handleChange}
                            isInvalid={!!errors.endTime}
                            
                          />
                          {errors.endTime && (
                        <Form.Control.Feedback type="invalid">
                          {errors.endTime}
                        </Form.Control.Feedback>
                      )}
                        </Form.Group>
                      </Col>
                    </Row>
                  </Form>
                </Row>
              </div>
              <h2>Location</h2>
              <p>Choose Your preferred location by click on the below button</p>
              <hr style={{ border: "1px solid #D9D9D9" }} />
              <div className="d-flex justify-content-center">
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Venue"
                      control={<Radio />}
                      label="Venue"
                    />
                    <FormControlLabel
                      value="Virtual"
                      control={<Radio />}
                      label="Virtual"
                    />
                    <FormControlLabel
                      value="Hybrid"
                      control={<Radio />}
                      label="Hybrid"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="profile-div">
                <Row className="progile-row">
                  <Form className="form-field">
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Location"
                        name="location"
                        value={event.location}
                        onChange={handleChange}
                        isInvalid={!!errors.location}
                        
                      />
                      {errors.location && (
                        <Form.Control.Feedback type="invalid">
                          {errors.location}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                    {/* <Form.Group className="mb-3 mt-3">
                      <Form.Label>Adress 1</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Address"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Adress 2</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Your Address"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3 mt-3">
                      <Form.Label> City</Form.Label>
                      <Form.Select>
                        <option>CIty</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label> State</Form.Label>
                      <Form.Select>
                        <option>State</option>
                      </Form.Select>
                    </Form.Group> */}
                  </Form>
                </Row>
              </div>

              {/* Rest of the code */}

              <Row className="text-center pb-4 ">
                <Col md={2} className="d-flex align-self-center">
                  <BsArrowLeft
                    style={{ fontSize: "30px", cursor: "pointer" }}
                    onClick={handleBack}
                  />
                </Col>
                <Col style={{ textAlign: "initial" }}>
                <div className="password-container">
                    <button className="save-btn" onClick={handleClear}>Clear</button>
                    
                  </div>
                </Col>
                <Col style={{ textAlign: "initial" }}>
                <div className="password-container">
                    <button className="save-btn" onClick={handleSave}>Save</button>
                    <div className="save-loader">
                      {" "}
                      {loader ? (
                        <Spinner animation="border" variant="light" />
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default EventDetails;
