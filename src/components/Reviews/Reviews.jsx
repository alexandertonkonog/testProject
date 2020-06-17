import React, {useState} from 'react';
import Slider from "react-slick";
import photo from '../../images/Ellipse.png';

let Reviews = (props) => {
	let text = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'
	let name = 'Екатерина Иванова';
	let org = 'Директор ООО “Раз-два”';
	const [slides, setSlides] = useState([
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
		{title: 'Бухгалтерские услуги в Санкт-Петербурге', btn: 'Наша презентация'},
	])
	let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    let slider = React.createRef();
	let [activeSlide, setActiveSlide] = useState(0);
	let goTo = index => {
		slider.slickGoTo(index);
		setActiveSlide(index);
	}
	return  <section className="reviews ptb140">
				<div className="reviews__inside main-block">
					<h3 className="little-title">Отзывы</h3>
					<h2 className="big-title">Ваши благодарности</h2>
					
					<Slider  {...settings} ref={c => slider = c } className="reviews__slider">
					 	{slides.map((slide, index) => <div className="reviews__slider__item">
					 		<p className="reviews__slider__text" >{text}</p>
					 		<div className="reviews__slider__autor">
					 			<img src={photo} className="reviews__slider__img" alt={photo} />
					 			<div className="reviews__slider__des">
					 				<h3 className="reviews__slider__autor__name">{name}</h3>
					 				<p className="reviews__slider__autor__org">{org}</p>
					 			</div>
					 		</div>			
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
      				
				</div>
			</section>
}
export default Reviews;