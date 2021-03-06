import React, { useContext } from "react";
import ReservaContext from "../../contexto/reservacion/reservaContext.js";
import PropTypes from "prop-types";

const Reservastd = ({
	reserva: { folio, nombre, apellido, llegada, hora, personas, tarifa, grupo },
}) => {
	const reservaContext = useContext(ReservaContext);
	const { traerReservaSingle, setModalOpen } = reservaContext;
	const llegadaF = llegada.split("-");
	const meses = [
		"dud",
		"Enero",
		"Feb",
		"Mar",
		"Abril",
		"Mayo",
		"Jun",
		"Jul",
		"Ago",
		"Sep",
		"Oct",
		"Nov",
		"Dic",
	];
	const fllegada =
		llegadaF[2] + "/" + meses[llegadaF[1].replace(/^0+/, "")] + "/" + llegadaF[0];

	const oCtraerReserva = async (e) => {
		e.preventDefault();
		setModalOpen();
		traerReservaSingle(folio);
	};
	return (
		<tr onClick={oCtraerReserva}>
			<td>{folio}</td>
			<td>{apellido + " " + nombre}</td>
			<td>{fllegada}</td>
			<td>{hora}</td>
			<td>{personas}</td>
			<td>{tarifa}</td>
			<td>{grupo}</td>
		</tr>
	);
};
Reservastd.propTypes = {
	reserva: PropTypes.object.isRequired,
};
export default Reservastd;
