import React from "react";
import Nav from "./nav";
import TopBody from "./landing/topBody";
import MotivationBody from "./landing/motivationBody";
import CategoriesBody from "./landing/categoriesBody";
import MapBody from "./landing/mapBody";
import Footer from "./landing/footer";

const Home = () => {
	return (
		<div className="home-page">
			<Nav/>
			<TopBody/>
			<div className="main-bottom-page">
				<MotivationBody/>
				<CategoriesBody/>
				<MapBody/>
			</div>
			<Footer/>
		</div>
	)
}

export default Home;