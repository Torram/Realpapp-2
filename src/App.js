import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Realstyle.scss";
//componentes
import Header from "./componentes/elementos/Header.js";
import Alert from "./componentes/elementos/Alert";
//rutas
import Inicio from "./componentes/rutas/Inicio.js";
import Reservaciones from "./componentes/rutas/Reservaciones.js";
//states
import ReservaState from "./contexto/reservacion/ReservaState.js";
import AlertState from "./contexto/alerta/AlertState.js";

function App() {
	return (
		<AlertState>
			<ReservaState>
				<Router>
					<div className='App'>
						<Header />
						<div className='container'>
							<Alert />
							<Routes>
								<Route exact path='/' element={<Inicio />} />
								<Route exact path='/reservaciones' element={<Reservaciones />} />
							</Routes>
						</div>
					</div>
				</Router>
			</ReservaState>
		</AlertState>
	);
}

export default App;
