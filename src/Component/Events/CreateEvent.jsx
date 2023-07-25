import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import EventDetails from "./EventStepper/EventDetails";
import Registration from "./EventStepper/Registration";
import Preview from "./EventStepper/Preview";
import Pending from "./EventStepper/Pending";
import Publish from "./EventStepper/Publish";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

const steps = [
  "Event Details",
  "Registration",
  "Preview",
  "Pending",
  "Publish"
];
const CreateEvent = () => {

  const dispatch = useDispatch();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const stepValue = searchParams.get("step");
  const id = searchParams.get("id")

  const[step , setStep] = useState(stepValue?+stepValue:0);
  
  return (
    <>
      <Navbar />
      <hr style={{ border: "1px solid #D9D9D9" ,margin:"0px"}} />
      <Container>
        <Row>
          <Col>
            <h1 className="text-center pt-4">Create an Event</h1>
          </Col>
        </Row>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={step} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        {/* <EventDetails setStep={setStep} step={step}/>
        <Registration setStep={setStep} step={step}/>
        <Preview setStep={setStep} step={step}/>
        <Pending setStep={setStep} step={step}/>
        <Publish setStep={setStep} step={step}/> */}

      {step===0? <EventDetails setStep={setStep} step={step}/>:step===1? 
      <Registration setStep={setStep} step={step}/>:step===2?
      <Preview setStep={setStep} step={step} id={id}/>:step===3?  
      <Pending setStep={setStep} step={step}/>: step===4?
      <Publish setStep={setStep} step={step}/>:""
    }

      </Container>
    </>
  );
};

export default CreateEvent;
