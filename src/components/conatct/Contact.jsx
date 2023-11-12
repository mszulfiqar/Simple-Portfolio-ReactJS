import React, { useRef } from 'react';
import './contact.css';
import adobe from '../../assets/adobe.png';
import facebook from '../../assets/facebook.png';
import microsoft from '../../assets/microsoft.png';
import walmart from '../../assets/walmart.png';
import twittericon from '../../assets/twitter.png';
import youtubeicon from '../../assets/youtube.png';
import instagicon from '../../assets/instagram.png';
import faceicon from '../../assets/facebook-icon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const form = useRef();
	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_peiyj8p', 'template_0nb2ann', form.current, '3wqUxwPMaVWB4aGZo')
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
	  }
  return (
	<section id="contactPage">
		<div id="clients">
			<h1 className="contactPageTitle">My Clients</h1>
			<p className="clientDesc">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolore voluptates accusamus placeat nulla, quisquam maxime sunt culpa. Libero, corrupti?
			</p>
			<div className="clientImgs">
				<img src={walmart} alt="" className="clientImg " />
				<img src={facebook} alt="" className="clientImg" />
				<img src={adobe} alt="" className="clientImg" />
				<img src={microsoft} alt="" className="clientImg" />
			</div>
		</div>
		<div id="contact">
			<h1 className="contactPageTitle">Contact me</h1>
			<span className="contactDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut esse </span>
			<form action="" className="contactFrom" ref={form} onSubmit={sendEmail}>
				<input type="text" className="name" placeholder='Your name' name='your_name'/>
				<input type="email" placeholder='Your email' className="email" name='your_email'/>
				<textarea name="message" placeholder='your message' className='msg' rows="10"></textarea>
				<button type='submit' value='Send' className="submitBtn">Send</button>
				<div className="links">
					<img src={faceicon} alt="" className="link move-up-down" />
					<img src={youtubeicon} alt="" className="link move-up-down" />
					<img src={twittericon} alt="" className="link move-up-down" />
					<img src={instagicon} alt="" className="link move-up-down" />
				</div>
			</form>
		</div>
	</section>
  )
}

export default Contact
