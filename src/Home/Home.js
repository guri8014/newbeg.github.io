import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'
import Objects from '../Objects'
import Cards from './Cards'

// function dataget(){
//   const text = document.querySelectorAll('.head1');
//  console.log(text)
// const strText = text.textContent;
// console.log(strText)
// const splitText = strText.split(" ");
// text.textContent="";
// for(let i=0;i<splitText.length;i++){
//   text.innerHTML += "<span>" + splitText[i] + "</span>";
// }
// }


const Home = () => {
  return (
    <div>
     <div className='container1'>
     {/* <img src='country.png' alt='none' classNameName='countryimg'></img> */}
     <div className='mainhead'>
     <div className='head1' id='head'><h2>Start Planning Your New Dream With</h2></div>
     <h1 className='head2'>NEW BEGINNING IMMIGRATION</h1> 
     <Link to='/Services'><button className='btn1'>Our Services</button></Link>
     </div>
     </div>
     <div className='conthead'>
     <h1>WHY Study Abroad?</h1>
     </div>
     <div className='cards'>
     <div className='card1 container'>
     <Cards title={Objects[0].title} img={Objects[0].img} desc={Objects[0].desc} link={Objects[0].link} alink={Objects[0].alink}/>
     </div>
     <div className='card2 container'>
     <Cards title={Objects[1].title} img={Objects[1].img} desc={Objects[1].desc}/>
     </div>
     <div className='card3 container'>
     <Cards title={Objects[2].title} img={Objects[2].img} desc={Objects[2].desc}/>
     </div>
     <div className='card4 container'>
     <Cards title={Objects[3].title} img={Objects[3].img} desc={Objects[3].desc}/>
     </div>
     </div>
    </div>
  )
}
export default Home
