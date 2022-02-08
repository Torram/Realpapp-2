import React from "react";
import { Link } from "react-router-dom";
import logoc from "../../assets/log-circulo.png";
const Header = () => {
	return (
		<header>
			<nav className='container text-right'>
				<div className='branding'>
					<img src={logoc} alt='Logo nav' />

					<h1 className='mr-a'>
						<Link to='/'>Sistema Real Plaza</Link>
					</h1>

					<Link to='/reservaciones'>
						<p>Reservaciones</p>
					</Link>
					<i className='fas fa-sign-in-alt'></i>
				</div>
			</nav>
		</header>
	);
};

export default Header;
