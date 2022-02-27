import {
	RESERVACIONES,
	RESERVACION,
	MODAL,
	LOADING,
	CLIENTE,
	TARIFAS,
} from "../types.js";

const cargoReducer = (state, action) => {
	switch (action.type) {
		case "CUENTA":
			return{
				...state,
				cuenta: action.payload,
			}
		case MODAL:
			return {
				...state,
				modal: action.payload,
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
		case "TEST2":
			return{
				...state,
				cargos: action.payload,
			}
		default:
			return state;
	}
};
export default cargoReducer;