// import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js'
import Home from './Home/Home';
import Register from './Home/Register';
import Contact from './Home/Contact';
import Edit from './Home/Edit';
import Login from './Login';
import Detail from './Home/Detail';
import About from './About';
import Services from './Home/Services';
// import Objects from './Objects'
import Footer from './Footer/Footer';
import {Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/edit/:id' element={<Edit/>}/>
      <Route path="/Detail" element={<About/>}/>
      <Route path="/Services" element={<Services/>}/>
      <Route path='/view/:id' element={<Detail/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Register" element={<Register/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
