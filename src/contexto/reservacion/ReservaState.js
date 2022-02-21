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
		try {
			const resp = await axios.post(`/api/reservaciones`, body, {
				headers: { "Content-Type": "application/json" },
			});
			return resp.data;
		} catch (error) {
			return error.response.data;
		}
	};
	//////////////////////
	//crear cliente
	const nuevoCliente = async (body) => {
		try {
			const resp = await axios.post(`/api/clientes`, body, {
				headers: { "Content-Type": "application/json" },
			});
			return resp.data;
		} catch (error) {
			return error.response.data;
		}
	};
	//////////////////////
	//crear empresa
	const nuevaEmpresa = async (body) => {
		try {
			const resp = await axios.post(`/api/empresas`, body, {
				headers: { "Content-Type": "application/json" },
			});
			return resp.data;
		} catch (error) {
			return error.response.data;
		}
	};
	/////////////////////
	// traerReservasRec
	const traerReservasRec = async () => {
		try {
			const resp = await axios.get(`/api/reservaciones`);
			dispatch({ type: RESERVACIONES, payload: resp.data.data });
			return resp.data;
		} catch (error) {
			return error.response.data;
		}
	};

	/////////////////////
	// traerReservasfolio
	const traerReservasApellido = async (apellido) => {
		try {
			unSetReservas();
			const resp = await axios.get(
				`/api/reservaciones/busqueda/nombre/${apellido}`
			);
			dispatch({ type: RESERVACIONES, payload: resp.data.data });
			return resp.data;
		} catch (error) {
			return error.response.data;
		}
	};

	/////////////////////
	// traerReservasfolio
	const traerReservasFolio = async (folio) => {
		try {
			const resp = await axios.get(`/api/reservaciones/busqueda/folio/${folio}`);
			dispatch({ type: RESERVACIONES, payload: resp.data.data });
			return resp.data;
		} catch (error) {
			return error.response.data;
		}
	};

	/////////////////////
	// traerReservasRangp de fechas
	const traerReservasFechas = async (body) => {
		try {
			unSetReservas();
			const resp = await axios.post(`/api/reservaciones/busqueda/fechas/1`, body, {
				headers: { "Content-Type": "application/json" },
			});
			dispatch({ type: RESERVACIONES, payload: resp.data.data.reservas });
			return resp.data;
		} catch (error) {
			console.log(error.response.data);
			return error.response.data;
		}
	};

	//////////////////////
	// traer reserva single
	const traerReservaSingle = (rid) => {
		return new Promise((resolve, reject) => {
			axios
				.get(`/api/reservaciones/${rid}`)
				.then((resp) => {
					dispatch({ type: RESERVACION, payload: resp.data.data });
					resolve(resp.data);
				})
				.catch((error) => {
					reject(error.response);
				});
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
		dispatch({ type: RESERVACION, payload: {} });
	};
	// unset modal
	const unsetModalOpen = () => {
		dispatch({ type: MODAL, payload: false });
	};
	// unsetReservas
	const unSetReservas = () => {
		dispatch({ type: RESERVACIONES, payload: [] });
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
				nuevaEmpresa,
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
				unSetReservas,
			}}
		>
			{props.children}
		</ReservaContext.Provider>
	);
};

export default ReservaState;
