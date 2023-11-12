import React from 'react';
import './works.css';
import portfolio from '../../assets/portfolio-1.png'
import portfoliotwo from '../../assets/portfolio-2.png'
import portfoliothree from '../../assets/portfolio-3.png'
import portfoliofour from '../../assets/portfolio-4.png'
import portfoliofive from '../../assets/portfolio-5.png'
import portfoliosix from '../../assets/portfolio-6.png'

const Works = () => {
  return (
	<>
		<section id="works">
			<h2 className="worksTitle">My Portfolio</h2>
			<span className="worksDesc">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iusto sequi repellendus, vitae facilis tempore fugit itaque quis rerum ipsa?
			</span>
			<div className="worksImgs">
			<img src={portfolio} alt="" className="worksImg" />
			<img src={portfoliotwo} alt="" className="worksImg" />
			<img src={portfoliothree} alt="" className="worksImg" />
			<img src={portfoliofour} alt="" className="worksImg" />
			<img src={portfoliofive} alt="" className="worksImg" />
			<img src={portfoliosix} alt="" className="worksImg" />
			</div>
			<div className="workBtn">See more</div>
		</section>
	</>
  )
}

export default Works;