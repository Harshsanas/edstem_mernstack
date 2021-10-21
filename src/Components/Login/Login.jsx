import React,{useState} from 'react'
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
    margin:10px 70px;
  }

  button:hover {
    background-color: #49018c;
    color: whitesmoke;
  }
`;


export default function Login() {
    
    const [loginForm, setLoginForm] = useState({});

    const handleChange = (e) => {
      const { name, value } = e.target;
      let payload = {
        ...loginForm,
        [name]: value,
      };
      setLoginForm(payload);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(loginForm);
    };

    return (
      <div>
        <FORMDATA>
          <h1>LOGIN</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">EMAIL</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                id="email"
              />
            </div>
            <div>
              <label htmlFor="Password">PASSWORD</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                id="password"
              />
            </div>

            <button type="submit">LOGIN</button>
          </form>
        </FORMDATA>
      </div>
    );
}
