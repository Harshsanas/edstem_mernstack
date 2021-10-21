import React, { useEffect, useState } from 'react'
import axios from"axios"

export default function Home() {

    const [list,setList]=useState({})

    useEffect(()=>{
        axios
        .get("")
        .then((res)=>{
            setList(res)
        })
        .catch((err)=>{console.error(err)})
    })
    return (
      <div>
        <h1>WELCOME TO EDSTEM</h1>

        {
            list.length>0 && list?.map((items)=>{
                return (
                    <div key={items.id}>
                    {items}
                    </div>
                )
            })
        }
      </div>
    );
}
