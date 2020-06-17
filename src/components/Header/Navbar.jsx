import React from 'react';

let Navbar = (props) => {
	return  <nav className="nav">
				<ul className="menu" >
					<li className="menu__item"><a href="#main">главная</a></li>
					<li className="menu__item"><a href="#services">услуги</a></li>
					<li className="menu__item"><a href="#cases">кейсы</a></li>
					<li className="menu__item"><a href="#cases">о компании</a></li>
					<li className="menu__item"><a href="#contact">контакты</a></li>
				</ul>
			</nav>
}
export default Navbar;