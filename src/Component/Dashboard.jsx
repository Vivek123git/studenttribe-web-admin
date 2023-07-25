import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { onGetDashboardData } from "../Action/IntershipAction";
import Loader from "./../Component/Loader/Loader";
// import DataNotFound from "./../Component/Loader/DataNotFound";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [dashboard, setDashboard] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // toast.success('Success Notification !');
    dispatch(onGetDashboardData(setDashboard, setLoading,navigate));
  }, []);

  return (
    <>
      <Navbar />
      <hr style={{ border: "1px solid #D9D9D9" }} />
      <Container>
        <ToastContainer />
        <h1 className="text-start">Dashboard</h1>
        <Row className="dashboard-row">
          {dashboard.status ? (
            <Col md={5} className="dashboard-col">
              <div className="d-flex justify-content-between">
                <h4>Name</h4>
                <h6 style={{ color: "#ce202f" }}>View all</h6>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Total User</h6>
                <p>{dashboard.total_user}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Total Internship </h6>
                <p>{dashboard.total_Internships}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Total Internship Apply</h6>
                <p>{dashboard.total_Internships_apply}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Total Events</h6>
                <p>{dashboard.total_Event}</p>
              </div>
              <div className="d-flex justify-content-between">
                <h6>Total Booking Event</h6>
                <p>{dashboard.total_booking_event}</p>
              </div>
            </Col>
          ) : (
            ""
          )}

          {/* <Col md={5} className='dashboard-col'>
            <div className='d-flex justify-content-between'>
                <h4>Internships</h4>
                <h6 style={{color:"#ce202f"}}>View all</h6>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Develoer</h6>
                <p>20 applicants</p>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Develoer</h6>
                <p>20 applicants</p>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Develoer</h6>
                <p>20 applicants</p>
            </div>
            <div className='d-flex justify-content-between'>
                <h6>Develoer</h6>
                <p>20 applicants</p>
            </div>
        </Col> */}
        </Row>
      </Container>
      {/* {dashboard.status ? "" : <DataNotFound />} */}
      <Loader loading={loading} />
    </>
  );
};

export default Dashboard;
