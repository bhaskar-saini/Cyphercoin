import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { Coincontext } from '../../context/Coincontext'
import { Link } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

const Navbar = () => {
  const {setCurrency} = useContext(Coincontext)
  const[color,setColor] = useState(false);
  useEffect(()=>{
    const handleScroll = ()=>{
      const navHeight = 90;
      if(window.scrollY >= 90 && color !== true){
        setColor(true);
      }
      if(window.scrollY < 90 && color !== false){
        setColor(false);
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[color])

  const currencyHandler = (event)=>{
    switch(event.target.value){
      case "usd":{
        setCurrency({name:"usd",symbol:"$"})
        break;
      }
      case "eur":{
        setCurrency({name:"eur",symbol:"€"})
        break;
      }
      case "inr":{
        setCurrency({name:"inr",symbol:"₹"})
        break;
      }
      default:{
        setCurrency({name:"usd",symbol:"$"})
        break;
      }
    }
  }
  return (
    <div className={color ? "navbar navbar-bg":"navbar"}>
      <Link to={'/'}>
        <div className='logo'>
          <img className='rotate' src={logo} alt="logo"/>
          <p>Cyphercoin</p>
        </div>
      </Link>
      <ul>
          <LinkScroll to="Home" spy={true} smooth={true} offset={-190} duration={500}><li>Home</li></LinkScroll>
          <LinkScroll to="Market" spy={true} smooth={true} offset={-250} duration={500}><li>Market</li></LinkScroll>
          <LinkScroll to="Choose" spy={true} smooth={true} offset={-100} duration={500}><li>Choose Us</li></LinkScroll>
          <LinkScroll to="Footer" spy={true} smooth={true} offset={-100} duration={500}><li>Join</li></LinkScroll>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select>
        <button>Sign Up <img src={arrow_icon} alt="arrow-icon" /></button>
      </div>
    </div>
  )
}

export default Navbar