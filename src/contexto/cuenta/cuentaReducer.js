import {test} from "../../componentes/cuentas/Test"
import {
	RESERVACIONES,
	RESERVACION,
	MODAL,
	LOADING,
	CLIENTE,
	TARIFAS,
} from "../types.js";

const cuentaReducer = (state, action) => {
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
		case "TEST":
			return{
				...state,
				cuentas: test,
			}
		default:
			return state;
	}
};
export default cuentaReducer;
