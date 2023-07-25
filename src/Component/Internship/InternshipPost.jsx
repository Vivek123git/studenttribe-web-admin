import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { onGetInternShipList } from "../../Action/IntershipAction";
import { Pagination } from "@mui/material";
import Loder from "../Loader/Loader";
// import DataNotFound from "../Loader/DataNotFound";
import { HiOutlineHome } from "react-icons/hi";
import { BiMoney } from "react-icons/bi";
import { AiOutlineCalendar } from "react-icons/ai";

const InternshipPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [active, setActive] = useState("");
  const [internship, setInternship] = useState([]);
  const [pageCount, setPageCount] = useState(1);
  const [pageLength, setPageLength] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setActive("all");
    let data = {
      limit: "8",
      page: pageCount,
    };
    dispatch(
      onGetInternShipList(data, setInternship, setPageLength, setLoading)
    );
  }, [pageCount]);

  const handleClick = (name) => {
    setActive(name);
  };

  const handleInternship = () => {
    navigate("/opportuinity-post");
  };
  return (
    <>
      <Navbar />
      <hr style={{ border: "1px solid #D9D9D9",margin:"0px" }} />
      {internship.length<0 ? <Container>
        <h1>Internship</h1>
        <p>
          You haven't posted any opportunities yet , click on the plus button to
          add opportunity
        </p>
        <Row className="event_dashboard">
          <div className="event-dashboard-body">
            <h1>No Internship</h1>
            <h4>
              You haven't posted any opportunities yet , click on the button to
              post
            </h4>
            <button
              className="save-btn"
              style={{ width: "60%" }}
              onClick={handleInternship}
            >
              + Post a job
            </button>
          </div>
        </Row>
      </Container> :

      <Container>
        <Row className="my-event">
          <Col md={4}>
            <h1>Internship</h1>
          </Col>
          <Col md={5} className="my-event-col">
            <button
              className="save-btn "
              style={{ width: "60%" }}
              onClick={handleInternship}
            >
              + Post an Internship
            </button>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="d-flex justify-content-between mt-4">
            <h5
              onClick={() => handleClick("all")}
              style={{
                fontWeight: active === "all" ? 700 : 500,
                cursor: "pointer",
              }}
            >
              All Internship
            </h5>
            <h5
              onClick={() => handleClick("published")}
              style={{
                fontWeight: active === "published" ? 700 : 500,
                cursor: "pointer",
              }}
            >
              Opportuinity Posted
            </h5>
            <h5
              onClick={() => handleClick("pending")}
              style={{
                fontWeight: active === "pending" ? 700 : 500,
                cursor: "pointer",
              }}
            >
              Pending Approval
            </h5>
            <h5
              onClick={() => handleClick("draft")}
              style={{
                fontWeight: active === "draft" ? 700 : 500,
                cursor: "pointer",
              }}
            >
              Draft
            </h5>
          </Col>
          <Row className="mt-4 justify-content-between" >
            {
              internship.length>0?
              internship.map((elem,id)=>{
                console.log(elem,"elem")
                return (
                  <Col md={5} className="form-screen m-2">
              <Row>
                <Col md={3}>
                  <img
                    src="https://img.freepik.com/free-photo/painting-flowers-with-purple-flower-left_1340-23754.jpg?w=900&t=st=1687177056~exp=1687177656~hmac=c10bef7dd7d94a60e88ef596fb57d994c9921dd001ec5ce5ace6a191fb56dfac"
                    style={{ width: "80px", borderRadius: "10px" }}
                  />
                </Col>
                <Col>
                  <h4>{elem.name}</h4>
                  <h5
                    style={{
                      fontWeight: "500",
                      color: "#000",
                      fontSize: "17px",
                    }}
                  >
                   {elem.about_company}
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex" md={5}>
                  <HiOutlineHome className="preview-icon" />
                  <p className="preview-col-p">{elem.type_2}</p>
                </Col>
                <Col className="d-flex p-0" md={3}>
                  <AiOutlineCalendar className="preview-icon" />
                  <p className="preview-col-p">{elem.duration} </p>
                </Col>
                <Col className="d-flex" md={4}>
                  <BiMoney className="preview-icon" />
                  <p className="preview-col-p">{elem.stipend}</p>
                </Col>
              </Row>
              <div>
                <p className="preview-col-p">
                 {elem.description}                </p>
              </div>
            </Col>
                )
              })
              
              :""
            }
          </Row>
        </Row>
        {/* {internship.length <= 0 && <DataNotFound />} */}
        {internship?.length > 0 && (
          <div className="event-pagination">
            <Pagination
              count={pageLength}
              color="primary"
              size="large"
              style={{ color: "#D21903" }}
              onChange={(e, value) => setPageCount(value)}
              page={pageCount}
            />
          </div>
        )}
        <Loder loading={loading} />
      </Container>}
    </>
  );
};

export default InternshipPost;
