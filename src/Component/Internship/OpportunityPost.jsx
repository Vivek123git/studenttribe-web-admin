import React, { useState } from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "react-bootstrap";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import JobDetails from "./OpportunintyStepper/JobDetails";
import ScreeningQues from "./OpportunintyStepper/ScreeningQues";
import Preview from "./OpportunintyStepper/Preview";
import Pending from "./OpportunintyStepper/Pending";
import Publish from "./OpportunintyStepper/Publish";

const steps = [
  "Job Details",
  "Screening Questions",
  "Preview",
  "Pending",
  "Publish"
];



const OpportunityPost = () => {

    const[step , setStep] = useState(0)

  return (
    <>
      <Navbar />
      <hr style={{ border: "1px solid #D9D9D9" ,margin:"0px"}} />
      <Container>
        <Row>
          <Col>
            <h1 className="text-center pt-4">Post an Opportunity</h1>
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
     

      {step===0? <JobDetails setStep={setStep} step={step}/>:step===1? 
      <ScreeningQues setStep={setStep} step={step}/>:step===2?
      <Preview setStep={setStep} step={step}/>:step===3?  
      <Pending setStep={setStep} step={step}/>: step===4?
      <Publish setStep={setStep} step={step}/>:""
    }

      </Container>
    </>
  );
};

export default OpportunityPost;
