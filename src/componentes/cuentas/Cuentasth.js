import React, { useContext, useEffect } from "react";
import CuentaContext from "../../contexto/cuenta/cuentaContext.js";
import Cuentastd from "./Cuentastd";
import "./Cuentasth.css"


const Cuentasth = () => {
	const cuentaContext = useContext(CuentaContext);
	const { prueba, cuentas } = cuentaContext;
	const cuentasLength = Object.keys(cuentas).length;

	useEffect(() => {
		if (cuentasLength === 0) {
			prueba();
		}
	}, ); 
	
	return (
		<>
		<div className=''>
			<table className='my-1 w-100'>
				<thead>
					<tr>
						<th>Cuenta</th>
						<th>Fecha</th>
						<th>Nombre</th>
						<th>Habitación</th>
						<th>Subtotal</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{cuentas.map((res) => (
						<Cuentastd key={res.folio} cuenta={res}/>
					)) }
					
				</tbody>
			</table>
		</div>
	</>
	);
};

export default Cuentasth;
