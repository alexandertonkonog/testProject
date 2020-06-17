import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobileAlt, faClock, faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons'

let InfoBlock = (props) => {
	return  <div className="top-line">
				<div className="top-line__info">
					<FontAwesomeIcon className="top-line__info__icon" icon={faMobileAlt} />
					<a className="top-line__info__text" href="#">8 (111) 222-33-44 </a>
				</div>
				<div className="top-line__info">
					<FontAwesomeIcon className="top-line__info__icon" icon={faClock} />
					<p className="top-line__info__text" href="#">Пн-Пт 10:00-18:00</p>
				</div>
				<div className="top-line__info">
					<FontAwesomeIcon className="top-line__info__icon" icon={faEnvelope} />
					<a className="top-line__info__text" href="#">order@buhone.ru </a>
				</div>
				<div className="top-line__info">
					<FontAwesomeIcon className="top-line__info__icon" icon={faMapMarker} />
					<a className="top-line__info__text" href="#">Невский пр. 130 </a>
				</div>
			</div>
}
export default InfoBlock;