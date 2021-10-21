import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "./AuthContext";

export default function PrivateRoute({ children, path }) {
  const { isAuth } = useContext(AuthContext);

  return isAuth ? (
    <>
      <Route path={path}>{children}</Route>
    </>
  ) : (
    <Redirect to="/login"></Redirect>
  );
}
