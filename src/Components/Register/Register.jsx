import axios from 'axios';
import React, { useState } from 'react'
import styled from "styled-components"

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

export default function Register() {

    const [form, setForm] = useState({});

    const handleChange=(e)=>{
        const{name, value} =e.target;
        let payload={
            ...form,
            [name]:value,
        }
        setForm(payload)
    }

    const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(form)
    axios
      .post("http://localhost:3033/form", form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    return (
      <div>
        <FORMDATA>
          <h1>REGISTERATION</h1>

          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">FIRST NAME</label>
              <input
                type="text"
                name="firstname"
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">LAST NAME</label>
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">EMAIL</label>
              <input
                type="text"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Password">PASSWORD</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="comfirmPassword">CONFIRM PASSWORD</label>
              <input
                type="password"
                name="comfirmpassword"
                onChange={handleChange}
              />
            </div>
            <button>REGISTER</button>
          </form>
        </FORMDATA>
      </div>
    );
}
