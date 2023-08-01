import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.scss';


// Components
import Banner from '../../components/Banner/Banner';
import ServicesCards from './ServicesCards/ServicesCards';
import DoctorsBanner from '../../components/DoctorsBanner/DoctorsBanner';
import WhyWe from './WhyWe/WhyWe';
import LicenseBar from './LicenseBar/LicenseBar';



import { benefits, servicesCards } from '../../components/data';


import implant from '../../assets/images/anyridge.png';



function Homepage() {


	return (
		<div>
			<Banner />
            <ServicesCards props={servicesCards} />

			<div className="all-services-btn">
				<Link to="/services">
					<button className="btn-hover">Все услуги</button>
				</Link>
			</div>
			<DoctorsBanner />
			<LicenseBar />
            <WhyWe props={benefits} />
		</div>
	);
}
export default Homepage;
