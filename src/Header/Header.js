import React, {useState} from 'react'
import './Header.css'
import {Link} from "react-router-dom"
import {GiHamburgerMenu} from "react-icons/gi"

const Header = () => {
  const [showmediaicons,setshowmediaicons] = useState(false);
  return (
    <div>
      <nav className='nv'>
        <div className='logo'><img src='nbi1.jpg' alt='none'></img></div>
        <ul className={showmediaicons ? "ulnv mobile-menu" : "ulnv"}>
            
            <Link className='linknv' to='/'><li>Home</li></Link>
               
            
            <Link className='linknv' to='/Login'><li>Detail</li></Link>
              
            
            <Link className='linknv' to='/Contact'><li>Contact</li></Link>
              
            
            <Link className='linknv' to='/Register'><li>Register</li></Link>

            <Link className='linknv' to='/Services'><li>Services</li></Link>
              
        </ul>
        <div className="hamburger">
          <a href="#" onClick={() => setshowmediaicons(!showmediaicons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Header