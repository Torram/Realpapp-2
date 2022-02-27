import React, { useContext } from "react";
import CargoContext from "../../contexto/cargo/cargoContext";
import PropTypes from "prop-types";

const Cargostd = ({
	cargo: { cuenta_id, 
			 fecha, 
			 habitacion, 
			 folio, 
			 concepto, 
			 referencia, 
			 importe, 
			 total,
			pagado },
}) => {
	const cargoContext = useContext(CargoContext);
	const { traerCargoSingle, setModalOpen } = cargoContext;
	const llegadaF = fecha.split("-");
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
	const oCtraerCargo = (e) => {
		e.preventDefault();
		const resp = traerCargoSingle(folio);
		resp.then(() => {
			setModalOpen();
		});
	};
	return (
		<tr onClick={oCtraerCargo}>
			<td>{cuenta_id}</td>
			<td>{fllegada}</td>
			<td>{habitacion}</td>
			<td>{folio}</td>
            <td>{concepto}</td>
			<td>{referencia}</td>
			<td>{importe}</td>
			<td>{total}</td>
			<td>{pagado ? ("SI"):("NO")}</td>
		</tr>
	);
};
Cargostd.propTypes = {
	cargo: PropTypes.object.isRequired,
};
export default Cargostd;
