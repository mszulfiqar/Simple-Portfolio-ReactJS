import React from 'react';
import image from '../../assets/image.png';
import hireme from '../../assets/hireme.png';
import './intro.css';
import {Link} from 'react-scroll';

const Intro = () => {
  return (
	<>
		<section id="intro">
			<div className="introContent">
				<span className="hello">hello</span>
				<span className="introText">I'm <span className="introName">Shan</span><br />
				 Website Developer</span>
				<p className="introPara">I am skilled Web Developer with experience in accordion <br />
				various technologies</p>
				<Link><button className="btn"><img src={hireme} alt="" className='btnImg' />Hire me</button></Link>
			</div>
			<img src={image} alt="" className="bg" />
		</section>
	</>
  )
}

export default Intro;