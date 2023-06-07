import { useEffect,useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import './home.css'
function About(){
    const navigate = useNavigate();
const [getuserdata,setuserdata] = useState([])
const getdata =async() => {

    const res = await fetch("/getdata",{
        method:"GET",
        headers: {"Content-Type":"application/json"},

    });

    const data =await res.json();
    console.log(data);

    if(res.status === 404 || !data)
    {
        console.log("error")
        alert("error")
    }
    else
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
        navigate('/')
    }
    else
    {

        alert("data deleted")
        getdata()
       
    }
}
useEffect(()=>{getdata()},[])
return(
<div className="mt-5">
    <div className="container table-responsive">
      <div className="add_btn mt-2">
       <NavLink className="btn btn-primary " to="/register">+ add Data</NavLink>
     <table className="table table-bordered mt-4 ">
      <thead className="table-dark">
        <tr>
           <th scope="col">Id</th>
            <th scope="col">Username</th>
             <th scope="col">Email</th>
             <th scope="col">Job</th>
         <th scope="col">Number</th>
             <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getuserdata.map((element,id)=>
                            {
                                return(
                                    <>
                                    <tr>
                                        <th scope="row">{id+1}</th>
                                        <td>{element.name}</td>
                                        <td>{element.email}</td>
                                        <td>{element.work}</td>
                                        <td>{element.mobile}</td>
                                        <td className="d-flex justfy-content-between">
                                            <NavLink to={`/view/${element._id}`}className="btn btn-success"><i className="fas fa-eye"></i>   </NavLink>
                                            <button className="btn btn-warning"><NavLink className="nav-link" to={`/edit/${element._id}`}> <i className="fas fa-pen"></i></NavLink></button>
                                            <button className="btn btn-danger" onClick= {() => deleteuser(element._id)}><i className="fas fa-trash"></i></button>
                                        </td>
                                    </tr>
                                    </>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
);
                    }
                    
export default About;