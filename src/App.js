import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Realstyle.scss";
//componentes
import Header from "./componentes/elementos/Header.js";
import Alert from "./componentes/elementos/Alert";
//rutas
import Inicio from "./componentes/rutas/Inicio.js";
import Reservaciones from "./componentes/rutas/Reservaciones.js";
import Cuentas from "./componentes/rutas/Cuentas"
import Cargos from "./componentes/rutas/Cargos"
//states
import ReservaState from "./contexto/reservacion/ReservaState.js";
import AlertState from "./contexto/alerta/AlertState.js";
import CuentaState from "./contexto/cuenta/cuentaState"
import CargoState from "./contexto/cargo/cargoState"

function App() {
	return (
		<AlertState>
			<ReservaState>
				<CuentaState>
				<CargoState>
				
				<Router>
					<div className='App'>
						<Header />
						<div className='container'>
							<Alert />
							<Routes>
								<Route exact path='/' element={<Inicio />} />
								<Route exact path='/reservaciones' element={<Reservaciones />} />
								<Route exact path='/cuentas' element = { <Cuentas />} />
								<Route exact path='/cargos' element = { <Cargos /> } />
							</Routes>
						</div>
					</div>
				
				</Router>
				</CargoState>
				</CuentaState>
			</ReservaState>
		</AlertState>
	);
}

export default App;
