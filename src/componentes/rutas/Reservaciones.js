import React, { useState, useContext } from "react";
import NuevaReserva from "../reservaciones/NuevaReserva.js";
import Reservasth from "../reservaciones/Reservasth.js";
import Busqueda from "../reservaciones/Busqueda.js";
import ReservaSingle from "../reservaciones/ReservaSingle.js";
import ReservaContext from "../../contexto/reservacion/reservaContext.js";

const Reservaciones = () => {
	const reservaContext = useContext(ReservaContext);
	const { modal } = reservaContext;
	const [newReserva, setNewReserva] = useState(false);

	const toggleNewReserva = () => {
		if (newReserva) {
			setNewReserva(false);
		} else {
			setNewReserva(true);
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
		<div id='reservaciones' className='container'>
			<h1>
				Reservaciones
				<span className='floatRight'>
					{newReserva ? (
						<i className='fas fa-minus-square' onClick={toggleNewReserva}></i>
					) : (
						<i className='fas fa-plus-square' onClick={toggleNewReserva}></i>
					)}
				</span>
			</h1>
			{newReserva && <NuevaReserva />}
			<Busqueda />
			<Reservasth />
			{modal && <ReservaSingle />}
		</div>
	);
};

export default Reservaciones;
