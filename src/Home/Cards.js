import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Home.css'
const Cards = (props) => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div>
      <div className='container2'>
     <div className="card">
  <div className="card-body">
    <h5 className="card-title"><u>{props.title}</u> <img className="animation" data-aos="zoom-in-right" src={props.img}  alt="..." width="590px" height="500px"/></h5>
    <p className="card-text" data-aos="fade-up">{props.desc}</p>
    {/* <a href="#" className="card-link">{props.link}</a>
    <a href="#" className="card-link">{props.alink}</a> */}
    {/* <a href={props.link} class="btn btn-primary">FaceBook Link</a>
    <a href={props.alink} class="bt1 btn-danger">Youtube Link</a> */}
  </div>
</div>
     </div>
    </div>
  )
}

export default Cards
