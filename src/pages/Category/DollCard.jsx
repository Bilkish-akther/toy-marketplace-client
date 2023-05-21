import React from "react";
import "./DollCard.css";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DollCard = ({ doll }) => {

  const navigator = useNavigate();
  const handleViewToyDetails = (toy) => {
    console.log(toy);
    navigator(`/toyDetails/${toy._id}`);
  };


  return (
    <div className="SizeCard">
      <div className="dollCard">
        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            <img src={doll.toyUrl} />
          </div>
          <div className="wsk-cp-text">
            <h3 className="mt-10 NamePading">Name:{doll.toyName}</h3>

            <div className="description-prod"></div>
            <div className="footer-div">
              <div className="card-footer">
                <p className="price">${doll.price}</p>
                <p>Rating:{doll.rating} </p>
              </div>
              <div className="view-details-button">
                <Button onClick={() => handleViewToyDetails(doll)}>View Details</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DollCard;

{
  /* <div classNameNameName='dollContainer'>
<img classNameNameName='dollCardImage' src={doll.toyUrl}/>  <br />
  <h3>{doll.toyName}</h3>
  <p>{doll.price}</p>
  <button >View Details</button>

</div> */
}
