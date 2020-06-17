import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

let Contact = (props) => {
	
	return  <section className="contact ptb140">
				<div className="contact__inside main-block">
					<div className="contact__left">
						<h2 id="contact" className="big-title big-title_white">Связь с нами</h2>
						<p className="contact__left__text">У вас остались вопросы? Напишите нам - мы ответим в ближайшее время!</p>
						<div className="contact__left__info">
							<span><FontAwesomeIcon icon={faMobileAlt} /> <a href="#">+7 (111) 222-33-44</a></span>
							<span><FontAwesomeIcon icon={faEnvelope} /> <a href="#">order@bu-one.ru</a></span>
						</div>
					</div>
					<div className="contact__right">
						<form className="form" action="" method="POST">
							<div className="form__inputs">
								<div>
									<label className="form__label" for="name">Имя</label> <br/>
									<input className="form__input" name="name" type="text" placeholder="Иван" />
								</div>
								<div>
									<label className="form__label" for="surname">Фамилия</label><br/>
									<input className="form__input" name="surname" type="text" placeholder="Иванов"/>
								</div>
							</div>
							<label className="form__label" for="message">Сообщение</label><br/>
							<textarea className=" form__textarea" name="message" placeholder="Ваше сообщение"></textarea>
							<button className="main-button">Отправить сообщение</button>
						</form>							
					</div>
				</div>
			</section>
}
export default Contact;