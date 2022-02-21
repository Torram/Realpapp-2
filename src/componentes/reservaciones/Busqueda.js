import React, { useContext, useState } from "react";
import ReservaContext from "../../contexto/reservacion/reservaContext.js";
import AlertContext from "../../contexto/alerta/alertContext.js";

const Busqueda = () => {
	const reservaContext = useContext(ReservaContext);
	const { traerReservasApellido, traerReservasFolio, traerReservasFechas } =
		reservaContext;

	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	const [busqApellido, setBusqApellido] = useState("");
	const [busqFolio, setBusqFolio] = useState("");
	const [range1, setRange1] = useState("");
	const [range2, setRange2] = useState("");

	const onChangeBusqApellido = (e) => setBusqApellido(e.target.value);
	const onChangeBusqFolio = (e) => setBusqFolio(e.target.value);
	const onChangeRange1 = (e) => setRange1(e.target.value);
	const onChangeRange2 = (e) => setRange2(e.target.value);

	const SubmitBusqApellido = async (e) => {
		e.preventDefault();
		const resp = await traerReservasApellido(busqApellido);
		resp.success
			? setAlert(
					`Se encontraro ${resp.data.length} reservaciones con esos parámetros`,
					"success"
			  )
			: setAlert(`No se encontraron reservaciones con esos parámetros`, "danger");
	};

	const SubmitBusqFolio = async (e) => {
		e.preventDefault();
		const resp = await traerReservasFolio(busqFolio);
		resp.success
			? setAlert(
					`Reservacion con folio ${resp.data[0].folio} encontrada`,
					"success"
			  )
			: setAlert(`No se encontró reservación con ese folio`, "danger");
	};

	const getDateRange = () => {
		let body = {};
		body.Rinicio = range1;
		body.Rend = range2;
		return body;
	};
	const SubmitBusqFechas = async (e) => {
		e.preventDefault();
		let bodyx = getDateRange();
		const resp = await traerReservasFechas(bodyx);
		resp.success
			? setAlert(
					`Se encontraro ${resp.data.reservas.length} reservaciones en ese rango`,
					"success"
			  )
			: setAlert(`No se encontraron reservaciones en ese rango`, "danger");
	};
	return (
		<>
			<section id='busqueda' className='grid-4'>
				<article className='busqueda busqFolio'>
					<form onSubmit={SubmitBusqFolio}>
						<label htmlFor='busqFolio'>Buscar por Folio</label>
						<input
							type='text'
							name='busqFolio'
							value={busqFolio}
							onChange={onChangeBusqFolio}
						/>
						<input
							type='submit'
							className='btn btn-dark btn-block my'
							value='Buscar'
						/>
					</form>
				</article>
				<article className='busqueda busqApellido'>
					<form onSubmit={SubmitBusqApellido}>
						<label htmlFor='busqApellido'>Buscar por Apellido</label>
						<input
							type='text'
							name='busqApellido'
							value={busqApellido}
							onChange={onChangeBusqApellido}
						/>
						<input
							type='submit'
							className='btn btn-dark btn-block my'
							value='Buscar'
						/>
					</form>
				</article>
				<article className='gspan-2'>
					<form onSubmit={SubmitBusqFechas}>
						<label>Buscar por Fechas</label>
						<div className='grid-2'>
							<input
								name='range1'
								type='date'
								value={range1}
								onChange={onChangeRange1}
								className=''
								required
							/>
							<input
								name='range2'
								type='date'
								value={range2}
								onChange={onChangeRange2}
								className=''
								required
							/>
						</div>
						<input
							type='submit'
							className='btn btn-dark btn-block my'
							value='Buscar'
						/>
					</form>
				</article>
			</section>
		</>
	);
};

export default Busqueda;
