import React, {useState} from 'react';
import Slider from "react-slick";

let FirstScreen = (props) => {
	const [slides, setSlides] = useState([
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
	])
	let [activeSlide, setActiveSlide] = useState(0);
	let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };	
    let slider = React.createRef();
    let goTo = index => {
		slider.slickGoTo(index);
		setActiveSlide(index);
	}
	return  <section id="main" className="first-screen">
				<Slider {...settings} className="first-screen__slider" ref={c => slider = c }>
				 	{slides.map((slide, index) => <div className="first-screen__item" key={index}><div className=" main-block" >
					        	<h1 className="first-screen__item__title">{slide.title}</h1>
					        	<a href="#cases">
					        		<button className="main-button">{slide.btn}</button>
					        	</a></div>
					        </div>)}
					
			 	</Slider>
			 	<div className="main-block slider-use">
			 		<div className="dots">
			 			{slides.map((slide,index) => <span className={activeSlide===index && 'active'} onClick={()=>goTo(index)} ></span>)}
			 		</div>
				 	<div className="slider-buttons">
				 		<button className="slider-buttons__btn" onClick={()=>slider.slickNext()} >&#8249;</button>
				 		<button className="slider-buttons__btn" onClick={()=>slider.slickNext()} >&#8250;</button>
				 	</div>
			 	</div>
			</section>
}
export default FirstScreen;