import React, { useState } from "react";
import formData from "form-data"

import './Register.css'
export default function Register() {
  const[error,setError]=React.useState(false);
  const [inpval, setINP] = useState(
    {
      name: "",
      email: "",
      age: "",
      mobile: "",
      work: "",
      add: "",
      desc: "",
    }
  )


  const [selectedFile,setSelectedFile]=useState(null)

  const handleFileChange=(e)=>{
    setSelectedFile(e.target.files[0])
  }
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
  const addinpdata = async(e) => {
    
    const { name, email, age, mobile, work, add, desc } = inpval;
    e.preventDefault();
    if(!name||!email||!age|| !mobile|| !work||!add||!desc)
    {
      setError(true)
      return false
    }
    // const { name, email, age, mobile, work, add, desc } = inpval;

  
    var form = new formData();
    form.append('name', name);
    form.append('email', email);
    form.append('age', age);
    form.append('mobile', mobile);
    form.append('work', work);
    form.append('add', add);
    form.append('desc', desc);
    form.append('file', selectedFile);

    const res = await fetch("/register", {
      method: "POST",
      // headers: { "Content-Type": "application/json" },
      body: form
    });
// 
    const data = await res.json();
    console.log(data);

    if (res.status === 404 || !data) {
      alert(data)
    }
    else {
      alert("Data Inserted")
    }


  }
  return (
    <div className="maindiv">
      <div className="registerheading">
      <div className='reghead'><h1>NEW BEGINNING IMMIGRATION</h1></div>
      </div>
      <form>
        <div className="container">
        <div className="reghead2"><h2>Registration Form</h2></div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  value={inpval.name}
                  onChange={setdata}
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
                  Email address
                </label>
                <input
                  type="email"
                  onChange={setdata}
                  value={inpval.email}
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email here"
                />
                
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  onChange={setdata}
                  name="age"
                  value={inpval.age}
                  className="form-control"

                  placeholder="Enter age here"
                />
                 {error&& !inpval.age &&<span className="invalid-input">Enter age here</span>}
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label className="form-label">
                  Mobile
                </label>
                <input
                  type="tel"
                  name="mobile"
                  // pattern="{0-9}[10]"
                  onChange={setdata}
                  value={inpval.mobile}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter mobile number here"
                />
                 {error&& !inpval.mobile &&<span className="invalid-input">Enter mobile here</span>}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">
                  work
                </label>
                <input
                  type="text"
                  onChange={setdata}
                  value={inpval.work}
                  className="form-control"
                  name="work"
                  placeholder="Enter age here"
                />
                 {error&& !inpval.work &&<span className="invalid-input">Enter work here</span>}
              </div>
            </div>

            <div className="col">
              <div className="mb-3">
                <label className="form-label">
                  Add
                </label>
                <input
                  type="text"
                  name="add"
                  onChange={setdata}
                  value={inpval.add}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Enter mobile number here"
                />
                 {error&& !inpval.address &&<span className="invalid-input">Enter address here</span>}
              </div>
            </div>
          </div>
          <label>Desc</label>
          <textarea className="form-control" onChange={setdata}
            value={inpval.desc} name="desc" id="exampleFormControlTextarea1" rows="3" placeholder="Enter message here"></textarea>
            <input type="file"  onChange={handleFileChange} accept="application/pdf" />
         
          <button type="submit" onClick={addinpdata} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

