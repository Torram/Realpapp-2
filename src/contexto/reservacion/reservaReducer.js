import {
	RESERVACIONES,
	RESERVACION,
	MODAL,
	LOADING,
	CLIENTE,
	TARIFAS,
} from "../types.js";
const reservaReducer = (state, action) => {
	switch (action.type) {
		case RESERVACIONES:
			return {
				...state,
				reservaciones: action.payload,
				loading: false,
			};
		case RESERVACION:
			return {
				...state,
				reservacion: action.payload,
				loading: false,
			};
		case MODAL:
			return {
				...state,
				modal: action.payload,
			};
		case CLIENTE:
			return {
				...state,
				cliente: action.payload,
			};
		case LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case TARIFAS:
			return {
				...state,
				tarifas: action.payload,
			};
		default:
			return state;
	}
};
export default reservaReducer;
