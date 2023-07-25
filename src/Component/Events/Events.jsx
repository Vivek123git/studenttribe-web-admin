import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { RxDotFilled } from "react-icons/rx";
import { AiOutlineCalendar } from "react-icons/ai";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { onGetEventList } from "../../Action/EventAction";
import { Pagination } from "@mui/material";
import Loader from "../Loader/Loader";
// import DataNotFound from "../Loader/DataNotFound";

const Events = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const [active, setActive] = useState("");
  const [event , setEvent] = useState([])
  const [pageCount , setPageCount] = useState(1)
  const [pageLength , setPageLength] = useState('')
  const [loading , setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setActive("all")
    let data = {
      "page":pageCount,
      "limit":6
        }
    dispatch(onGetEventList(data,setEvent,setPageLength,setLoading))
  },[pageCount])

  const handleEvent = () => {
    navigate("/create-event");
  };

  const handleClick = (name) => {
    setActive(name);
  };

  const handleView=(id)=>{
    navigate(`/create-event?step=${2}&id=${id}`)
  }

  return (
    <>
      <Navbar />
      <hr style={{ border: "1px solid #D9D9D9",margin:"0px" }} />
       {event.length<0 ? <Container>
        <h1>My Events</h1>
        <p>You dont have any events yet , create multiple events by just one click</p>
        <Row className='event_dashboard'>
         <div className='event-dashboard-body'>
            <h1>No events</h1>
            <h4>You dont have any events yet click on the create button below</h4>
            <button className='save-btn' style={{width:"60%"}} onClick={handleEvent}>+ Create an Event</button>
         </div>
        </Row>
    </Container> :

      <Container>
        <Row className="my-event">
          <Col md={4}>
            <h1>My Events</h1>
          </Col>
          <Col md={4} className="my-event-col">
            <button
              className="save-btn "
              style={{ width: "60%" }}
              onClick={handleEvent}
            >
              + Create an Event
            </button>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="d-flex justify-content-between mt-4">
            <h5
              onClick={() => handleClick("all")}
              style={{ fontWeight: active === "all" ? 700 : 500,cursor:"pointer" }}
            >
              All Events
            </h5>
            <h5
              onClick={() => handleClick("published")}
              style={{ fontWeight: active === "published" ? 700 : 500,cursor:"pointer" }}
            >
              Published Events
            </h5>
            <h5
              onClick={() => handleClick("pending")}
              style={{ fontWeight: active === "pending" ? 700 : 500,cursor:"pointer" }}
            >
              Pending Approval
            </h5>
            <h5
              onClick={() => handleClick("draft")}
              style={{ fontWeight: active === "draft" ? 700 : 500 ,cursor:"pointer"}}
            >
              Draft
            </h5>
          </Col>
          <div className="pt-4">
            <Row className="justify-content-between">
              {event.length>0?
              event.map((elem,id)=>{
                return (
                <Card sx={{ maxWidth: 345 }} style={{margin:"10px"}} key={id}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image={elem.image}                />
                <CardContent>
                  <button className="card-btn">{elem.status}</button>
                  <Typography variant="h4" style={{ fontSize: "18px" }}>
                    {elem.name}
                  </Typography>
                  <div className="d-flex">
                    <AiOutlineCalendar
                      style={{ color: "CC202E", fontSize: "20px" }}
                    />
                    <p style={{ color: "#000" }}>{elem.date}</p>
                    <RxDotFilled
                      style={{ fontSize: "20px", paddingTop: "3px" }}
                    />
                    <p style={{ color: "#000" }}>{elem.start_time} pm to {elem.end_time}pm</p>
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
                    onClick={()=>handleView(elem.id)}
                  >
                    View More
                  </Button>
                </CardActions>
              </Card>

                )              })
              
              :""}
            </Row>
          </div>
        </Row>
      {/* {event.length <= 0 && <DataNotFound/>} */}
        {event?.length > 0 && (
          <div className="event-pagination" >
            <Pagination count={pageLength} color="primary" size="large" style={{ color: "#D21903" }} onChange={(e, value) => setPageCount(value)} page={pageCount} />
          </div>
        )}
        <Loader loading={loading} />
        </Container>
}
    </>
  );
};

export default Events;
