/*eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { useState } from "react";
import "./SocialLoginBtn.css";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../component/providers/AuthProvider";

const SocialLoginBtn = () => {
  const { googleLogin,githubLogIn } = useContext(AuthContext);

  const handleGoogleLogin=()=>{
    googleLogin().then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
  })
  .catch(error => {
      console.log(error);
      
  })
  }


  const handleGithubLogin = () => {
    githubLogIn().then(result => {
      const loggedUser = result.user;
      console.log(loggedUser)
  })
  .catch(error => {
      console.log(error);
      
  })
  };
  return (
    <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
          onClick={handleGoogleLogin}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
          onClick={handleGithubLogin}
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLoginBtn;
