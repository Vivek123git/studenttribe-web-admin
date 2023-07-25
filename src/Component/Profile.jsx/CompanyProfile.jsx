import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Container, Row, Col, Form } from "react-bootstrap";
import uploadDoc from "./../../Assets/Image/upload-docpng.png";
import { useDispatch } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import { onGetCompanyDetails, onUpdateComapnyDetails } from "../../Action/AuthAction";

const CompanyProfile = () => {

  const dispatch = useDispatch()

  const [validated, setValidated] = useState(false);
  const [company, setCompany] = useState({
    name: "",
    number: "",
    address: "",
    location: "",
    email: "",
    website: "",
    gst: "",
    cinNo: "",
    cinDocument: "",
    pocName: "",
    pocMobile: "",
    pocDesignation: "",
  });
  const [loader,setLoader] = useState(false)
  const [selectedFileName, setSelectedFileName] = useState("Upload Document");

  const handleChange = (e) => {	
    const { name, value } = e.target;	
  	
    if (name === "cinDocument") {	
      const file = e.target.files[0];	
      setSelectedFileName(file ? file.name : "Upload document");	
  	
      setCompany({	
        ...company,	
        cinDocument: file,	
      });	
    } else {	
      setCompany({	
        ...company,	
        [name]: value,	
      });	
    }	
  };

  const formData = new FormData()
  formData.append("organization_name",company.name)
  formData.append("contact_number",company.number)
  formData.append("address",company.address)
  formData.append("location_organization",company.location)
  formData.append("email_address",company.email)
  formData.append("Website",company.website)
  formData.append("GST_number",company.gst)
  formData.append("document",company.cinDocument)
  formData.append("CIN_number",company.cinNo)
  formData.append("name_POC",company.pocName)
  formData.append("mobile_number_POC",company.pocMobile)
  formData.append("designation_POC",company.pocDesignation)
 

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    setValidated(true);
  
    if (event.currentTarget.checkValidity() === true) {
      setLoader(true);
      dispatch(onUpdateComapnyDetails(formData, setLoader,company,setCompany));
    }
  };
  

  useEffect(()=>{
    dispatch(onGetCompanyDetails(company,setCompany))
  },[])

  return (
    <>
      <Navbar />
      <hr style={{ border: "1px solid #D9D9D9" ,margin:"0px"}} />
      <div className="profile-section">
        <Container>
          <h1 className="text-center">Company Profile</h1>
          <p className="text-center">
            Please provide details about your organization to get started
          </p>
          <Form
            style={{ display: "flex", justifyContent: "center" }}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <div className="profile-form">
              <h2>Company Details</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />
              <div className="profile-div">
                <Row className="progile-row">
                  <div className="form-field">
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Organization Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Organization Name"
                        name="name"
                        value={company.name}
                        onChange = {handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        This field is required!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Contact No</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Contact Number"
                        name="number"
                        value={company.number}
                        onChange = {handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        This field is required!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Email address<span >*</span></Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your Email address"
                        name="email"
                        value={company.email}
                        onChange = {handleChange}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        This field is required!
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Location of the Organization</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Organization Location"
                        name="location"
                        value={company.location}
                        onChange = {handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Address</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Address"
                        name="address"
                        value={company.address}
                        onChange = {handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Website"
                        name="website"
                        value={company.website}
                        onChange = {handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>GST Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your GST No."
                        name="gst"
                        value={company.gst}
                        onChange = {handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>CIN Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your CIN No."
                        value={company.cinNo}
                        onChange = {handleChange}
                        required
                        name="cinNo"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>CIN Document Upload</Form.Label>
                      <Form.Control
                        type="file"
                        id="img1"
                        style={{ display: "none" }}
                        name="cinDocument"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <label for="img1" className="upload-logo">
                      <div className="text-center">
                      <img src={company.cinDocument ? company.cinDocument : uploadDoc} style={{ width: company.cinDocument ? "100px" : "auto" }} />
                        <p>{selectedFileName}</p>
                      </div>
                    </label>
                    <p>Logo must be jpg,png at a minimum of 120*120</p>
                  </div>
                </Row>
              </div>

              <h2>POC (Point of Contact Details)</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />
              <div className="profile-div">
                <Row className="progile-row">
                  <div className="form-field">
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Name of POC</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter name of POC"
                        name="pocName"
                        value={company.pocName}
                        onChange = {handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Mobile Number"
                        name="pocNumber"
                        value={company.pocMobile}
                        onChange = {handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Designation of POC</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Designation of POC"
                        name="pocDesignation"
                        value={company.pocDesignation}
                        onChange = {handleChange}
                        required
                      />
                    </Form.Group>

                    <Row className="text-center">
                      <Col>
                        <button className="save-btn">Clear</button>
                      </Col>
                      <Col>
                        <button className="save-btn" type="submit">
                          Save
                        {loader ? (
                        <Spinner animation="border" variant="light" />
                      ) : (
                        ""
                      )}
                        </button>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </div>
            </div>
          </Form>
        </Container>
      </div>
    </>
  );
};

export default CompanyProfile;
