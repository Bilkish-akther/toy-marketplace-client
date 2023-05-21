import Blog from "../../pages/Blog/Blog.jsx";
import Header from "../../pages/Header/Header.jsx";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
// import { HashLoader } from "react-spinners";
import Lottie from "lottie-react";
import loading from "../../assets/loading_animation.json";
import ErrorPage from "../../pages/ErrorPage/ErrorPage.jsx";
import Login from "../../pages/Login/Login.jsx";
import Register from "../../pages/Register/Register.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import PrivateRoute from "./privaect_route";
import AddToy from "../../pages/AddToy/AddToy.jsx";
import AllToys from "../../pages/AllToys/AllToys.jsx";
import MyToys from "../../pages/MyToys/MyToys.jsx";
import ToyDetails from "../../pages/ToyDetails/ToyDetails.jsx";
import UpdateToy from "../../pages/UpdateToy/UpdateToy.jsx";

const HomeData = React.lazy(() => import("../../pages/Home/Home.jsx"));

const HomeComponent = () => (
  <div>
    <Suspense
      fallback={
        <div className="loading-container">
          <Lottie animationData={loading} />
        </div>
      }
    >
      <HomeData />
    </Suspense>
  </div>
);

const router = createBrowserRouter([
  {
    loader: () =>
      fetch(
        "https://bangladeshi-foods-recipe-server-jy589pije-bilkish-akther.vercel.app/recipe"
      ),
    path: "/",
    element: <Header></Header>,
    children: [
      {
        path: "/",
        element: <HomeComponent></HomeComponent>,
      },
      {
        path: "/addtoy",
        element: <AddToy></AddToy>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },

      {
        path: "/login",
        element: (
          <ProtectedRoute>
            <Login></Login>
          </ProtectedRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <ProtectedRoute>
            <Register></Register>
          </ProtectedRoute>
        ),
      },
      {
        path: "/updateToy",
        element: (
          <PrivateRoute>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/toyDetails/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
