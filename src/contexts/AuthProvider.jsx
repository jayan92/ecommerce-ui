// Import necessary dependencies from React and Firebase
import React, { createContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Create a context for authentication
export const AuthContext = createContext();

// Initialize Firebase Authentication and Google Auth Provider
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Define the AuthProvider component that will wrap the entire application
const AuthProvider = ({ children }) => {
  // State to store user information and loading status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to create a new user with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Function to sign up with Google
  const signUpWithGmail = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Function to log in with email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Function to log out
  const logout = () => {
    // Clear any locally stored tokens
    localStorage.removeItem("cart");
    // Sign out using Firebase Authentication
    return signOut(auth);
  };

  // useEffect hook to listen for changes in authentication state
  useEffect(() => {
    // Subscribe to the authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // Update the user state and set loading to false
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return () => {
      return unsubscribe();
    };
  }, []);

  // Object containing authentication-related information and functions
  const authInfo = {
    user,
    loading,
    createUser,
    login,
    logout,
    signUpWithGmail,
  };

  // Provide the AuthContext to the entire application
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

// Export the AuthProvider component as the default export
export default AuthProvider;
