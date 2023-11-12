import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/logo.png';
import contact from '../../assets/contact.png'
import {Link} from 'react-scroll';
import bars from '../../assets/bars-solid.svg';
import close from '../../assets/xmark-solid.svg';


const Navbar = () => {
	const [showMenu,setshowMenu] = useState(true);
  return (
	  
	  <div className="navbar">
	  <div className="center">
	  <div className="logo">
		<img src={logo} alt="logo" className='logo' />
		</div>
		<div className="desktpMenu">
			<Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktpMenuListItem'>Home</Link>
			<Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktpMenuListItem'>About</Link>
			<Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className='desktpMenuListItem'>Portfolio</Link>
			<Link activeClass='active' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='desktpMenuListItem'>Clients</Link>
		</div>
		<button className="desktopMenuBtn" onClick={()=>{
			document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
		}}>
			<img src={contact} alt="" className="desktopMenuImg" />Contact me
		</button>
		{showMenu
		?
		<div className='r'  onClick={()=>{setshowMenu(false)}}><img id='open' src={bars} alt="open" /></div>
		: 
		<div className='r' onClick={()=>{setshowMenu(true)}}><img id='open' src={close}/>
		<div className="navMenu scale-up-tr">
			<Link activeClass='activet' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='ListItem' onClick={()=>{setshowMenu(true)}}>Home</Link>
			<Link activeClass='activet' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>{setshowMenu(true)}} >About</Link>
			<Link activeClass='activet' to='works' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>{setshowMenu(true)}}>Portfolio</Link>
			<Link activeClass='activet' to='clients' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>{setshowMenu(true)}}>Clients</Link>
			<Link activeClass='activet' to='contact' spy={true} smooth={true} offset={-50} duration={500} className='ListItem' onClick={()=>{setshowMenu(true)}}>Contact</Link>
		</div>
		</div>
		} 
		</div>
		</div>
  )
}

export default Navbar;