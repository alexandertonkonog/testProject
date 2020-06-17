import React from 'react';
import logo from '../../images/Group.svg'
let Logo = (props) => {
	return  <a href="#" className="logo">
				<img src={logo} className="logo__img" alt={logo} />
				<p className="logo__title">BuhOne</p>
			</a>
}
export default Logo;