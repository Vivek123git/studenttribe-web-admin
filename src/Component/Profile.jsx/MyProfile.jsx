import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Container, Row, Col, Form } from "react-bootstrap";
import uploadImg from "./../../Assets/Image/upoadImg.png";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { getProfile, onEditProfileDetails } from "../../Action/AuthAction";
import Cookies from "js-cookie";

const MyProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user);
  const token = Cookies.get("token")

  const [profile, setProfile] = useState({
    profileImg: "",
    pname: "",
    mobile: "",
    email: "",
    designation: "",
  });

  const firstword = profile.pname.split("")[0];
  const [company, setComapny] = useState({
    name: "",
    type: "",
    about: "",
    industry: "",
    logo: "",
  });
const [loader,setLoader] = useState(false)
const[id , setId] = useState("")
const [selectedFileName, setSelectedFileName] = useState("Edit profile picture");
const [logoImg , setLogoImg] = useState("Upload logo")


  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "profileImg") {
      const file = e.target.files[0]
      setProfile({
        ...profile,
        profileImg: file,
      });
      setSelectedFileName(file ? file.name : "Edit profile picture");
    } else if (name === "logo") {
      const file = e.target.files[0]
      setComapny({
        ...company,
        logo: file,
      });
      setLogoImg(file ? file.name : "Upload logo");
    } else {
      setComapny({
        ...company,
        [name]: value,
      });
    }
  };

  const formData = new FormData();
  formData.append("profile_img",profile.profileImg)
  formData.append("company_name",company.name)
  formData.append("company_type",company.type)
  formData.append("about_company",company.about)
  formData.append("industry",company.industry)
  formData.append("logo",company.logo)
  formData.append("id",id)

  const handleSave = async (e) => {
    setLoader(true)
    e.preventDefault();
    await dispatch(onEditProfileDetails(formData, setLoader));
    dispatch(getProfile(token)); 
  };

  useEffect(() => {
    if (auth && auth.results) {
      const {first_name,last_name,number,email,role_id,profile_img,designation,CompanyName,companyType,aboutCompany,industry,companyLogo,id} = auth.results;
      setProfile({
        profileImg: profile_img,
        pname: `${first_name} ${last_name}`,
        mobile: number,
        email,email,
        designation: designation,
      });
      setComapny({
        name: CompanyName,
        type: companyType,
        about: aboutCompany,
        industry: industry,
        logo: companyLogo,
      });
      setId(id)
    }
  }, [auth]);

  useEffect(()=>{
    dispatch(getProfile(token))
  },[])

  return (
    <>
      <Navbar />
      <hr style={{ border: "1px solid #D9D9D9", margin: "0px" }} />
      <div className="profile-section">
        <Container>
          <h1 className="text-center">My Profile</h1>
          <p className="text-center">
            Please provide details about your organization to get started
          </p>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="profile-form">
              <h2>User Details</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />
              <div className="profile-div">
                <Row className="progile-row">
                  <h4>Profile Picture</h4>
                  <div className="d-flex align-items-end">
                    <label for="img1">{profile.profileImg === "" ? (
                      <h1 className="avtar_png">{firstword}</h1>
                    ) : (
                      <img className="avtar_png" src={profile.profileImg} />
                    )}</label>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Control
                        type="file"
                        id="img1"
                        placeholder="Enter your Contact Number"
                        name="profileImg"
                        accept="png/jpg/jpeg"
                        onChange={handleChange}
                        style={{ display: "none" }}
                      />
                    </Form.Group>
                    <label for="img1">
                      {/* <p style={{ marginLeft: "10px" }}>Edit Profile Picture</p> */}
                      <p style={{ marginLeft: "10px",cursor:"pointer" }}>{selectedFileName}</p>
                    </label>
                  </div>
                  <div className="form-field">
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Full Name<span >*</span></Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Name"
                        name="pname"
                        value={profile.pname}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Contact No.</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Contact Number"
                        name="mobile"
                        value={profile.mobile}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Email address<span >*</span></Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter your Email address"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Your Designation</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Designation"
                        name="designation"
                        value={profile.designation}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </div>
                </Row>
              </div>

              <h2>Company Details</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />
              <div className="profile-div">
                <Row className="progile-row">
                  <Form className="form-field" onSubmit={handleSave}>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your Comapny Name"
                        name="name"
                        value={company.name}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Company Type</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Select Company Type"
                        name="type"
                        value={company.type}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>About Company</Form.Label>
                      <Form.Control
                        style={{ height: "100%" }}
                        as="textarea"
                        rows={5}
                        placeholder="Write a something about your company"
                        name="about"
                        value={company.about}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Industry</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Selection Industry Type"
                        name="industry"
                        value={company.industry}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3 mt-3">
                      <Form.Label>Company Logo</Form.Label>
                      <Form.Control
                        type="file"
                        placeholder="Selection Industry Type"
                        id="img2"
                        style={{ display: "none" }}
                        name="logo"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <label for="img2" className="upload-logo">
                      <div className="text-center">
                        <img src={company.logo?company.logo:uploadImg} style={{ width: company.logo ? "100px" : "auto" }}/>
                        <p>{company.logo?"Update logo":logoImg}</p>
                      </div>
                    </label>
                    <p>Logo must be jpg,png at a minimum of 120*120</p>
                    <div>
                      <button className="save-btn" type="submit">
                        Save
                      {loader ? (
                        <Spinner animation="border" variant="light" />
                      ) : (
                        ""
                      )}
                      </button>
                      
                    
                    </div>
                  </Form>
                </Row>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default MyProfile;
