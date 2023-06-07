import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './Services.css'
import {Link} from "react-router-dom"
const Services = () => {
  useEffect(()=>{
    AOS.init({duration: 2000})
  },[])
  return (
    <div>
      <div className="sheading">
        <h2>Our Services</h2>
      </div>
      <div className="scont">
      <div className="spara">
      <h4>Study Visa</h4>
      <h4>Visitor Visa</h4>
      <h4>Open Work Permit</h4>
      <h4>Work Permit</h4>
      </div>
      </div>
      <hr/>
        <div className="sheading2"><h2>Study Visa <i class="fa-solid fa-arrow-down fa-bounce"></i></h2></div>
      <div className="scont2">
        <div className="scontent animation" data-aos="fade-down"><h6>UK</h6><img src='https://cdn.britannica.com/29/22529-004-ED1907BE/Union-Flag-Cross-St-Andrew-of-George.jpg'></img></div>
        <div className="scontent animation" data-aos="fade-up"><h6>CANADA</h6><img src='https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg'></img></div>
        <div className="scontent animation" data-aos="fade-down"><h6>AUSTRALIA</h6><img src='https://cdn.britannica.com/78/6078-004-77AF7322/Flag-Australia.jpg'></img></div>
        <div className="scontent animation" data-aos="fade-up"><h6>NEWZEALAND</h6><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/800px-Flag_of_New_Zealand.svg.png'></img></div>
        <div className="scontent animation" data-aos="fade-down"><h6>USA</h6><img src='https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg'></img></div>
      </div><hr />

      <div className="sheading3"><h2>SCHENGEN Countries Work Permit<i class="fa-solid fa-arrow-down fa-bounce"></i></h2></div>
      <div className="scont3" >
        <div className="scontent animation" data-aos="fade-up"><h6>QURESHIA</h6><img src='https://cdn.pixabay.com/photo/2012/04/10/23/11/croatia-26888__480.png'></img></div>
        <div className="scontent animation" data-aos="fade-down"><h6>POLAND</h6><img src='https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg'></img></div>
        <div className="scontent animation" data-aos="fade-up"><h6>MALTA</h6><img src='https://cdn.britannica.com/86/2286-004-51ACEA26/Flag-Malta.jpg'></img></div>
        <div className="scontent animation" data-aos="fade-down"><h6>SLOVAKIA</h6><img src='https://cdn.britannica.com/88/7888-004-FD4BC606/Flag-Slovakia.jpg'></img></div>
        <div className="scontent animation" data-aos="fade-up"><h6>SLOVANIA</h6><img src='https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg'></img></div>
      </div>
      <Link to='/Contact'><button type="button" class="btn btn-outline-secondary">Contact For Any Query</button></Link>
    </div>
  )
}

export default Services
