import React, { useContext } from "react";
import ReservaContext from "../../contexto/reservacion/reservaContext";
import Spinner from "../elementos/Spinnermodal";
const ReservaSingle = () => {
	const reservaContext = useContext(ReservaContext);
	const { reservacion, unsetModalOpen } = reservaContext;
	const reservaLength = Object.keys(reservacion).length;

	const {
		id,
		nombre,
		apellido,
		llegada,
		salida,
		hora,
		tarifa,
		personas,
		habitaciones,
		grupo,
		info,
		rsocial,
		rfc,
		ciudad,
		estado,
		direccion,
		tel,
		mail,
	} = reservacion;
	const closeModal = () => {
		unsetModalOpen();
	};
	if (reservaLength === 0) return <Spinner />;
	return (
		<>
			<div className='modalOver' />
			<div id={id} className='grid-4 modal smallgapx'>
				<h2 className='gspan-4'>
					Reservación: {id}{" "}
					<span className='floatRight'>
						<i className='fas fa-times-circle' onClick={closeModal}></i>
					</span>
				</h2>
				<div className='gspan-2'>
					<p className='small bold'>Nombre</p>
					<p className='lead preEditable my-0'>{nombre}</p>

					<p className='small bold'>Apellido</p>
					<p className='lead preEditable my-0'>{apellido}</p>

					<p className='small bold'>Grupo</p>
					<p className='lead preEditable my-0'>{grupo}</p>

					<p className='small bold'>Comentarios</p>
					<p className='lead preEditable my-0'>{info}</p>
				</div>
				<div className='text-right'>
					<p className='small bold'>Tarifa</p>
					<p className='lead preEditable my-0'>{tarifa}</p>

					<p className='small bold'>No.personas</p>
					<p className='lead preEditable my-0'>{personas}</p>

					<p className='small bold'>No. habitaciones</p>
					<p className='lead preEditable my-0'>{habitaciones}</p>

					<p className='small bold'>Ciudad</p>
					<p className='lead preEditable my-0'>{ciudad}</p>
				</div>
				<div className='text-right'>
					<p className='small bold'>LLegada</p>
					<p className='lead preEditable my-0'>{llegada}</p>

					<p className='small bold'>Salida</p>
					<p className='lead preEditable my-0'>{salida}</p>

					<p className='small bold'>Hora</p>
					<p className='lead preEditable my-0'>{hora}</p>

					<p className='small bold'>Estado</p>
					<p className='lead preEditable my-0'>{estado}</p>
				</div>
				{typeof rfc !== undefined && (
					<>
						<h2 className='gspan-4'>Facturación</h2>
						<div className='gspan-2'>
							<p className='small bold'>R.F.C</p>
							<p className='lead preEditable my-0'>{rfc}</p>
						</div>
						<div className='gspan-2'>
							<p className='small bold'>Razon Social</p>
							<p className='lead preEditable my-0'>{rsocial}</p>
						</div>
						<div className='gspan-4'>
							<p className='small bold'>Direccion</p>
							<p className='lead preEditable my-0'>{direccion}</p>
						</div>
						<div className='gspan-2'>
							<p className='small bold'>Teléfono</p>
							<p className='lead preEditable my-0'>{tel}</p>
						</div>
						<div className='gspan-2'>
							<p className='small bold'>Email</p>
							<p className='lead preEditable my-0'>{mail}</p>
						</div>
					</>
				)}
			</div>
		</>
	);
};
export default ReservaSingle;
