import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

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
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...auth.currentUser, displayName: name, photoURL: photo });
        toast.success("Profile updated successfully!");
      })
      .catch((error) => {
        toast.error("Update failed: " + error.message);
        throw error;
      });
  };

  const handleForgetPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset email sent! Check your inbox or spam folder.", {
          duration: 5000,
        });
      })
      .catch((error) => {
        toast.error("Password reset failed: " + error.message);
      });
  };

  const logOut = () => {
    return signOut(auth)
      .then(() => {
        toast.success("Signed Out Successfully");
      })
      .catch((error) => {
        toast.error("Sign out failed: " + error.message);
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

  const clearLocalStorage = () => {
    localStorage.clear();
    setBalance(10000);
  };

  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    googleSignIn,
    updateUserProfile,
    logOut,
    handleForgetPassword,
    loading,
    setLoading,
    balance,
    reduceBalance,
    clearLocalStorage,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
