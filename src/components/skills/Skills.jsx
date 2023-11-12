import React from 'react';
import uidesign from '../../assets/uidesign.png';
import Website from '../../assets/website-design.png';
import Appdes from '../../assets/app-design.png';
import './skills.css';

const Skills = () => {
  return (
	<>
		<section id="skills">
			<span className="skillTitle">What I do</span>
			<spna className="skillDesc">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, necessitatibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore, tempore. Lorem ipsum dolor sit amet consectetur adipisicing. ipsum dolor sit amet consectetur adipisicing elit. Soluta, illum.</spna>
			<div className="skillBars">
				<div className="skillBar">
					<img src={uidesign} alt="" className="skillBarImg" />
					<div className="skillBarText">
						<h2>Lorem, ipsum dolor.</h2>
						<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, ea?</p>
					</div>
				</div>
				<div className="skillBar">
					<img src={Website} alt="" className="skillBarImg" />
					<div className="skillBarText">
						<h2>Lorem, ipsum dolor.</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, at.</p>
					</div>
				</div>
				<div className="skillBar">
					<img src={Appdes} alt="" className="skillBarImg" />
					<div className="skillBarText">
						<h2>Lorem, ipsum dolor.</h2>
						<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, qui.</p>
					</div>
				</div>
			</div>
		</section>
	</>
  )
}

export default Skills;