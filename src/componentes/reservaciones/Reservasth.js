import React, { useContext, useEffect } from "react";
import ReservaContext from "../../contexto/reservacion/reservaContext.js";
import Reservastd from "./Reservastd.js";

const Reservasth = () => {
	const reservaContext = useContext(ReservaContext);
	const { traerReservasRec, reservaciones } = reservaContext;
	const reservasLength = Object.keys(reservaciones).length;

	useEffect(() => {
		if (reservasLength === 0) {
			traerReservasRec();
		}
	}, [reservaciones]);
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
						<Reservastd key={res.id} reserva={res} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Reservasth;
