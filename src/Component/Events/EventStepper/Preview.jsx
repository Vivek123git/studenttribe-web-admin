import React,{useEffect,useState} from "react";
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
import { useDispatch } from "react-redux";
import { onGetEventIdDetails } from "../../../Action/EventAction";
import Loader from "./../../Loader/Loader"
import { useNavigate } from "react-router-dom";

const Preview = ({setStep , step,id}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const[events,setEvents] = useState([])
  const[loading,setLoading] = useState(false)

  const formData = new FormData()
  formData.append("id",id)
  
  useEffect(()=>{
  setLoading(true)
    dispatch(onGetEventIdDetails(formData, setEvents,setLoading))
  },[])

  console.log(events)

    const handleSend=()=>{
        setStep(step+1)
    }

    const handleBack=()=>{
        if(id){
          navigate("/events")
        }else{
          setStep(step-1)
        }
      }

  return (
    <>
      <div className="profile-section">
        <Container>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <div className="profile-form">
              <h2>Preview</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />

              <div className="profile-div">
                <Row className="">
                <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={events.image}                />
                <CardContent>
                  <button className="card-btn">{events.status}</button>
                  <Typography variant="h4" style={{ fontSize: "18px" }}>
                    {events.name}
                  </Typography>
                  <div className="d-flex">
                    <AiOutlineCalendar
                      style={{ color: "CC202E", fontSize: "20px" }}
                    />
                    <p style={{ color: "#000" }}>{events.date}</p>
                    <RxDotFilled
                      style={{ fontSize: "20px", paddingTop: "3px" }}
                    />
                    <p style={{ color: "#000" }}>{events.start_time} pm to {events.end_time}pm</p>
                  </div>
                </CardContent>
                <hr className="m-0" />
                <CardActions>
                  <Button
                    size="small"
                    style={{
                      color: "#ce202f",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                  >
                    free
                  </Button>
                  <Button size="small"
                    style={{
                      color: "#ce202f",
                      fontWeight: 700,
                      fontSize: "18px",
                    }}
                   
                  >
                    View More
                  </Button>
                </CardActions>
              </Card>

                </Row>
              </div>

              <Row className="text-center pb-4 ">
                <Col md={2} className="d-flex align-self-center">
                  <BsArrowLeft style={{ fontSize: "30px",cursor:"pointer" }} onClick={handleBack} />
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
          <Loader loading={loading} />
        </Container>
      </div>
    </>
  );
};

export default Preview;
