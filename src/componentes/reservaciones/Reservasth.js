import React, { useContext, useEffect } from "react";
import ReservaContext from "../../contexto/reservacion/reservaContext.js";
import Reservastd from "./Reservastd.js";
import Spinner from "../elementos/Spinner.js";
import AlertContext from "../../contexto/alerta/alertContext.js";

const Reservasth = () => {
	const reservaContext = useContext(ReservaContext);
	const alertContext = useContext(AlertContext);
	const { traerReservasRec, reservaciones } = reservaContext;
	const { setAlert } = alertContext;
	const reservasLength = Object.keys(reservaciones).length;

	useEffect(() => {
		if (reservasLength === 0) {
			traerReservasRec();
		}
	}, [reservaciones]);

	if (reservasLength === 0) {
		return <Spinner />;
	} else {
		return (
			<div className=''>
				<table className='my-1 w-100'>
					<thead>
						<tr>
							<th>Folio</th>
							<th>Nombre</th>
							<th>llegada</th>
							<th>Hora</th>
							<th>Personas</th>
							<th>Tarifa</th>
							<th>Grupo</th>
						</tr>
					</thead>
					<tbody>
						{reservaciones.map((res) => (
							<Reservastd key={res.folio} reserva={res} />
						))}
					</tbody>
				</table>
			</div>
		);
	}
};

export default Reservasth;
