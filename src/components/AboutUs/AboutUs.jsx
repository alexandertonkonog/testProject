import React, {useState} from 'react';

let AboutUs = (props) => {
	let [list, setList] = useState([
		{number: 90, link: '#'},
		{number: 20, link: '#'},
		{number: 120, link: '#'},
		{number: 76, link: '#'},
	])
	return  <section className="about-us ptb140">
				<h3 id="cases" class="little-title main-block">О нас</h3>
				<div className="about-us__inside main-block">
					<div class="about-us__inside__left">
						<h2 class="big-title">Компания <span className="big-title_blue">ИвановПром</span></h2>
						<p class="about-us__inside__left__text">Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн.</p>
					</div>
					<div class="about-us__inside__right">
						{list.map((item, index)=><article className="article-item">
							<p class="article-item__number">{item.number}</p>
							<p class="article-item__text">Завершено крупных сделок</p>
							<a href={item.link} class="article-item__link">Все кейсы</a>
						</article>)}
					</div>
				</div>
			</section>
}
export default AboutUs;