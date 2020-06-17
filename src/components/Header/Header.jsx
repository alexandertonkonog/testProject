import React from 'react';
import Logo from './Logo';
import InfoBlock from './InfoBlock';
import Navbar from './Navbar';

let Header = (props) => {
	return  <header className="header ">
				<div className="header__inside main-block">
					<Logo />
					<div className="header__right">
						<InfoBlock />
						<Navbar />
					</div>
				</div>
			</header>
}
export default Header;