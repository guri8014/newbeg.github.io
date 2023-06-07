import React,{useState,useEffect} from 'react';
import { NavLink,redirect,useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Edit =() =>{
  const navigate =useNavigate();



  const [inpval,setINP] = useState ({
    name:"",
    email:"",
    age:"",
    mobile:"",
    work:"",
    add:"",
    desc:""

  })
  const setdata =(e)=>{
    console.log(e.target.value)
    const {name,value}= e.target;
    setINP({[name]:value}) 
  }
  
  // fetching particuler user data from the id
  // 
const{id}=useParams("")

const getdata=async() =>{

  const res = await fetch(`/getuser/${id}`,{
    method:"GET",
    headers:{"Content-Type":"applictaion/json"},

  });

  const data=await res.json();
  console.log(data);

  if(res.status === 404 || !data)
  {
    console.log("error")
    alert("error")
  }
  else
  {
    setINP(data)
    console.log("Get Data")
  }
}
useEffect(()=>{getdata()},[])
 
// update user data
// .............................

const updateuser = async(e) =>
{
  e.preventDefault();
  // ...............................
  const {name,email,age,mobile,work,add,desc}=inpval;
  const res2= await fetch(`/updateuser/${id}`,{
    method:"PATCH",
    headers: { "Content-Type":"application/json"},
    body:JSON.stringify({
      name,email,age,mobile,work,add,desc
    })
  });
  const data=await res2.json();
  console.log(data);

  if(res2.status === 404 || !data)
{
  console.log("error")
  alert("error")
}
else
{
  alert("Data Inserted")
  navigate('/Detail')
}
}
 return(
  <>
  <div className='container mt-4'>
    <h1 className='d-flex justfy-conetnt-center'>Editing Registration from </h1>
  <form>
    {/*first Section of form having Name and Email Address*/}
          <div className="row mt-2">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Name</label>
  <input type="text" onChange={setdata} value={inpval.name} name="name" className="form-control"  />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
    <label className="form-label">Email address</label> 
<input type="email" onChange={setdata}value={inpval.email}name="email"className="form-control"/>
                </div>
            </div>
          </div>
          {/*Ends first section of form having name and email address*/}
          {/*second section of form having mobile and age*/}
          <div className="row mt-2">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Age</label>
<input type="number"onChange={setdata} name="age"value={inpval.age}className="form-control"/>
              </div>
            </div>
 <div className="col">
              <div className="mb-3">
                <label className="form-label">Mobile</label>
                <input type="tel"name="mobile"pattern="{0-9}[10]" onChange={setdata}value={inpval.mobile}className="form-control"placeholder="Enter mobile number here"/>
              </div>
            </div>
          </div>
{/* ...End of Second section of Age and Mobile Number.... */}
{/* ........Third section of Work and Addreess....... */}

          <div className="row mt-2">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">work</label>
                <input type="text"onChange={setdata}value={inpval.work}className="form-control"name="work"/>
              </div>
            </div>
             <div className="col">
              <div className="mb-3">
                <label className="form-label">Add</label>
                <input type="text"name="add" onChange={setdata} value={inpval.add}className="form-control"/>
              </div>
            </div>
          </div>
          {/* ...End of third section of work and Address.... */}
    {/*  fourth section of having massage box  */}
<div className="row mt-2">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Enter Message Here</label>
          <textarea className="form-control" onChange={setdata}value={inpval.desc} name="desc" rows="5"cols="30"></textarea>
            </div>
            </div>
            </div>
          

          <div className=" row mt-2">
            <div className='col'>
              <div className= "mb-3">
            <button type="submit" onClick={updateuser} className="btn btn-primary"> SEND </button>
            </div>
            </div>
            </div>
          {/* end fourth section */}
      </form>
  </div>
  </>
)
}
export default Edit