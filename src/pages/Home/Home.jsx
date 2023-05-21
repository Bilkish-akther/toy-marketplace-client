/*eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from "react";

import Header from "../Header/Header";
import Banner from "../Banner/Banner";

import "./Home.css";
import { AuthContext } from "../../component/providers/AuthProvider";
import Gallery from "../Gallery/Gallery";
import Category from "../Category/Category";
import DollsForEveryAge from "../DollsForEveryAge/DollsForEveryAge";
import DifferentTypesDoll from "../differentTypesDoll/differentTypesDoll";

const Home = () => {

  const {setTitle } = useContext(AuthContext);
  setTitle("Home")
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Category></Category>
      <DollsForEveryAge></DollsForEveryAge>
      <DifferentTypesDoll></DifferentTypesDoll>
    </div>
  );
};

export default Home;
