/* eslint-disable react/prop-types */
/*eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";
import { AuthContext } from "../../component/providers/AuthProvider";

const ErrorPage = () => {
  
  const {setTitle } = useContext(AuthContext);
  setTitle("404")
  return (
    <div className="py-48 px-48 text-center">
      <div className="ErrorPageDesign text-9xl  ">
        <h1>404 </h1>
        <img  className=" h-50 w-50" src="https://i.ibb.co/XF5GFK5/depositphotos-127336196-stock-photo-signpost-with-error-sign.jpg" alt="" />
      </div>
      <p className=" text-xl">We are sorry, but the page you are looking for cannot be found.</p>
     <div className="  mt-6">
     <Link
        to="/"
        className="px-4 py-3 font-semibold rounded bg-cyan-200 text-gray-900 mt-6"
      >
        Back to Homepage
      </Link>

     </div>
    </div>
  );
};

export default ErrorPage;
