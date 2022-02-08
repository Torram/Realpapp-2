import React, { useContext } from "react";
import ReservaContext from "../../contexto/reservacion/reservaContext";
const ReservaSingle = () => {
	const reservaContext = useContext(ReservaContext);
	const { reservacion, modal, unsetModalOpen, traerClientePorRfc, cliente } =
		reservaContext;
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
		factura,
		rfc,
		ciudad,
		estado,
	} = reservacion;
	const closeModal = () => {
		unsetModalOpen();
	};
	const { rsocial, direccion, tel, mail } = cliente;
	const rfc2 = cliente.rfc;

	if (modal !== true) return null;
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
				{factura === 1 && (
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
