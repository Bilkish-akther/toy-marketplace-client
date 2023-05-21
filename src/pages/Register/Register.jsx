/*eslint-disable no-unused-vars */
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faImage,
  faLock,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import signUpLottie from "../../assets/signUp.json";
import { AuthContext } from "../../component/providers/AuthProvider";
import "../SocialLoginBtn/SocialLoginBtn.css";
import "./Register.css";
const Register = () => {
  const [control, setControl] = useState(false);
  const [error, setError] = useState("");
  const {
    createUser,
    updateProfileUser,
    logOut,
    signIn,
    googleLogin,
    githubLogIn,
    setTitle
  } = useContext(AuthContext);

  setTitle("Register")

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const image = form.image.value;
    const name = form.name.value;
    const password = form.password.value;
    console.log(email, password);

    setError("");
    console.log("hell");
    if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
      console.log("okay tikh ace ");
    } else {
      setError("password tikh nai");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateProfileUser(name, image)
          .then(() => {
            logOut();
            signIn(email, password)
              .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
              })
              .catch((error) => {
                console.log(error);
                setError(error.message);
              });
          })
          .catch((error) => {
            console.log("not Update");
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogIn()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-6">
            <Lottie animationData={signUpLottie} />
          </div>
          <div className="col-md-6 p-3">
            <div className="border w-100 m-auto text-center px-5 py-2 rounded">
              <p className="text-danger">{error}</p>
              <form onSubmit={handleRegister}>
                <h3 className="signUpHeader">Join with us</h3>
                <InputGroup className="mb-1">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faUserCircle} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Input your name"
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faImage} />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="image"
                    placeholder="Input photo Url"
                    required
                  />
                </InputGroup>

                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Input your email"
                    required
                  />
                </InputGroup>

                {/* --password-- */}
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faLock} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Your Password"
                    aria-label="Password"
                    name="password"
                    aria-describedby="basic-addon1"
                    type={control ? "password" : "text"}
                  />
                  <InputGroup.Text>
                    <IconButton onClick={() => setControl(!control)}>
                      <FontAwesomeIcon
                        size="xs"
                        icon={control ? faEyeSlash : faEye}
                      />
                    </IconButton>
                  </InputGroup.Text>
                </InputGroup>

                <div className="loginBtn">
                  <Button variant="success" type="submit">
                    Register
                  </Button>
                </div>

                <div className="signUpText">
                  <p>
                    already have account? <Link to="/login">Login here..</Link>
                  </p>
                </div>

                {/* socialLogin */}
                <div className="d-inline-flex">
                  <hr
                    style={{
                      color: "goldenrod",
                      height: 1,
                      width: 200,
                    }}
                  />
                  <p className="px-3 ">OR</p>
                  <hr
                    style={{
                      color: "goldenrod",
                      height: 1,
                      width: 200,
                    }}
                  />
                </div>
                <div>
                  <img
                    onClick={handleGoogleLogin}
                    className="social-button rounded"
                    src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    onClick={handleGithubLogin}
                    className=" social-button rounded"
                    src="https://i.ibb.co/g9f4P0S/github-btn.png"
                    alt=""
                  />
                </div>
                {/* old-UI */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
