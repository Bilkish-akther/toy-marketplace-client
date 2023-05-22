/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../component/providers/AuthProvider.jsx";
import "../AddToy/AddToy.css";
import Alert from "react-bootstrap/Alert";
import ApiBaseUrl from "../../component/app_const/server_info.jsx";
import './UpdateToy.css';

const UpdateToy = () => {
  const { selectToy, setUpdate } = useContext(AuthContext);
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onUpdate = (data) => {
    console.log(data);
    fetch(`${ApiBaseUrl}/updateToy/${selectToy._id}`, {
   
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        setUpdate(`update +${Math.random() * 10000000}`);
        console.log(result);
        setShow(true);
      });
    console.log(data);
  };

  return (
    <div className="update-toy-container">
      <Alert show={show} variant="success">
        <Alert.Heading>Update Success!</Alert.Heading>
        <p>
          Your Product Information Update Successfully.Please Check On My Product to Information!!
        </p>
      </Alert>

      <div className="update-form-div">
      <form onSubmit={handleSubmit(onUpdate)}>
        {errors.exampleRequired && <span>This field is required</span>}

        <br />
        <input
          className="text-input"
          {...register("price")}
          placeholder="price"
          defaultValue={selectToy.price}
          required
        />
        <br />
        <input
          className="text-input"
          {...register("quantity")}
          placeholder="Available quantity"
          defaultValue={selectToy.quantity}
          required
        />
        <br />

        <textarea
          className="text-input"
          {...register("description")}
          placeholder="description"
          defaultValue={selectToy.description}
          required
        />
        <br />
        <input className="submit-btn" value="Update Toy" type="submit" />
      </form>
      </div>
    </div>
  );
};

export default UpdateToy;
