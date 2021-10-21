import React ,{useContext}from 'react'
import { NavLink } from 'react-router-dom'
import styled from "styled-components"
import { AuthContext } from "../AuthContext";

const NAVBAR = styled.div`
display:flex;
justify-content: space-around;
background-color: #49018c;
padding: 10px;

.navbar-text{
    cursor: pointer;
    color: whitesmoke;
    font-size:22px;
    text-decoration: none;
}
`;
export default function Navbar() {
  
  const { isAuth } = useContext(AuthContext);
    return (
      <div>
        <NAVBAR>
          <div>
            <NavLink to="/register" className="navbar-text">
              SIGN UP
            </NavLink>
          </div>

          <div>
            <NavLink to="/" className="navbar-text">
              EDSTEM
            </NavLink>
          </div>
          <div>
            <NavLink to="/login" className="navbar-text">
              {!isAuth ? "Login" : "Logout"}
            </NavLink>
          </div>
        </NAVBAR>
      </div>
    );
}
