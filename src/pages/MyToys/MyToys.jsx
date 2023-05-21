import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../component/providers/AuthProvider";
import Doll from "../Doll/Doll";
import { Button, Modal, Table } from "react-bootstrap";
import "./MyToys.css";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import { useLocation, useNavigate } from "react-router-dom";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'

const MyToys = () => {
  const { toys, setSelectToy, user, setUpdate,setDescending,
    descending ,setTitle} = useContext(AuthContext);
  setTitle("MyToys")
  var [filterToys, setFilterToys] = useState([]);
  var [searchToys, setSearchToys] = useState([]);
  const navigator = useNavigate();
  const [show, setShow] = useState(false);
  const [selectId, setSelectId] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdateDoll = (toy) => {
    setSelectToy(toy);
    navigator(`/updateToy`);
  };

  const showDeleteModal = (id) => {
    setSelectId(id);
    handleShow();
  };
  const handleDelete = () => {
    console.log(selectId);

    fetch(`http://localhost:5000/deleteToy/${selectId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          setUpdate("deleted");
          //alert("deleted successful");
          const remaining = filterToys.filter((toy) => toy._id !== selectId);
          setFilterToys(remaining);
        }
      });
    setShow(false);
  };

  useEffect(() => {
    var toy = toys.filter((t) => t.sellerEmail === user.email);
    setFilterToys(toy);
    setSearchToys(toy)
  }, [toys]);

  // handleSearch
  const handleSearch=(searchText)=>{
    console.log(searchText);
    setSearchToys(filterToys);
   var searchToys=filterToys.filter((toy)=>{
      return (
        toy.toyName.toLowerCase().includes(searchText.toLowerCase())
    );
    })
    setSearchToys(searchToys);
  }
  const handleSorting=()=>{
    setDescending(!descending);
  }
  return (
    <div>
      {/* search Button */}

      <div>
        <input
          placeholder="Search Your Project"
          type="search"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button>Search</Button>
      </div>
      <button><FontAwesomeIcon icon={faSort} onClick={handleSorting} size="3x"/></button>

      {/* // myToy filter */}
      {filterToys.length != 0 ? (
        <Table striped bordered hover className=" mt-5  container">
          <thead>
            <tr className="THeader">
              <th>ToyName</th>
              <th>SubCategory</th>
              <th>Price</th>
              <th>quantity</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {searchToys.map((toy, index) => (
              <tr key={toy._id}>
                <td>{toy.toyName}</td>
                <td>{toy.subCategory}</td>

                <td>{toy.price}</td>
                <td>{toy.quantity}</td>

                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleUpdateDoll(toy)}
                  >
                    Edit
                  </Button>
                  {/* <UpdateJobModal
                  show={modalShow}
                  onHide={() => setModalShow(false)}
                  job={job}
                  //handleJobUpdate={handleJobUpdate}
                /> */}
                </td>
                <td>
                  {" "}
                  <Button
                    variant="warning"
                    onClick={() => showDeleteModal(toy._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h1>No Toys</h1>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>DataBase Warning Alert</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you want to delete Your Product!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Confirm
          </Button>
          <Button variant="success" onClick={handleClose}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyToys;
