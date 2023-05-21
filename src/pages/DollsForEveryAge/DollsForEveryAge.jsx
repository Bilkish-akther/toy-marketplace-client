import React from "react";
import "./DollsForEveryAge.css";

const DollsForEveryAge = () => {
  return (
    <div>
      <h1 className="text-center mt-5 title">Dolls For Every Age</h1>
      <div className="d-flex gap-5 mt-5 items-center me-5 cardCenter1 ">
        <div data-aos="flip-left">
          <img
            className=" DollsDiv"
            src="https://i.ibb.co/KwbBFH2/img3.png"
            alt=""
          />
          <div className="text-center mt-3">
            <p>Doll Name: Girl of Year</p>
            <p>For Age 8+</p>
            <p>Inspirational girls today World </p>
          </div>
        </div>

        <div data-aos="flip-left">
          <img
            className=" DollsDiv"
            src="https://i.ibb.co/yVF3n0d/img6.png"
            alt=""
          />
          <div className="text-center mt-3">
            <p>Doll Name:Teady Doll </p>
            <p>For Age 8+</p>
            <p>Inspirational girls today World </p>
          </div>
        </div>
        <div data-aos="flip-left">
          <img
            className=" DollsDiv"
            src="https://i.ibb.co/26BwfFV/img5.png"
            alt=""
          />
          <div className="text-center mt-3">
            <div className="text-center mt-3">
              <p>Doll Name: Mini Doll</p>
              <p>For Age 6+</p>
              <p>Inspirational girls today World </p>
            </div>
          </div>
        </div>
        <div data-aos="flip-left">
          <img
            className=" DollsDiv"
            src="https://i.ibb.co/2PVyT3Q/img4.jpg"
            alt=""
          />
          <div className="text-center mt-3">
            <p>Doll Name: Girl of Year</p>
            <p>For Age 8+</p>
            <p>Inspirational girls today World </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DollsForEveryAge;
