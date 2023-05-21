/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../component/providers/AuthProvider.jsx";
import './AddToy.css'
import { useLocation, useParams } from "react-router-dom";

const AddToy = () => {
  const { user,setTitle } = useContext(AuthContext);
  setTitle("AddToy")
  const location = useLocation();
  console.log(location);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.rating = "0.0";
    data.sellerName = user.displayName;
    data.sellerEmail = user.email;
    console.log(data);

      fetch("http://localhost:5000/post-toy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      console.log(data);
  };

  return (
    <div className="add-job-container">
      <div className="add-job row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              className="text-input"
              {...register("toyName")}
              placeholder="Toy Name"
              required
            />
            <br />
            <input
              className="text-input"
              {...register("toyUrl")}
              placeholder="Toy Image url"
              required
            />
            <br />
            <input
              className="text-input"
              {...register("price")}
              placeholder="price"
              required
            />
            <br />
            <input
              className="text-input"
              {...register("quantity")}
              placeholder="Available quantity"
              required
            />
            <br />

            <input
              className="text-input"
              {...register("description")}
              placeholder="description"
              required
            />
            <br />
            <select className="text-input" {...register("subCategory")}>
              <option value="Baby Bolls">Baby Boll</option>
              <option value="Barbie">Barbie</option>
              <option value="American girl">American girl</option>
            </select>

            <br />
            <input className="submit-btn" value="Add Toy" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddToy;
