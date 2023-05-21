/* eslint-disable no-unused-vars */
// use local storage to manage cart data

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const successToast = (props) =>
    toast.success(props, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  const errorToast = (props) =>
    toast.error(props, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

const addToDb = id => {
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (!quantity) {
        shoppingCart[id] = 1;
        successToast('Recipe Successfully Favorite');
    }
    else {
        errorToast('Recipe Already Favorite');
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const checkIsHave = (id) => {
    var isHaveThere=false;
    let shoppingCart = getShoppingCart();
    // add quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        isHaveThere=true;
    }
    return isHaveThere;
}

const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if (id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart,
    checkIsHave,
    errorToast
}