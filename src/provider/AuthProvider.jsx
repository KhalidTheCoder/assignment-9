import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [balance, setBalance] = useState(() => {
    const stored = localStorage.getItem("balance");
    return stored ? parseFloat(stored) : 10000;
  });

  useEffect(() => {
    localStorage.setItem("balance", balance);
  }, [balance]);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        alert("Sign-out successful.");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const reduceBalance = (amount) => {
    setBalance((prev) => prev - amount);
  };

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    loading,
    setLoading,
    balance,
    reduceBalance,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
