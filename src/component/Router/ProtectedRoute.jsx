/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("Under Protect Route");

  const navigateRoute = location.state?.from?.pathname || "/";
  console.log("user " + navigateRoute);

  if (loading) {
    return children;
  }

  if (user) {
    return <Navigate to={navigateRoute} replace></Navigate>;
  } else {
    return children;
  }

  //   return <Navigate to="/" replace></Navigate>;
};

export default ProtectedRoute;
