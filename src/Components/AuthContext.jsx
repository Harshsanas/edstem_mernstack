import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const [userData,setUserData]=useState({});

    useEffect(() => {
      axios
        .get("http://localhost:3033/form")
        .then((res) => {
          console.log(res)
          setUserData(res.data.forms);
        })
        .catch((err) => {
          console.error(err);
        });
    },[]);
  const handleLoginAuth = (user, pass) => {
    if (user === "admin" && pass === "admin") {
      setIsAuth(true);
      alert("login successfull");
    } else {
      alert("Please enter correct details");
    }
  };

  const ToggleAuth = () => {
    setIsAuth((el) => !el);
  };

  const value = { isAuth, setIsAuth, handleLoginAuth, ToggleAuth };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
