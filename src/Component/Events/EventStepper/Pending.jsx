import React from 'react'
import { Container, Row, Col, Form } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx"
import {AiOutlineCalendar} from "react-icons/ai"
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Pending = ({setStep,step}) => {

    const handleSend=()=>{
        setStep(step+1)
    }

    const handleBack=()=>{
        setStep(step-1)
      }

  return (
    <>
    <div className="profile-section">
        <Container>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <div className="profile-form">
              <h2>Pending Approval</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />

              <div className="profile-div">
                <Row className="">
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="https://img.freepik.com/free-photo/painting-flowers-with-purple-flower-left_1340-23754.jpg?w=900&t=st=1687177056~exp=1687177656~hmac=c10bef7dd7d94a60e88ef596fb57d994c9921dd001ec5ce5ace6a191fb56dfac"
                    />
                    <CardContent>
                     <button className="card-btn">Active</button>
                      <Typography variant="h4" style={{fontSize:"18px"}}>
                        WorkShop on Entrepreneurship
                      </Typography>
                      <div className="d-flex">
                     <AiOutlineCalendar style={{color:"CC202E",fontSize:"20px"}}/>
                     <p  style={{color:"#000"}}>23 dec 2023</p>
                     <RxDotFilled style={{fontSize:"20px",paddingTop:"3px"}}/>
                     <p style={{color:"#000"}}>4:00 pm to 5:00 pm</p>
                      </div>
                    </CardContent>
                    <hr className="m-0"/>
                    <CardActions>
                      <Button size="small" style={{color:"#ce202f",fontWeight:700,fontSize:"18px"}}>free</Button>
                      <Button size="small"  style={{color:"#ce202f",fontWeight:700,fontSize:"18px"}}>View More</Button>
                    </CardActions>
                  </Card>
                </Row>
              </div>

              <Row className="text-center pb-4 ">
                <Col md={2} className="d-flex align-self-center">
                  <BsArrowLeft style={{ fontSize: "30px",cursor:"pointer" }} onClick={handleBack}/>
                </Col>
                <Col style={{ textAlign: "initial" }}>
                  <button className="save-btn">Save for Later</button>
                </Col>
                <Col style={{ textAlign: "initial" }}>
                  <button className="save-btn" onClick={handleSend}>Send For Approval</button>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default Pending