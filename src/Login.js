import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import formData from "form-data"

import './Login.css'
export default function Login() {
  const navigate = useNavigate();
  const[error,setError]=React.useState(false);
  const [inpval, setINP] = useState(
    {
      name: "",
      password: ""
     
    }
  )

  const setdata = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    // setINP({[name]:value})
    setINP((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }
  const addinpdata = async (e) => {
    const { name, password} = inpval;
    console.log(inpval)
    e.preventDefault();
    if(!name||!password)
    {
      setError(true)
      return false
    }
    var form = new formData();
    form.append('name', name);
    form.append('password', password);


    const res = await fetch("/login",{
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body:form
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert("error")
    }
    else {
      navigate('/Detail')
    }


  }
  return (
    <div className="bg">
      <form >
       
        <div className="contai1">
        <h1><u>Login Form</u></h1>
          <div className="row1">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">
                  username
                </label>
                <input
                  type="text"
                  onChange={setdata}
                  value={inpval.name}
                  name="name"
                  className="form-control"
                  placeholder="Enter name here"
                />
                {error&& !inpval.name &&<span className="invalid-input">Enter name here</span>}
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  onChange={setdata}
                  value={inpval.password}
                  name="password"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email here"
                />
                {error&& !inpval.email &&<span className="invalid-input">Enter password here</span>}

              </div>
            </div>
          </div>
          <div className="row1">            
              <button type="submit" onClick={addinpdata} className="btn btn-primary">LOGIN</button>
            </div>
             
            
          </div>
           
       
           
         
        
      </form>
    </div>
  );
}
