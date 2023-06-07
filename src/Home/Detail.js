import React from 'react';
import './Detail.css'
import { NavLink,  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Detail= ()=> {
  const navigate = useNavigate();
  const{id} =useParams("")
  const[getuserdata,setuserdata]=useState({})
  console.log(getuserdata)
  const getdata= async ()=> {

    const res =await fetch(`/getuser/${id}`,{
      method:"GET",
      headers:{"Content-type":"applictaion/json"},

    });

    const data=await res.json();
    console.log(data);

    {
      setuserdata(data)
      console.log("Get Data")
    }


  }
  // Delete userv data
// .............................
const deleteuser =async(id)=>{

    const res =await fetch(`/deleteuser/${id}`,{
        method:"DELETE",
        headers:{"Content-Type":"application/json"},

    });

    const deletedata =await res.json();
    console.log(deletedata);

    if(res.status === 404 || !deletedata)
    {
        console.log("error")
        alert("error")
    }
    else
    {

        alert("data deleted")
        getdata()
        navigate('/Detail')
    }
}
  useEffect(()=>{getdata()},[])
  return(
    <div className='container h-100'>
      <div className='row h-100 align-items-center'>
        <div className='col-md-4 mx-auto my-auto'>
          <img src="https://tse4.mm.bing.net/th?id=OIP.zFGM98IUpeb92WtH52rzEwHaHa&pid=Api&P=0"height="280"class="card-img-top"alt="..." />
          <div class ="card-body p-2">
                <h5 className="card-title mt-3"> Name: {getuserdata.name}</h5>
                <h5 className="card-title mt-3">Age: {getuserdata.age}</h5>
                <h5 className="card-title mt-1"><i className="fa-solid fa-envelope">: {getuserdata.email}</i></h5>
                <h5 className="card-title mt-2"><i className='fas fa-briefcase'>: {getuserdata.work}</i></h5>
                <h5 className="card-title mt-2"><i className='fas fa-globe'>: {getuserdata.add}</i></h5>
                <h5 className="card-title mt-2"><i className='fas fa-mobile'>:+91 {getuserdata.mobile}</i></h5>
                <button className="btn btn-warning"><NavLink className="nav-link" to={`/edit/${getuserdata._id}`}> <i className="fas fa-pen"></i></NavLink></button>
                <button className="btn btn-danger" onClick= {() => deleteuser(getuserdata._id)}><i className="fas fa-trash"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail

