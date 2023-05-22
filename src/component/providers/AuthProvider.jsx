/* eslint-disable react/prop-types */
/*eslint-disable no-unused-vars */
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import Api from "../app_const/server_info";
import ApiBaseUrl from "../app_const/server_info";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("Home");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  //dynamic title
  useEffect(() => {
    document.title = "Doll FD | "+title;
  }, [title]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  //updateProfile
  const updateProfileUser = async (userName, imageUrl) => {
    console.log("userName" + userName + "URL" + imageUrl);
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: imageUrl,
    });
  };

  // observer user auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // stop observing while unmounting
    return () => {
      return unsubscribe();
    };
  }, []);

  var [isUpdate,setUpdate]=useState('');
  var [descending,setDescending]=useState(true);
// b7a11-toy-marketplace-server-side-mufizul27-5em3l23qt-p-hero.vercel.app/${toysList}
  var [toys, setToy] = useState([]);
  useEffect(() => {
    fetch(`${ApiBaseUrl}/toysList`)
      .then((res) => res.json())
      .then((data) => setToy(data.sort((a, b) =>descending? (b.price - a.price):(a.price - b.price))));
  }, [isUpdate,descending]);

  var [selectToy,setSelectToy]=useState({});

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    googleLogin,
    githubLogIn,
    updateProfileUser,
    setUser,
    setLoading,
    toys,
    selectToy,
    setSelectToy,
    setUpdate,
    setDescending,
    descending,
    setTitle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
