import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import { AuthContext } from "../AuthContext";

import styled from "styled-components";

const FORMDATA = styled.div`
  margin: auto;
  width: 300px;

  input {
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid grey;
    height: 25px;
    width: 250px;
    margin: 5px;
  }
  label {
    margin-left: 5px;
  }

  button {
    width: 130px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid #49018c;
    cursor: pointer;
    margin: 10px 70px;
  }

  button:hover {
    background-color: #49018c;
    color: whitesmoke;
  }
`;

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const { isAuth, handleLoginAuth } = useContext(AuthContext);

  const handleLogin = () => {
    handleLoginAuth(user, pass);
    // ToggleAuth();
  };
  console.log(handleLoginAuth);
  return !isAuth ? (
    <div>
      <FORMDATA>
      <h1>LOGIN PAGE</h1>
        <label>USERNAME </label>
        <input
          onChange={(e) => setUser(e.target.value)}
          type="text"
          placeholder="USERNAME"
        />
        <br />
        <label>PASSWORD  </label>
        <input
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="PASSWORD"
        />{" "}
        <br />
        <br />
        <button onClick={handleLogin}>{isAuth ? "LOGOUT" : "LOGIN"}</button>
      </FORMDATA>
    </div>
  ) : (
    <Redirect to="/" />
  );
}
