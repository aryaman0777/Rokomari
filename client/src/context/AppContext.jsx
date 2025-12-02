import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  axios.defaults.withCredentials = true;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);

  //Check JWT Authentication
  const getAuthState = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/auth/userAuth",
        { withCredentials: true }
      );

      if (data.success) {
        setIsLoggedin(true);
        getUserData();
      } else {
        setIsLoggedin(false);
        setUserData(null);
      }
    } catch (error) {
      
      setIsLoggedin(false);
      setUserData(null);
    }
  };

  //Fetch Logged-in User Data
  const getUserData = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/user/data",
        { withCredentials: true }
      );

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Failed to load user data");
    }
  };

  // Auto run on app load
  useEffect(() => {
    getAuthState();
  }, []);

  const value = {
    backendUrl,
    isLoggedin,
    setIsLoggedin,
    userData,
    setUserData,
    getUserData,
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
};
