import './Contact.css'
import {Link} from 'react-router-dom'
import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { FcPhone } from "react-icons/fc";
const Contact = () => {
  return (
    <div>
      {/* <div className='contacthead'>
        <h3 className='contacth'>Contact Us!</h3>
        <img className='contactimg' src='nbi1.jpg' alt='none'></img>
        <div className='contacticons'>
        <div className='contacticon1'><i class="fa-brands fa-instagram fa-2xl"></i></div>
        <div className='contacticon2'><i class="fa-brands fa-facebook fa-2xl"></i></div>
        <div className='contacticon3'><i class="fa-brands fa-youtube fa-2xl"></i></div>
        <p>98781-52210,90560-04055</p>
        </div>
      </div> */}
      <div className="maind">
        <div className="info">
          <div className="conhead">
        <h1>Feel Free To Contact Us!</h1>
        </div>
      <div className="addrs"><FiMapPin/><span>Our Office Address:</span><p>AU-26,Upper Ground,Grand City Plaza,Near Keys Hotel,Ludhiana</p></div>
      <div className="mob"><FcPhone/><span>Call Us:</span><p>98781-52210,90560-04055</p></div>
      <div className="mail"><i class="fa-solid fa-envelope"></i><span>For Another Enquiries:</span><p>newbeginningimmigration@gmail.com</p></div>
      <div className="smedia">
        <h3>Follow Us On</h3>
        <a href='https://www.instagram.com/newbeginningimmigration.2022/'><i class="fa-brands fa-instagram fa-l"></i></a>
        <a href='https://www.instagram.com/newbeginningimmigration.2022/'><i class="fa-brands fa-square-facebook fa-l"></i></a>
        <a href='https://www.youtube.com/channel/UCaEJDV8ibd8wiYlNejJiFNg'><i class="fa-brands fa-youtube fa-l"></i></a>
      </div>
      </div>
      {/* <div className="map"><iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4357.240706009942!2d75.8078253595462!3d30.871253345506283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDUyJzE3LjYiTiA3NcKwNDgnMzguMCJF!5e0!3m2!1sen!2sin!4v1681478687844!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div> */}
      </div><hr/>
      <div className="regf">
        <h5>Click Below Button <i class="fa-sharp fa-solid fa-arrow-down"></i> For Registration</h5>
        <div className="regbut">
        <Link to='/Register'><button>Registration</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
