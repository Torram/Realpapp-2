import React, { useContext, useState, useEffect } from "react";
import ReservaContext from "../../contexto/reservacion/reservaContext.js";
import AlertContext from "../../contexto/alerta/alertContext.js";

const NuevaReserva = () => {
	const hoyrw = new Date();
	const hoyr = new Date(hoyrw.getTime() - hoyrw.getTimezoneOffset() * 60000);
	const hoy = hoyr.toISOString().split("T")[0];
	////////////////////
	//contexto
	const reservaContext = useContext(ReservaContext);
	const {
		nuevaReserva,
		nuevoCliente,
		nuevaEmpresa,
		traerTarifas,
		tarifas,
		traerReservasRec,
		unSetReservas,
	} = reservaContext;
	const alertContext = useContext(AlertContext);
	const { setAlert } = alertContext;

	///////////////////
	//state
	const [nombre, setNombre] = useState("");
	const [apellido, setApellido] = useState("");
	const [grupo, setGrupo] = useState("");
	const [llegada, setLlegada] = useState(hoy);
	const [hora, setHora] = useState("11:30");
	const [salida, setSalida] = useState("");
	const [tarifa, setTarifa] = useState("sencilla");
	const [personas, setPersonas] = useState(1);
	const [habitaciones, setHabitaciones] = useState(1);
	const [info, setInfo] = useState("");
	const [factura, setFactura] = useState(false); // tooggle clientes
	const [rfc, setRfc] = useState("");
	const [rsocial, setRsocial] = useState("");
	const [direccion, setDireccion] = useState("");
	const [cp, setCp] = useState("");
	const [ciudad, setCiudad] = useState("");
	const [estado, setEstado] = useState("");
	const [mail, setMail] = useState("");
	const [tel, setTel] = useState("");
	const [cliente_id, setCliente_id] = useState(null);
	const [empresa_id, setEmpresa_id] = useState(null);
	const [usr, setUsr] = useState(null);

	///////////////////
	//onChange inputs
	const onChangeNombre = (e) => setNombre(e.target.value);
	const onChangeApellido = (e) => setApellido(e.target.value);
	const onChangeGrupo = (e) => setGrupo(e.target.value);
	const onChangeLlegada = (e) => setLlegada(e.target.value);
	const onChangeHora = (e) => setHora(e.target.value);
	const onChangeSalida = (e) => setSalida(e.target.value);
	const onChangeTarifa = (e) => setTarifa(e.target.value);
	const onChangePersonas = (e) => setPersonas(e.target.value);
	const onChangeHabitaciones = (e) => setHabitaciones(e.target.value);
	const onChangeInfo = (e) => setInfo(e.target.value);
	const onChangeFactura = (e) =>
		e.target.checked ? setFactura(true) : setFactura(false); // toogle clienteszzz
	const onChangeRfc = (e) => setRfc(e.target.value);
	const onChangeRsocial = (e) => setRsocial(e.target.value);
	const onChangeDireccion = (e) => setDireccion(e.target.value);
	const onChangeCp = (e) => setCp(e.target.value);
	const onChangeCiudad = (e) => setCiudad(e.target.value);
	const onChangeEstado = (e) => setEstado(e.target.value);
	const onChangeMail = (e) => setMail(e.target.value);
	const onChangeTel = (e) => setTel(e.target.value);

	///////////////////////
	// metodo para crear el body del cliente
	const getClienteData = () => {
		const clienteObj = {};
		clienteObj.nombre = nombre;
		clienteObj.apellido = apellido;
		grupo.length === 0 ? (clienteObj.grupo = null) : (clienteObj.grupo = grupo);
		clienteObj.direccion = direccion;
		clienteObj.ciudad = ciudad;
		clienteObj.estado = estado;
		clienteObj.mail = mail;
		tel.length > 0 && (clienteObj.tel = tel);
		return clienteObj;
	};
	//////////////////////////////
	//metodo para crear el body de la empresa
	const getEmpresaData = () => {
		if (factura) {
			const empresaObj = {};
			empresaObj.rfc = rfc;
			empresaObj.rsocial = rsocial;
			empresaObj.direccion = direccion;
			empresaObj.cp = cp;
			empresaObj.ciudad = ciudad;
			empresaObj.estado = estado;
			empresaObj.mail = mail;
			tel.length > 0 && (empresaObj.tel = tel);
			return empresaObj;
		} else {
			return false;
		}
	};

	///////////////////////
	// metodo para crear el body de la reserva
	const getReservaData = () => {
		const reservaObj = {};
		reservaObj.llegada = llegada;
		reservaObj.hora = hora;
		reservaObj.salida = salida;
		reservaObj.tarifa = tarifa;
		reservaObj.personas = personas;
		reservaObj.habitaciones = habitaciones;
		reservaObj.grupo = grupo;
		info.length > 0 && (reservaObj.info = info);
		reservaObj.cliente_id = cliente_id;
		reservaObj.empresa_id = empresa_id;
		reservaObj.ciudad = ciudad;
		reservaObj.estado = estado;
		reservaObj.reservo = usr;
		setUsr(null);
		return reservaObj;
	};

	///////////////////
	// métodos
	const submitReserva = async (ev) => {
		ev.preventDefault();
		let usr = await prompt("Ingrese su clave de usuario");
		setUsr(usr);
	};

	//////////////////
	//useEffect
	useEffect(() => {
		if (tarifas.length === 0) {
			traerTarifas();
		}
		//si submiteas usr se vuelve true
		if (usr !== null) {
			const reserva = async () => {
				let clienteObj = getClienteData();
				let empresaObj = getEmpresaData();
				let reservaObj = getReservaData();
				// dispara nuevo cliente
				const cResp = await nuevoCliente(clienteObj);
				//si llega se genera el nuevo cliente capturamos en id
				if (cResp.success) {
					setCliente_id(cResp.data.id);
					reservaObj.cliente_id = cResp.data.id;
					//si requiere factura factura será true
					if (factura) {
						//disparamos la creacion de nueva empresa y si jala capturamos en el id
						const eResp = await nuevaEmpresa(empresaObj);
						if (eResp.success) {
							setEmpresa_id(eResp.data.id);
							reservaObj.empresa_id = eResp.data.id;
							const rResp = await nuevaReserva(reservaObj);
							rResp.success
								? setAlert(
										`Reservación creada con exito para ${nombre + " " + apellido}`,
										"success"
								  )
								: setAlert(`Falló la reserva : ${rResp.messages}`, "danger");
						}
					} else {
						const rResp = await nuevaReserva(reservaObj);
						rResp.success
							? setAlert(
									`Reservación creada con exito para ${nombre + " " + apellido}`,
									"success"
							  )
							: setAlert(`Falló la reserva : ${rResp.messages}`, "danger");
					}
				} else {
					setAlert(cResp.messages, "danger");
				}
			};
			reserva();
			unSetReservas();
			traerReservasRec();
			setUsr(null);
		}
		//eslint-disable-next-line
	}, [usr, tarifas]);

	////////////////////////////////////////////////////////////////////////////
	//return salida return salida return salida
	return (
		<div id='nuevaReserva'>
			<form action='' onSubmit={submitReserva} className='card'>
				<section className='grid-6'>
					{/*Columna Uno*/}
					<article className='columna gspan-3'>
						{/*Campo nombre*/}
						<label htmlFor='nombre'>Nombre</label>
						<input
							name='nombre'
							type='text'
							value={nombre}
							onChange={onChangeNombre}
							className=''
							required
						/>
						{/*Campo apellido*/}
						<label htmlFor='apellido'>Apellido</label>
						<input
							name='apellido'
							type='text'
							value={apellido}
							onChange={onChangeApellido}
							className=''
							required
						/>
					</article>

					{/*Columna Dos*/}
					<article className='columna'>
						{/*Campo llegada*/}
						<label htmlFor='llegada'>Llegada</label>
						<input
							name='llegada'
							type='date'
							value={llegada}
							onChange={onChangeLlegada}
							min={hoy}
							max='2122-01-01'
							className=''
							required
						/>
						{/*Campo tarifa*/}
						<label htmlFor='tarifa'>Tarifa</label>
						<select name='tarifa' id='' onChange={onChangeTarifa}>
							{tarifas.map((row) => {
								return (
									<option key={row.id} value={row.clave}>
										{row.clave}
									</option>
								);
							})}
						</select>
					</article>
					{/*Columna tress*/}
					<article className='columna'>
						{/*Campo hora*/}
						<label htmlFor='hora'>Hora</label>
						<input
							name='hora'
							type='time'
							value={hora}
							onChange={onChangeHora}
							className=''
							required
						/>

						{/*Campo personas*/}
						<label htmlFor='personas'>No de personas</label>
						<input
							type='number'
							name='personas'
							value={personas}
							onChange={onChangePersonas}
							min='1'
							max='300'
						/>
					</article>
					<article className='columna'>
						{/*Campo salida*/}
						<label htmlFor='salida'>Salida</label>
						<input
							name='salida'
							type='date'
							value={salida}
							onChange={onChangeSalida}
							className=''
							min={hoy}
							max={"2123-01-01"}
							required
						/>
						{/*Campo habitaciones*/}
						<label htmlFor='habitaciones'>Habitaciones</label>
						<input
							type='number'
							name='habitaciones'
							value={habitaciones}
							onChange={onChangeHabitaciones}
							id=''
							className=''
							min='1'
							max='50'
						/>
					</article>
				</section>
				<section className='grid-2'>
					<article>
						{/*Campo mail*/}
						<label htmlFor='mail'>Email</label>
						<input
							name='mail'
							type='text'
							value={mail}
							onChange={onChangeMail}
							className=''
							required
						/>
					</article>
					<article>
						{/*Campo tel*/}
						<label htmlFor='tel'>Teléfono</label>
						<input
							name='tel'
							type='number'
							value={tel}
							onChange={onChangeTel}
							className=''
						/>
					</article>
				</section>
				<section className='grid-3'>
					<div>
						{/*Campo grupo*/}
						<label htmlFor='grupo'>Grupo</label>
						<input
							name='grupo'
							type='text'
							value={grupo}
							onChange={onChangeGrupo}
							className=''
						/>
					</div>
					<div>
						{/*Campo rfc*/}
						<label htmlFor='ciudad'>Ciudad</label>
						<input
							name='ciudad'
							type='text'
							value={ciudad}
							onChange={onChangeCiudad}
							className=''
							maxLength='250'
							required
						/>
					</div>
					<div>
						{/*Campo estado*/}
						<label htmlFor='rfc'>Estado</label>
						<input
							name='estado'
							type='text'
							value={estado}
							onChange={onChangeEstado}
							className=''
							maxLength='255'
							required
						/>
					</div>
				</section>
				<section className=''>
					<article>
						<input
							type='checkbox'
							value='1'
							name='factura'
							onChange={onChangeFactura}
						/>
						<label htmlFor='factura' className='m-1'>
							Requiere factura
						</label>
					</article>
				</section>
				{factura ? (
					<section id='cliente' className='grid-2'>
						<article>
							{/*Campo rfc*/}
							<label htmlFor='rfc'>R.F.C.</label>
							<input
								name='rfc'
								type='text'
								value={rfc}
								onChange={onChangeRfc}
								className=''
								maxLength='13'
								required
							/>
						</article>
						<article>
							{/*Campo rsocial*/}
							<label htmlFor='rsocial'>Razón social</label>
							<input
								name='rsocial'
								type='text'
								value={rsocial}
								onChange={onChangeRsocial}
								className=''
							/>
						</article>
						<section className='grid-3 gspan-2'>
							<div className='gspan-2'>
								<article className='gspan-2'>
									{/*Campo direccion*/}
									<label htmlFor='rsocial'>Dirección</label>
									<input
										name='direccion'
										type='text'
										value={direccion}
										onChange={onChangeDireccion}
										className=''
									/>
								</article>
							</div>
							<div>
								{/*Campo cp*/}
								<label htmlFor='cp'>Código Postal</label>
								<input
									name='cp'
									type='number'
									maxLength='5'
									value={cp}
									onChange={onChangeCp}
									className=''
								/>
							</div>
						</section>
					</section>
				) : null}
				<section>
					<label htmlFor='info'>Comentarios</label>
					<textarea
						name='info'
						id=''
						rows='4'
						value={info}
						onChange={onChangeInfo}
					></textarea>
					<input
						type='submit'
						className='btn btn-dark btn-block my'
						value='Crear Reservacion'
					/>
				</section>
			</form>
		</div>
	);
};

export default NuevaReserva;
