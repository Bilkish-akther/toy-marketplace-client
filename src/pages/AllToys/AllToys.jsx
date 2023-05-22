import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../component/providers/AuthProvider";
import { Button, Table } from "react-bootstrap";
import "./AllToys.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

const AllToys = () => {
  const { toys, setTitle, setDescending, descending } = useContext(AuthContext);
  var [searchToys, setSearchToys] = useState(toys);
 
  setTitle("All Toys");
  const navigator = useNavigate();

  console.log(toys);

  const handleViewToyDetails = (toy) => {
    console.log(toy);
    navigator(`/toyDetails/${toy._id}`);
  };
  // handleSearch
  const handleSearch = (searchText) => {
    console.log(searchText);

    var searchToys = toys.filter((toy) => {
      return toy.toyName.toLowerCase().includes(searchText.toLowerCase());
    });
    setSearchToys(searchToys);
  };
  const handleSorting = () => {
    setDescending(!descending);
  };


  return (
    <div>
      {/* search Button */}

      <div className="searchButton">
        <input
          placeholder="Search Your Product"
          type="search"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button className="p-2">Search</Button>
      </div>
      <button className="iconCenter">
        <FontAwesomeIcon icon={faSort} onClick={handleSorting} size="3x" />
      </button>
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
          {searchToys?.map((toy, index) => (
            <tr key={toy._id}>
              <td>{toy.sellerName}</td>
              <td>{toy.toyName}</td>
              <td>{toy.subCategory}</td>
              <td>{toy.price}</td>
              <td>{toy.quantity}</td>

              <td>
                <Button
                  onClick={() => handleViewToyDetails(toy)}
                  variant="success"
                >
                  View Details
                </Button>
                
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AllToys;
