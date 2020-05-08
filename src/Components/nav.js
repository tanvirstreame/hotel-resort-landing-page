import React from "react";

const Nav = () => {
	return (
		<div className="nav-component">
			<nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
				<span className="navbar-brand mb-0 h1">Aircnc</span>
				<div className="w-100 text-center" id="navbarText">
					<ul className="navbar-nav mr-auto float-right">
						<li className="nav-item active">
							<a className="nav-link text-uppercase" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-uppercase" href="#">Service</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-uppercase" href="#">Contact</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-uppercase" href="#">Features</a>
						</li>
					</ul>
					
				</div>
			</nav>
		</div>
	)
}

export default Nav;