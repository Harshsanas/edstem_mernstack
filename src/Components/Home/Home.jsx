import React, { useEffect, useState } from 'react'
import axios from"axios"

export default function Home() {

    const [list,setList]=useState({})

    useEffect(()=>{
        axios
          .get("http://localhost:3033/form")
          .then((res) => {
            setList(res.data.forms);
          })
          .catch((err) => {
            console.error(err);
          });
    })
    return (
      <div>
        <h1>WELCOME TO EDSTEM</h1>

        <h3>USERS DETAILS</h3>

        {
            list.length>0 && list.map((items)=>{
                return (
                  <div key={items._id}>
                    <table>
                        <tr>
                          <td>{items.firstname}</td>
                          <td>{items.lastname}</td>
                          <td>
                            <a href={items.email}>{items.email}</a>
                          </td>
                          <td>{items.password}</td>
                        </tr>
                    </table>
                  </div>
                );
            })
        }
      </div>
    );
}
