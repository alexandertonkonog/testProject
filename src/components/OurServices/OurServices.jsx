import React, {useState} from 'react';

let OurServices = (props) => {
	let [list, setList] = useState([
		{text: 'Бухгалтерское обслуживание', link: '#'},
		{text: 'Бухгалтерское обслуживание', link: '#'},
		{text: 'Бухгалтерское обслуживание', link: '#'},
		{text: 'Бухгалтерское обслуживание', link: '#'},
		{text: 'Бухгалтерское обслуживание', link: '#'},
		{text: 'Бухгалтерское обслуживание', link: '#'},
		{text: 'Бухгалтерское обслуживание', link: '#'},
		{text: 'Бухгалтерское обслуживание', link: '#'},
		{text: 'Бухгалтерское обслуживание', link: '#'},
	])
	return  <section  className="our-services ptb140">
				<div className="main-block">
					<h3 id="services" className="little-title">Наши услуги</h3>
					<h2 className="big-title">Мы специализируемся</h2>
					<div className="our-services__list">
						{list.map((item, index) => <a href={item.link} className="service-item">
							<h3 className="service-item__text">{item.text}</h3>
						</a> )}
					</div>
				</div>
			</section>
}
export default OurServices;