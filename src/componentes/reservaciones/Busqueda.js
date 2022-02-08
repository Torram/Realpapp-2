import React, { useContext, useState } from "react";
import ReservaContext from "../../contexto/reservacion/reservaContext.js";

const Busqueda = () => {
	const reservaContext = useContext(ReservaContext);
	const { traerReservasApellido, traerReservasFolio, traerReservasFechas } =
		reservaContext;

	const [busqApellido, setBusqApellido] = useState("");
	const [busqFolio, setBusqFolio] = useState("");
	const [range1, setRange1] = useState("");
	const [range2, setRange2] = useState("");

	const onChangeBusqApellido = (e) => setBusqApellido(e.target.value);
	const onChangeBusqFolio = (e) => setBusqFolio(e.target.value);
	const onChangeRange1 = (e) => setRange1(e.target.value);
	const onChangeRange2 = (e) => setRange2(e.target.value);

	const SubmitBusqApellido = (e) => {
		e.preventDefault();
		traerReservasApellido(busqApellido);
	};

	const SubmitBusqFolio = (e) => {
		e.preventDefault();
		traerReservasFolio(busqFolio);
	};

	const getDateRange = () => {
		let body = {};
		body.Rinicio = range1;
		body.Rend = range2;
		return body;
	};
	const SubmitBusqFechas = (e) => {
		e.preventDefault();
		let bodyx = getDateRange();
		traerReservasFechas(bodyx);
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
