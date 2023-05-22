/*eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";
import Banner from "../Banner/Banner";

import "./Home.css";
import { AuthContext } from "../../component/providers/AuthProvider";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";


import AboutUs from "../AboutUs/AboutUs";
import DifferentTypesDoll from "../DifferentTypesDoll/DifferentTypesDoll";

const Home = () => {

  const {setTitle } = useContext(AuthContext);
  setTitle("Home")
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <DifferentTypesDoll></DifferentTypesDoll>
      <AboutUs></AboutUs>
  
    </div>
  );
};

export default Home;
