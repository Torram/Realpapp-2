import React, { useReducer } from "react";
import axios from "axios";
import ReservaContext from "./reservaContext.js";
import ReservaReducer from "./reservaReducer.js";
import { RESERVACIONES, RESERVACION, MODAL, CLIENTE, TARIFAS } from "../types";

const ReservaState = (props) => {
	///////////////////
	//State Inicial
	const initialState = {
		reservaciones: [],
		reservacion: {},
		loading: false,
		modal: false,
		cliente: {},
		tarifas: [],
	};

	////////////////////////////
	//traer access token
	const getaccessToken = async () => {
		return window.localStorage.getItem("access_token");
	};

	////////////////////////
	//se declara el dispatch
	const [state, dispatch] = useReducer(ReservaReducer, initialState);

	///////////////////////
	// Crear reserva
	const nuevaReserva = async (body) => {
		let feed = null;
		const resp = await axios
			.post(`/api/reservaciones`, body, {
				headers: { "Content-Type": "application/json" },
			})
			.then((resp) => {
				feed = resp.data;
			})
			.catch((error) => {
				feed = error.response;
			});
		return feed;
	};
	//////////////////////
	//crear cliente
	const nuevoCliente = async (body) => {
		const resp = await axios
			.post(`/api/clientes`, body, {
				headers: { "Content-Type": "application/json" },
			})
			.then((resp) => {
				return resp.data;
			})
			.catch((error) => {
				return error.response;
			});
	};
	/////////////////////
	// traerReservasRec
	const traerReservasRec = async () => {
		const resp = await axios
			.get(`/api/reservaciones`)
			.then((resp) => {
				dispatch({ type: RESERVACIONES, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	/////////////////////
	// traerReservasfolio
	const traerReservasApellido = async (apellido) => {
		const resp = await axios
			.get(`/api/reservaciones/busqueda/nombre/${apellido}`)
			.then((resp) => {
				dispatch({ type: RESERVACIONES, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	/////////////////////
	// traerReservasfolio
	const traerReservasFolio = async (folio) => {
		const resp = await axios
			.get(`/api/reservaciones/busqueda/folio/${folio}`)
			.then((resp) => {
				dispatch({ type: RESERVACIONES, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	/////////////////////
	// traerReservasRangp de fechas
	const traerReservasFechas = async (body) => {
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
	};

	//////////////////////
	// traer reserva single
	const traerReservaSingle = async (rid) => {
		const resp = await axios
			.get(`/api/reservaciones/${rid}`)
			.then((resp) => {
				dispatch({ type: RESERVACION, payload: resp.data.data });
				let rfci = resp.data.data.rfc;
				if (rfci !== null) {
					traerClientePorRfc(rfci);
				}
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	//////////////////////
	// traer cliente single
	const traerClienteSingle = async (rid) => {
		const resp = await axios
			.get(`/api/clientes/${rid}`)
			.then((resp) => {
				dispatch({ type: CLIENTE, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
		console.log(resp);
	};

	//////////////////////
	// traer cliente por RFC
	const traerClientePorRfc = async (rfc) => {
		const resp = await axios
			.get(`/api/clientes/rfc/${rfc}`)
			.then((resp) => {
				dispatch({ type: CLIENTE, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	//////////////////////
	// traer tarifas
	const traerTarifas = async () => {
		const resp = await axios
			.get(`/api/tarifas`)
			.then((resp) => {
				dispatch({ type: TARIFAS, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};
	// set modal
	const setModalOpen = () => {
		dispatch({ type: MODAL, payload: true });
	};
	// unset modal
	const unsetModalOpen = () => {
		dispatch({ type: MODAL, payload: false });
	};
	return (
		<ReservaContext.Provider
			value={{
				reservaciones: state.reservaciones,
				reservacion: state.reservacion,
				modal: state.modal,
				cliente: state.cliente,
				tarifas: state.tarifas,
				nuevaReserva,
				nuevoCliente,
				traerReservasRec,
				traerReservasApellido,
				traerReservasFolio,
				traerReservasFechas,
				traerReservaSingle,
				setModalOpen,
				unsetModalOpen,
				traerClienteSingle,
				traerClientePorRfc,
				traerTarifas,
			}}
		>
			{props.children}
		</ReservaContext.Provider>
	);
};

export default ReservaState;
