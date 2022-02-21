import React, { useContext } from "react";
import AlertContext from "../../contexto/alerta/alertContext";

const Alert = () => {
	const alertContext = useContext(AlertContext);
	const { alert } = alertContext;

	return (
		alert !== null && (
			<div className={`alerta alerta-${alert.type}`}>
				<i className={`fas fa-info-circle circle-${alert.type}`} />
				{alert.msg}
			</div>
		)
	);
};

export default Alert;
