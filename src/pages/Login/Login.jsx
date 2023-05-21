/* eslint-disable react/no-unescaped-entities */
/*eslint-disable no-unused-vars */
import {
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton } from "@mui/material";
import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import groovyWalkAnimation from "../../assets/login.json";
import { AuthContext } from "../../component/providers/AuthProvider";
import { errorToast } from "../../utilities/localStroage";
import "./Login.css";

const Login = () => {
  const [control, setControl] = useState(false);
  const [error, setError] = useState("");

  const { signIn, googleLogin, githubLogIn, setLoading ,setTitle} =
    useContext(AuthContext);
  setTitle("Login")
  const handleSignUp = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, confirm);

    setError("");

    if (password.length < 6) {
      setError("Password must be 6(Six) characters or longer");
      return;
    }

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);

        errorToast(
          error.message == "Firebase: Error (auth/user-not-found)."
            ? "Your Are Not Register"
            : "Password & Email Not Match"
        );
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
      <div className="loginBody">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-md-6">
            <Lottie animationData={groovyWalkAnimation} />
          </div>
          <div className="col-md-6 ">
            <div className="border w-100 m-auto text-center px-5 py-3 rounded">
              <form onSubmit={handleSignUp}>
                <h3 className="loginHeader">Let's you in</h3>
                <InputGroup className="mb-3">
                  <InputGroup.Text>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Enter Email Address"
                    aria-label="Username"
                    name="email"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
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
                <p className="text-error">{error}</p>
                <div className="loginBtn">
                  <Button variant="warning" type="submit">
                    LogIn
                  </Button>
                </div>

                <div className="signUpText">
                  <p>
                    Are you new? <Link to="/register">Register here..</Link>
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

                {/* old ui */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
