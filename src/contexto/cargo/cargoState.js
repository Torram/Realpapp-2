import React, { useReducer } from "react";
import axios from "axios";
import CargoContext from "./cargoContext.js";
import CargoReducer from "./cargoReducer.js";
import {MODAL, CARGOS, CARGO, CARGOSID} from "../types";
import {test} from "../../componentes/cuentas/Test"

const CargoState = (props) => {
	//////////////////
	//State Inicial
	
	const initialState = {
		cargos: [],
		cargo: {},
		loading: false,
		modal: false,
	};

	////////////////////////////
	//traer access token
	const getaccessToken = async () => {
		return window.localStorage.getItem("access_token");
	};

	////////////////////////
	//se declara el dispatch
	const [state, dispatch] = useReducer(CargoReducer, initialState);

	///////////////////////
	// Añadir un Cargo
	const nuevoCargo = async (body) => {
		let feed = null;
		await axios
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
	};

	/////////////////////
	// editar cargo
	const editarCargo = async (body) => {
		let feed = null;
		await axios
			.get(`/api/cargos`)
			.then((resp) => {
				feed = resp.data;
			})
			.catch((error) => {
				console.log(error.response);
				feed = error.response;
			});
		return feed;
	};

	
	/////////////////////
	// traerCargosRec
	const traerCargosRec = async () => {
		await axios
			.get(`/api/cargos`)
			.then((resp) => {
				dispatch({ type: CARGOS, payload: resp.data.data });
				return resp.data;
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	//////////////////////
	// traer cargo single
	const traerCargoSingle = async (cid) => {
		await axios
			.get(`/api/cargos/${cid}`)
			.then((resp) => {
				dispatch({ type: CARGO, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
			dispatch({ type: "CARGO", payload: test[0]});
	};
	//////////////////////
	// traer cargos por cuenta

	const traerCargos = async (cuenta_id) => {
		await axios
			.get(`/api/cargos`)
			.then((resp) => {
				dispatch({ type: CARGOSID, payload: resp.data.data });
			})
			.catch((error) => {
				console.log(error.response);
			});
	};

	//////////////////////
	// TEST
	const prueba2 = () =>{
		dispatch({type:"TEST2", payload:test[0].cargos});
		
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
		<CargoContext.Provider
			value={{
				cargos: state.cargos,
				cargo: state.cargo,
				modal: state.modal,
				nuevoCargo,
				editarCargo,
				traerCargosRec,
				traerCargos,
				traerCargoSingle,
				setModalOpen,
				unsetModalOpen,
				prueba2,
			}}
		>
			{props.children}
		</CargoContext.Provider>
	);
};

export default CargoState;
