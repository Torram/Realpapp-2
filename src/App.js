import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import "./Realstyle.scss";
//componentes
import Header from "./componentes/elementos/Header.js";
//rutas
import Inicio from "./componentes/rutas/Inicio.js";
import Reservaciones from "./componentes/rutas/Reservaciones.js";
//states
import ReservaState from "./contexto/reservacion/ReservaState.js";

function App() {
	return (
		<ReservaState>
			<Router>
				<div className='App'>
					<Header />
					<div className='container'>
						<Routes>
							<Route exact path='/' element={<Inicio />} />
							<Route exact path='/reservaciones' element={<Reservaciones />} />
						</Routes>
					</div>
				</div>
			</Router>
		</ReservaState>
	);
}

export default App;
