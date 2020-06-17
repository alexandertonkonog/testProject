import React from 'react';
import Header from './components/Header/Header';
import FirstScreen from './components/FirstScreen/FirstScreen';
import OurServices from './components/OurServices/OurServices';
import OurClients from './components/OurClients/OurClients';
import AboutUs from './components/AboutUs/AboutUs';
import Reviews from './components/Reviews/Reviews';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

let App = (props) => {
	return  <div className="wrapper">
				<Header />
				<FirstScreen />
				<OurServices />
				<AboutUs />
				<OurClients />
				<Reviews />
				<Contact />
				<Footer />
			</div>
}
export default App;