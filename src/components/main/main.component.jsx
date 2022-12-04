import "../../App.css";
import { useEffect, useState } from "react";
import { Fragment } from "react";
import gambar5 from "../../assets/front-end.gif";
import toast, { Toaster } from "react-hot-toast";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const notifySuccess = () => toast.success("Signed Up");
const notifyFailed = () => toast.error("Please Fill All The Forms!");
const notifyCheckBox = () => toast.error("Agree To Terms & Conditions");
const notifyPassNotMatch = () => toast.error("Password Does Not Match");

const App = () => {
  const [word, setWord] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passRepeat, setPassRepeat] = useState("");
  const validRegex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  useEffect(() => {
    if (
      name.length &&
      email.length &&
      email.match(validRegex) &&
      password.length &&
      passRepeat.length
    ) {
      setWord("Ready to Sign Up ✅");
    } else {
      setWord("*All Fields Required");
    }
    if (
      name.length === 0 &&
      email.length === 0 &&
      email.match(validRegex) &&
      password.length === 0 &&
      passRepeat.length === 0
    ) {
      setWord("*All Fields Required");
    }
  }, [name, email, password, passRepeat, validRegex]);

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
          <MDBContainer className="container m-5">
            <MDBCard
              className="card text-black m-5"
              style={{ borderRadius: "25px", backgroundColor: "##eff2f5  " }}
            >
              <MDBCardBody class="card-body p-1 m-1">
                <MDBRow>
                  <MDBCol
                    // md="10"
                    // lg="6"
                    className="order-1 order-lg-1 d-flex flex-column align-items-center"
                  >
                    <h3 className="">Join Us!</h3>
                    <div className="card-container ">
                      <div className="card h-100 main-card-container bg-light ">
                        <img
                          src={gambar5}
                          class="card-img-top"
                          alt="Fissure in Sandstone"
                        />
                        <div className="card-body d-flex flex-column align-items-center">
                          <h5 className="card-title text-center h1 fw-bold m-2">
                            Become a Member!
                          </h5>

                          <form className="d-flex flex-column align-items-center">
                            {/* first input */}
                            <div className=" d-flex flex-row align-items-center m-3">
                              <MDBIcon fas icon="user me-3" size="lg" />
                              <MDBInput
                                label="Your Name"
                                id="form1"
                                type="text"
                                className=" p-2 form-control-default"
                                value={name}
                                onChange={(event) =>
                                  setName(event.target.value)
                                }
                              />
                            </div>
                            {/* second input */}
                            <div className="d-flex flex-row align-items-center m-3">
                              <MDBIcon fas icon="envelope me-3" size="lg" />
                              <MDBInput
                                label="Your Email"
                                id="form2"
                                type="email"
                                className="p-2 form-control-default"
                                value={email}
                                onChange={(event) =>
                                  setEmail(event.target.value)
                                }
                              />
                            </div>
                            {/* third input */}
                            <div className="d-flex flex-row align-items-center m-3">
                              <MDBIcon fas icon="lock me-3" size="lg" />
                              <MDBInput
                                label="Password"
                                id="form3"
                                type="password"
                                className="p-2 form-control-default"
                                value={password}
                                onChange={(event) =>
                                  setPassword(event.target.value)
                                }
                              />
                            </div>
                            {/* fourth input */}
                            <div className="d-flex flex-row align-items-center m-3">
                              <MDBIcon fas icon="key me-3" size="lg" />
                              <MDBInput
                                label="Repeat Password"
                                id="form4"
                                type="password"
                                className="p-2 form-control-default"
                                value={passRepeat}
                                onChange={(event) =>
                                  setPassRepeat(event.target.value)
                                }
                              />
                            </div>
                            <div className="checkbox-wrapper">
                              <MDBCheckbox
                                name="flexCheck"
                                id="checkbox-1"
                                label="I agree to all the terms and conditions."
                              />
                            </div>
                          </form>
                          <MDBBtn
                            type="button"
                            className="btn btn-primary mt-3"
                            onClick={() => {
                              if (
                                name.length &&
                                // email.length &&
                                email.match(validRegex) &&
                                password.length &&
                                passRepeat.length
                              ) {
                                if (
                                  document.getElementById("checkbox-1").checked
                                ) {
                                  if (password !== passRepeat) {
                                    notifyPassNotMatch();
                                  } else {
                                    notifySuccess();
                                  }
                                } else {
                                  notifyCheckBox();
                                }
                              } else {
                                notifyFailed();
                              }
                            }}
                          >
                            Register
                          </MDBBtn>
                          <Toaster />
                          <Toaster />
                          <h6 className="mt-5">{word}</h6>
                        </div>
                      </div>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </header>
      </div>
    </Fragment>
  );
};

export default App;
