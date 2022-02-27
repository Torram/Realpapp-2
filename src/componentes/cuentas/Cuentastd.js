import React, { useContext } from "react";
import CuentaContext from "../../contexto/cuenta/cuentaContext.js";
import PropTypes from "prop-types";

const Cuentastd = ({
	cuenta: { folio, nombre, apellido, fechai, habitacion, subtotal, total },
}) => {
	const cuentaContext = useContext(CuentaContext);
	const { traerCuentaSingle, test, setModalOpen } = cuentaContext;
	const llegadaF = fechai.split("-");
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
	const oCtraerCuenta = (e) => {
		e.preventDefault();
		const resp = traerCuentaSingle(folio);
		resp.then(() => {
			setModalOpen();
		});
	};
	return (
		<tr onClick={oCtraerCuenta}>
			<td>{folio}</td>
            <td>{fllegada}</td>
			<td>{apellido + " " + nombre}</td>
			<td>{habitacion}</td>
			<td>{subtotal}</td>
			<td>{total}</td>
		</tr>
	);
};
Cuentastd.propTypes = {
	cuenta: PropTypes.object.isRequired,
};
export default Cuentastd;
