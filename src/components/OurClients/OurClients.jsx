import React, {useState} from 'react';
import Slider from "react-slick";
import photo from '../../images/mic.png';

let OurClients = (props) => {
	const [slides, setSlides] = useState([
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
	])
	let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    let slider = React.createRef();
	let [activeSlide, setActiveSlide] = useState(0);
	let goTo = index => {
		slider.slickGoTo(index);
		setActiveSlide(index);
	}
	return  <section className="our-clients ptb140">
				<div className="our-clients__inside main-block">
					<h3 className="little-title">Наши клиенты</h3>
					<h2 className="big-title">С нами работают</h2>
					
					<Slider  {...settings} ref={c => slider = c } className="our-clients__slider">
					 	{slides.map((slide, index) => <img key={index} className="our-clients__slider__item" src={photo} alt="microsoft" />)}
				    </Slider>
				    <div className="main-block slider-use">
				 		<div className="dots">
				 			{slides.slice(1).map((slide,index) => <span className={activeSlide===index && 'active'} onClick={()=>goTo(index)} ></span>)}
				 		</div>
					 	<div className="slider-buttons">
					 		<button className="slider-buttons__btn" onClick={()=>slider.slickNext()} >&#8249;</button>
					 		<button className="slider-buttons__btn" onClick={()=>slider.slickNext()} >&#8250;</button>
					 	</div>
				 	</div>
      				
				</div>
			</section>
}
export default OurClients;