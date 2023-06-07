import React from 'react'
import './Footer.css'
import { FiMapPin } from "react-icons/fi";
import { FcPhone } from "react-icons/fc";
import { FcFeedback } from "react-icons/fc";
const Footer = () => {
  return (
    <div>
      <div className='foot'>
        {/* <div className='content'>
        <h4 className='hfour'>CONTACT INFORMATION</h4>
        <p className='par'><div className='icon1'><FiMapPin/></div>
        AU-26,<br/>Upper Ground,Grand City Plaza,Near Keys Hotel,<br/>Ludhiana</p>
        <div className='coninf'>
            <div className='icon2'><FcPhone/></div>
            <div className='number'> 98781-52210,90560-04055</div>
        </div>
        <div className='mailinf'>
            <div className='icon3'><FcFeedback/></div>
            <div className='mailcont'>abc@gmail.com</div>
        </div>
        </div> */}
      <div className='content2'>
        <h6 className="joinu">Join Us On:</h6>
        <div className='sicons'>
        <a href='https://www.instagram.com/newbeginningimmigration.2022/'><div className='icon4'><i className="fa-brands fa-instagram fa-l"></i></div></a>
        <a href='https://www.facebook.com/'><div className='icon5'><i className="fa-brands fa-square-facebook fa-l"></i></div></a>
        <a href='https://www.youtube.com/channel/UCaEJDV8ibd8wiYlNejJiFNg'><div className='icon5'><i className="fa-brands fa-youtube fa-l"></i></div></a>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default Footer
