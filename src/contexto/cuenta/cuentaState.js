import React, { useReducer } from "react";
import axios from "axios";
import CuentaContext from "./cuentaContext.js";
import CuentaReducer from "./cuentaReducer.js";
import { MODAL} from "../types";
import {test} from "../../componentes/cuentas/Test"

const CuentaState = (props) => {
	//////////////////
	//State Inicial
	
	const initialState = {
		cuentas: [],
		cuenta: {},
		loading: false,
		modal: false,
		cargo: {},
	};

	////////////////////////////
	//traer access token
	const getaccessToken = async () => {
		return window.localStorage.getItem("access_token");
	};

	////////////////////////
	//se declara el dispatch
	const [state, dispatch] = useReducer(CuentaReducer, initialState);

	///////////////////////
	// Añadir un Cargo
	/*const nuevoCargo = async (body) => {
		let feed = null;
		const resp = await axios
			.post(`/api/cargos`, body, {
				headers: { "Content-Type": "application/json" },
			})
			.then((resp) => {
				feed = resp.data;
			})
			.catch((error) => {
				feed = error.response;
			});
		return feed;
	};*/
	
	/////////////////////
	// traerCuentasRec
	/*const traerCuentasRec = async () => {
		const resp = await axios
			.get(`/api/cuentas`)
			.then((resp) => {
				dispatch({ type: RESERVACIONES, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};*/

	/////////////////////
	// traerCuentasApellido
	/*const traerReservasApellido = async (apellido) => {
		const resp = await axios
			.get(`/api/reservaciones/busqueda/nombre/${apellido}`)
			.then((resp) => {
				dispatch({ type: RESERVACIONES, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};*/

	/////////////////////
	// traerCuentasfolio
	/*const traerCuentasFolio = async (folio) => {
		const resp = await axios
			.get(`/api/reservaciones/busqueda/folio/${folio}`)
			.then((resp) => {
				dispatch({ type: RESERVACIONES, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};*/

	/////////////////////
	// traerCuentasRango de fechas
	/*const traerCuentasFechas = async (body) => {
		const response = await axios
			.post(`/api/reservaciones/busqueda/fechas/1`, body, {
				headers: { "Content-Type": "application/json" },
			})
			.then((resp) => {
				console.log(resp.data);
				dispatch({ type: RESERVACIONES, payload: resp.data.data.reservas });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};*/

	//////////////////////
	// traer cuenta single
	const traerCuentaSingle = async (cid) => {
		/*const resp = await axios
			.get(`/api/cuentas/${cid}`)
			.then((resp) => {
				dispatch({ type: CUENTA, payload: resp.data.data });
				let rfci = resp.data.data.rfc;
				if (rfci !== null) {
					traerClientePorRfc(rfci);
				}
			})
			.catch((error) => {
				console.log(error.response);
			});*/
			dispatch({ type: "CUENTA", payload: test[0]});
	};

	//////////////////////
	// traer cliente single
	/*const traerClienteSingle = async (rid) => {
		const resp = await axios
			.get(`/api/clientes/${rid}`)
			.then((resp) => {
				dispatch({ type: CLIENTE, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
		console.log(resp);
	};*/

	//////////////////////
	// traer cliente por RFC
	/*const traerClientePorRfc = async (rfc) => {
		const resp = await axios
			.get(`/api/clientes/rfc/${rfc}`)
			.then((resp) => {
				dispatch({ type: CLIENTE, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};*/

	//////////////////////
	// traer tarifas
	/*const traerTarifas = async () => {
		const resp = await axios
			.get(`/api/tarifas`)
			.then((resp) => {
				dispatch({ type: TARIFAS, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};*/

	//////////////////////
	// TEST
	const prueba = () =>{
		dispatch({type:"TEST"});
		
	}

	// set modal
	const setModalOpen = () => {
		dispatch({ type: MODAL, payload: true });
	};
	// unset modal
	const unsetModalOpen = () => {
		dispatch({ type: MODAL, payload: false });
	};
	return (
		<CuentaContext.Provider
			value={{
				cuentas: state.cuentas,
				cuenta: state.cuenta,
				modal: state.modal,
				cargo: state.cargo,
				/*nuevaReserva,
				nuevoCliente,
				traerReservasRec,
				traerReservasApellido,
				traerReservasFolio,
				traerReservasFechas,
				traerReservaSingle,
				traerClienteSingle,
				traerClientePorRfc,
				traerTarifas,*/
				traerCuentaSingle,
				setModalOpen,
				unsetModalOpen,
				prueba,
			}}
		>
			{props.children}
		</CuentaContext.Provider>
	);
};

export default CuentaState;
