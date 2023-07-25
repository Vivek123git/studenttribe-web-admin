import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { onSaveEvent } from "../../../Action/EventAction";

const Registration = ({ step, setStep }) => {
  const dispatch = useDispatch()
  const event = useSelector((state) => state.event);
  const auth= useSelector((state)=>state.auth);
  const user_id = auth.user.results.id;

  // const [ticketNo, setTicketNo] = useState(1);

  // const [registration, setRegistration] = useState([
  //   {
  //     name: `Ticket Title #${ticketNo}`,
  //     price: "Price",
  //   },
  // ]);

  // const handleAdd = () => {
  //   setTicketNo(ticketNo + 1);

  //   setRegistration([
  //     ...registration,
  //     { name: `Ticket Title #${ticketNo}`, price: "Price" },
  //   ]);
  // };
   
  const [loader,setLoader] = useState(false)
  const [registration, setRegistration] = useState({
    vipPrice: "",
    generalPrice: "",
    couplePrice: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistration({
      ...registration,
      [name]: value,
    });
  };


  let formData = new FormData();   

  formData.append("image",event.user.photo);
  formData.append("name",event.user.title);
  formData.append("description",event.user.description);
  formData.append("category_id",event.user.typeId);
  formData.append("status",event.user.status);
  formData.append("date",event.user.startDate);
  formData.append("date2",event.user.endDate);
  formData.append("start_time",event.user.startTime);
  formData.append("end_time",event.user.endDate);
  formData.append("general_price",registration.generalPrice);
  formData.append("vip_price",registration.vipPrice);
  formData.append("couple_price",registration.couplePrice)
  formData.append("location",event.user.location)
  formData.append("user_id",user_id)

  const handleSave=()=>{
    setLoader(true)
   dispatch(onSaveEvent(formData,setLoader))
  }

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
              <h2>Registration</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />
              <h2 style={{ color: "#000", marginLeft: "50px" }}>
                Type of Ticket
              </h2>
              <p style={{ marginLeft: "60px" }}>
                Choose Type of Ticket and registration details
              </p>

              <div className="d-flex justify-content-center">
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="free"
                      control={<Radio />}
                      label="Free"
                    />
                    <FormControlLabel
                      value="paid"
                      control={<Radio />}
                      label="Paid"
                    />
                  </RadioGroup>
                </FormControl>
              </div>

              <div className="profile-div">
                <Row className="progile-row">
                  {/* {registration.map((elem, id) => {
                    return ( */}
                  <>
                    <Form className="form-field">
                      <Form.Group className="mb-3 mt-3">
                        <Form.Label>VIP Price</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="vipPrice"
                          value={registration.vipPrice}
                        onChange={handleChange}
                        />
                      </Form.Group>
                      {/* <Form.Group className="mb-3 mt-3">
                            <Form.Label></Form.Label>
                            <Form.Control type="text" placeholder="INR" />
                          </Form.Group> */}
                    </Form>
                    <Form className="form-field">
                      <Form.Group className="mb-3 mt-3">
                        <Form.Label>General Price</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="generalPrice"
                          value={Registration.generalPrice}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </Form>
                    <Form className="form-field">
                      <Form.Group className="mb-3 mt-3">
                        <Form.Label>Couple Price</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder=""
                          name="couplePrice"
                          value={registration.couplePrice}
                        onChange={handleChange}
                        />
                      </Form.Group>
                    </Form>
                  </>
                  {/* );
                  })}
                  <h4 style={{ color: "#ce202f" }} onClick={handleAdd}>
                    + Add
                  </h4> */}
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
                <div className="password-container">
                    <button className="save-btn" onClick={handleSave}>Save and Exit</button>
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
                <Col style={{ textAlign: "initial" }}>
                  <button className="save-btn" onClick={handleContinue}>
                    Continue
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

export default Registration;
