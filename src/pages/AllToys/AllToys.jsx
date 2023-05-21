import React, { useContext } from "react";
import { AuthContext } from "../../component/providers/AuthProvider";
import Doll from "../Doll/Doll";
import { Button, Table } from "react-bootstrap";
import "./AllToys.css";
import { Link, useNavigate } from "react-router-dom";

const AllToys = () => {
  const { toys,setTitle } = useContext(AuthContext);
  setTitle("All Toys")
  const navigator = useNavigate();

  console.log(toys);

  const handleViewToyDetails = (toy) => {
    console.log(toy);
    navigator(`/toyDetails/${toy._id}`);
  };
  return (
    <Table striped bordered hover className="mt-4 container">
      <thead>
        <tr>
          <th>Seller Name</th>
          <th>ToyName</th>
          <th>SubCategory</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        {toys?.map((toy, index) => (
          <tr key={toy._id}>
            <td>{toy.sellerName}</td>
            <td>{toy.toyName}</td>
            <td>{toy.subCategory}</td>
            <td>{toy.price}</td>
            <td>{toy.quantity}</td>

            <td>

            <Button onClick={() => handleViewToyDetails(toy)} variant="success">
              View Details
              </Button>
              {/* <UpdateJobModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  job={job}
                  //handleJobUpdate={handleJobUpdate}
                /> */}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default AllToys;
