import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import { Container,Row,Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { onGetAnalyticsData } from '../Action/IntershipAction';
import Loader from "./../Component/Loader/Loader";
import DataNotFound from "./../Component/Loader/DataNotFound";
import registration from "./../Assets/Image/registration.png";
import revenue from "./../Assets/Image/revenue.png"
import event from "./../Assets/Image/event.png"
import intern from './../Assets/Image/intern.png'
import appk from './../Assets/Image/appk.png'
const Analytics = () => {

    const dispatch = useDispatch();

    const [analytics , setAnalytics] = useState([])
    const [loading , setLoading] = useState(false)

    useEffect(()=>{
        // setLoading(true)
      dispatch(onGetAnalyticsData(setAnalytics , setLoading))
    },[])


  return (
    <>
    <Navbar/>
    <hr style={{ border: "1px solid #D9D9D9" }} />
    <Container>
    <h1 className="text-start">Analytics</h1>
    <Row className='dashboard-row'>
       <Col md={2} className='analytics-box' style={{backgroundColor:"#F6EAFF"}}>
        <img src={registration}/>
        <h1 className="text-start mt-2 m-0">1,000</h1>
        <h6>Total Registration</h6>
       </Col>
       <Col md={2} className='analytics-box' style={{backgroundColor:"#FFEAEA"}}>
        <img src={revenue}/>
        <h1 className="text-start mt-2 m-0">120k</h1>
        <h6>Total Revenue</h6>
       </Col>
       <Col md={2} className='analytics-box' style={{backgroundColor:"#EAFAFF"}}>
        <img src={appk}/>
        <h1 className="text-start mt-2 m-0">1,200</h1>
        <h6>Total Application</h6>
       </Col>     
       <Col md={2} className='analytics-box' style={{backgroundColor:"#F2FFEA"}}>
        <img src={event}/>
        <h1 className="text-start mt-2 m-0">3</h1>
        <h6>Total Events</h6>
       </Col>
       <Col md={2} className='analytics-box' style={{backgroundColor:"#FFFDEA"}}>
        <img src={intern}/>
        <h1 className="text-start mt-2 m-0">1,000</h1>
        <h6>Total Internships</h6>
       </Col>
    </Row>
    </Container>
    {/* {analytics.status ?"":<DataNotFound/>} */}
    <Loader loading={loading} />
    </>
  )
}

export default Analytics;