import React, { useState } from "react";
import Cuentasth from "../cuentas/Cuentasth.js";

export const Cuentas = () => {
	const [newCargo, setNewCargo] = useState(false);

	const toggleNewCargo = () => {
		if (newCargo) {
			setNewCargo(false);
		} else {
			setNewCargo(true);
		}
	};

	/*
	document.addEventListener("keydown", (e) => {
		e.preventDefault();
		if (e.key === "n") {
			setTimeout(toggleNewReserva(), 200);
		}
		return false;
	});
*/
	return (
		<div id='cuentas' className='container'>
			<h1>
				Cuentas
				<span className='floatRight'>
					{newCargo ? (
						<i className='fas fa-minus-square' onClick={toggleNewCargo}></i>
					) : (
						<i className='fas fa-plus-square' onClick={toggleNewCargo}></i>
					)}
				</span>
				
			</h1>
			<Cuentasth />				
			</div>
	);
};

export default Cuentas;
