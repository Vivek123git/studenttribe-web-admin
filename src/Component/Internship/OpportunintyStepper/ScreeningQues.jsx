import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import {RxCross2} from "react-icons/rx"


const ScreeningQues = ({step , setStep}) => {


  const [registraion, setRegistration] = useState([
    {
      name: "Write a Questions",
      text:""
    },
  ]);
console.log(registraion ,"asdfghj")
  const handleAdd = () => {
    setRegistration([
      ...registraion,
      { name: "Write a Questions",
        text:""
    },
    ]);
  };

  const handleChange=(text,ind)=>{
    const updateText = registraion.map((elem,id)=>{
        if (id===ind){
            return {...elem,text}
        }
        return elem;
        
    })
    setRegistration(updateText)
  }

  const handleContinue=()=>{
    setStep(step+1)
  }

  const handleBack=()=>{
    setStep(step-1)
  }

  const handleCross = (id)=>{
    console.log(id,"id")
    const a =  registraion.filter((curElem,ind)=>ind!==id)
    console.log(a)
    setRegistration(a)

  }

  return (
    <>
      <div className="profile-section">
        <Container>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <div className="profile-form">
              <h2>Screening Questions</h2>
              <hr style={{ border: "1px solid #D9D9D9" }} />

              <div className="profile-div">
                <Row className="w-100">
                  {registraion.map((elem, id) => {
                    console.log(id,"idx")
                    return (
                      <>
                        <Form className=" form-field " key={id}>
                          <Form.Group className="mb-3 mt-3 form-screen" >
                            <div className="d-flex justify-content-between">
                            <Form.Label>{elem.name}</Form.Label>
                            <RxCross2 fontSize={22} onClick={()=>handleCross(id)} style={{cursor:"pointer"}}/>
                            </div>
                            <Form.Control
                              type="text"
                              placeholder=""
                              value={registraion.text}
                              onChange={(e)=>handleChange(e.target.value,id)}
                            />
                          </Form.Group>
                        </Form>
                      </>
                    );
                  })}
                  <h4 style={{ color: "#ce202f" }} onClick={handleAdd}>
                    + Customize question
                  </h4>
                </Row>
              </div>

              <Row className="text-center pb-4 ">
                <Col md={2} className="d-flex align-self-center">
                  <BsArrowLeft style={{ fontSize: "30px",cursor:"pointer" }} onClick={handleBack} />
                </Col>
                <Col style={{ textAlign: "initial" }}>
                  <button className="save-btn">Save and Exit</button>
                </Col>
                <Col style={{ textAlign: "initial" }}>
                  <button className="save-btn" onClick ={handleContinue}>Continue</button>
                </Col>
              </Row>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ScreeningQues;
