import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import axios from "axios";
import LoadingBox from "./LoadingBox";
import MessageBox from "./MessageBox";
import { Link } from "react-router-dom";
import {
  branchName,
  collegeName,
  batchCode,
  knowAbout,
  tshirtSizeValue,
} from "./constant";

export default function Registration() {
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmPass, setConfirmPass] = useState();
  const [name, setName] = useState();
  const [gender, setGender] = useState();
  const [college, setCollege] = useState();
  const [branch, setBranch] = useState();
  const [rollNo, setRollNo] = useState();
  const [batch, setBatch] = useState();
  const [know, setKnow] = useState();
  const [isAccommodation, setIsAccommodation] = useState();
  const [tshirtSize, setTshirtSize] = useState();
  const [paymentMode, setPaymentMode] = useState();
  const [caCode, setCaCode] = useState();
  const [transactionId, setTransactionId] = useState();
  const [receipt, setReceipt] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [techmitiId, setTechmitiId] = useState();
  const [givenCollegeName, setGivenCollegeName] = useState();
  const [OtherCollegeName, setOtherCollegeName] = useState();

  const onPaymentModeChange = ({ target: { value } }) => {
    setPaymentMode(value);
  };
  
  const allFill = () => {
    return (
      email &&
      phone &&
      name &&
      gender &&
      college &&
      branch &&
      rollNo &&
      batch &&
      know &&
      isAccommodation &&
      tshirtSize &&
      paymentMode &&
      password === confirmPass
    );
  };
  useEffect(() => {
    if(givenCollegeName === 'other'){
      setCollege(OtherCollegeName)
    } else {
      setCollege(givenCollegeName)
    }
  }, [OtherCollegeName, givenCollegeName])
  const submitHandler = async (e) => {
    e.preventDefault();
    
    // console.log(email,
    //         phone,
    //         password,
    //         name,
    //         gender,
    //         college,
    //         branch,
    //         rollNo,
    //         batch,
    //         know,
    //         isAccommodation,
    //         tshirtSize,
    //         paymentMode,
    //         caCode,
    //         transactionId,
    //         receipt,);
    setLoading(true);
    try {
       const {data} = await axios.post(
        "/api/user/create",
        {
          email,
          phone,
          password,
          name,
          gender,
          college,
          branch,
          rollNo,
          batch,
          know,
          isAccommodation,
          tshirtSize,
          paymentMode,
          caCode,
          transactionId,
          receipt,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
        setTechmitiId(data.data.techmitiId);
      setLoading(false);
      setSuccess(true);
    } catch (err) {
      setLoading(false);
      setError(err.response.data.message);
    }
  };
  const validateEmail = (e) => {
    if (e.target.value) {
      const email = e.target.value;
      const atPos = email.indexOf("@");
      const domain = email.split("@")[1];
      const validDomain = [
        "gmail.com",
        "yahoo.com",
        "hotmail.com",
        "live.com",
        "outlook.com",
        "mail.com",
      ];
      if (atPos > 1 && validDomain.includes(domain)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        document.getElementById("regSubmit").disabled = false;
        setEmail(e.target.value);
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");

        document.getElementById("regSubmit").disabled = true;
      }
    }
  };
  const validateMobile = (e) => {
    if (e.target.value) {
      const pattern = /^[6-9]\d{9}$/;
      if (pattern.test(e.target.value)) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        document.getElementById("regSubmit").disabled = false;
        setPhone(e.target.value);
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");

        document.getElementById("regSubmit").disabled = true;
      }
    }
  };
  const validatePassword = (e) => {
    if (e.target.value) {
      if (password === e.target.value) {
        e.target.classList.remove("is-invalid");
        e.target.classList.add("is-valid");
        setConfirmPass(e.target.value)
      } else {
        e.target.classList.remove("is-valid");
        e.target.classList.add("is-invalid");
      }
    }
  }
  const validateFile = (e) => {
    var file = e.target.files[0];
    if (file && (file.size / 1024 / 1024) < 2) {
      setReceipt(file);
    } else {
      window.alert('file size should be less than 5 mb');
      e.target.value = '';

    }
  }

  return (
    <div className="applyscreen">
{/* <LoadingBox></LoadingBox> */}
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : success ? (
        <MessageBox variant="success">
          Congratulations, your application has been successfully processed, and you have been assigned a TechMITi'23 ID:{techmitiId}. Please note that it may take up to 24 hours for your payment to be verified by the organizers. Once your payment is verified, you will be able to register for events. If you have any questions or concerns about the event, please contact the organizers directly.<br /> Visit your profile   <Link to="/login">Log In</Link>
        </MessageBox>
      ) : (
        <Container className="small-container">
          <h1 style={{ textAlign: 'center', paddingBottom: '2rem',color:'pink' }}>TechMITi'23 Registration</h1>
          {/* <h1 style={{ textAlign: 'center', paddingBottom: '2rem' }}></h1> */}
          <MessageBox>For all your queries, feel free to contact:<br />
            Sudhanshu - 7004262534 <br />
            Satyendra - 7050552982<br />
            Aman Satyam - 8102845664
            
            </MessageBox>
          <MessageBox>Remember your password to avoid password recovery hassle and protect your account.</MessageBox>
          <Form encType="multipart/form-data" onSubmit={submitHandler}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email*</Form.Label>
                <Form.Control
                  className="email"
                  type="email"
                  placeholder="Enter email"
                  required
                  onChange={(e) => validateEmail(e)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Mobile No.*</Form.Label>
                <InputGroup>
                  <InputGroup.Text>+91</InputGroup.Text>
                  <Form.Control
                    className="phone"
                    type="number"
                    placeholder="Mobile No."
                    required
                    onChange={(e) => validateMobile(e)}
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password*</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridConfirmPass">
                <Form.Label>Confirm Password*</Form.Label>
                <Form.Control
                  className="pass"
                  type="password"
                  placeholder="Confirm Password"
                  required
                  onChange={(e) => validatePassword(e)}
                />
              </Form.Group>

            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Full Name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Full Name"
                  required
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>Gender*</Form.Label>
                <div key="inline-radio" className="mt-2">
                  <Form.Check
                    inline
                    label="Male"
                    name="gender"
                    value="male"
                    type="radio"
                    id="inline-radio-1"
                    required
                    checked={gender === "male"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="Female"
                    name="gender"
                    value="female"
                    type="radio"
                    id="inline-radio-2"
                    required
                    checked={gender === "female"}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridCollege">
                <Form.Label>College*</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => setGivenCollegeName(e.target.value)}
                >
                  <option>Select One</option>
                  {collegeName.sort((a, b) => a.college.localeCompare(b.college)).map((item) => (
                    <option value={`${item.value}`}>{item.college}</option>
                  ))}
                  <option value='other'>other</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridBranch">
                <Form.Label>Branch*</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option>Select One</option>
                  {branchName.sort((a, b) => a.branch.localeCompare(b.branch)).map((item) => (
                    <option value={`${item.value}`}>{item.branch}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>
            {givenCollegeName && givenCollegeName === 'other' && 
            <Row className="mb-3">
            <Form.Group  controlId="formGridName">
                <Form.Label>Enter college name*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="college name"
                  required
                  onChange={(e) => setOtherCollegeName(e.target.value)}
                />
              </Form.Group>
            </Row>}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridRoll">
                <Form.Label>College Roll No.*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Roll Number"
                  required
                  onChange={(e) => setRollNo(e.target.value)}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridBatch">
                <Form.Label>Batch*</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => setBatch(e.target.value)}
                >
                  <option>Select One</option>
                  {batchCode.map((item) => (
                    <option value={`${item.value}`}>{item.batch}</option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridknow">
                <Form.Label>
                  How did you come to know about TechMITi'23?*
                </Form.Label>
                <Form.Select required onChange={(e) => setKnow(e.target.value)}>
                  <option>Select One</option>
                  {knowAbout.map((item) => (
                    <option value={`${item.value}`}>{item.know}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>Do you need Accommodation?*</Form.Label>
                <div key="inline-radio" className="mt-4">
                  <Form.Check
                    inline
                    label="Yes"
                    value="yes"
                    name="group1"
                    type="radio"
                    id="inline-radio-1"
                    required
                    checked={isAccommodation === "yes"}
                    onChange={(e) => setIsAccommodation(e.target.value)}
                  />
                  <Form.Check
                    inline
                    label="No"
                    value="no"
                    name="group1"
                    type="radio"
                    id="inline-radio-2"
                    required
                    checked={isAccommodation === "no"}
                    onChange={(e) => setIsAccommodation(e.target.value)}
                  />
                </div>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridTshirt">
                <Form.Label>Yours T-shirt size?*</Form.Label>
                <Form.Select
                  required
                  onChange={(e) => setTshirtSize(e.target.value)}
                >
                  <option>Select One</option>
                  {tshirtSizeValue.map((item) => (
                    <option value={`${item}`}>{item}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGender">
                <Form.Label>Payment Method*</Form.Label>
                <div className="mt-1">
                  <Form.Check
                    label="Through Campus Ambassador"
                    name="paymentMode"
                    type="radio"
                    value="ca"
                    id="default-radio-1"
                    checked={paymentMode === "ca"}
                    required
                    onChange={onPaymentModeChange}
                  />
                  <Form.Check
                    label="Through Bank Account"
                    name="paymentMode"
                    type="radio"
                    value="bank"
                    id="default-radio-2"
                    checked={paymentMode === "bank"}
                    required
                    onChange={onPaymentModeChange}
                  />
                </div>
              </Form.Group>
            </Row>
            {paymentMode && paymentMode === "ca" && (
              <div>
                <h3>
                  <u>Campus Ambassador</u>
                </h3>
                <MessageBox>
                  Participants can pay registration fee of Rs 1000/- to Campus
                  Ambassador of their college.
                </MessageBox>
                <Form.Group controlId="formGridRoll" className="mt-5 mb-3">
                  <Form.Label>Campus Ambassador TechMITi Code*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CA TechMITi Code"
                    required
                    onChange={(e) => setCaCode(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Screenshot of Payment(less than 2 mb)*</Form.Label>
                  <Form.Control
                    type="file"
                    name='receipt'
                    required
                    onChange={(e) => validateFile(e)}
                  />
                </Form.Group>
              </div>
            )}
            {paymentMode && paymentMode === "bank" && (
              <div>
                <h3>
                  <u>Bank Account</u>
                </h3>
                <MessageBox>
                  Participants can pay registration fee of Rs 1000/- on
                  following bank account and upload the screenshot of payment:
                </MessageBox>

                <h4>Bank Details of Moxie:</h4>
                <p>
                  A/c no 3642274255 <br /> A/c Holder - MOXIE TECHNICAL CLUB MIT
                  MUZAFFARPUR <br />
                  IFSC code - CBIN0282034
                  <br /> Bank - Central Bank of India
                  <br /> Branch - Jhuran Chapra, Muzaffarpur (BH)
                </p>
                <Form.Group controlId="formGridRoll" className="mt-5 mb-3">
                  <Form.Label>Campus Ambassador TechMITi Code</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="CA TechMITi Code"
                    onChange={(e) => setCaCode(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Screenshot of Payment(less than 2 mb)*</Form.Label>
                  <Form.Control
                    type="file"
                    name='receipt'
                    required
                    onChange={(e) => validateFile(e)}
                  />
                </Form.Group>
                <Form.Group controlId="formGridRoll">
                  <Form.Label>Transaction ID*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Transaction ID"
                    required
                    onChange={(e) => setTransactionId(e.target.value)}
                  />
                </Form.Group>
              </div>
            )}
            <Button
              className="my-5"
              variant="primary"
              type="submit"
              id="regSubmit"
              disabled={!allFill()}
              style={{ width: "40%" }}
            >
              Apply
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
}
