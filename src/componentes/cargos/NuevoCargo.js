import React, {useState} from "react";

const NuevoCargo = () => {

    const [usr, setUsr] = useState(null);
    
    const useField = ({type, name}) => {
        const [value, setValue] = useState('')
        const onChange = event => {
            setValue(event.target.value)
        }
        return{
            type, value, name, onChange
        }
    }

    ////////////////////
	//contexto
	
    ///////////////////
	//state
	
    ///////////////////
	//onChange inputs
	
    ///////////////////
	// métodos
	const submitCargo = async (ev) => {
		ev.preventDefault();
		let usr = await prompt("Ingrese su clave de usuario");
		setUsr(usr);
	};

    const habitacion = useField({type:'text',name:'habitacion'});
    const concepto = useField({type:'text', name:'concepto'});
    const importe = useField ({type:'number', name:'importe'});
    const comentario = useField({type:'text', name:'comentario'});
    const hora = useField({type:'time', name:'hora'});
    const fecha = useField({type:'date',name:'fecha'});

    return (
        <div id='nuevoCargo'>
            <form action='' onSubmit={submitCargo} className = 'card'>
                <section className='grid-6'>
                    {/*Columna Uno*/}
                    <article className='columna gspan-1'>
                        {/*Habitación*/}
                        <label htmlFor='habitacion'>Habitación</label>
                        <input
                            {...habitacion}
                            className=''
                            required
                        />
                    {/*/ */}

                    </article>
                    
                    {/*Columna Dos*/}
                    <article className='columna'>
                        <label htmlFor='fecha'>Fecha</label>
                        <input
                            {...fecha}
                            min='2022-02-01'
                            className=''
                            required
                        />
                    </article>
                    {/*Columna Tres*/}
                    <article className='columna'>
                        {/*Hora*/}
                        <label htmlFor='hora'>Hora</label>
                        <input
                            {...hora}
                            className=''
                            required
                        />
                    </article>
                </section>
                <section className='grid-4'>
                    <div>
                        {/*Concepto*/}
                        <label htmlFor='concepto'>Concepto</label>
                        <input 
                           {...concepto}
                            className=''
                            required
                        />
                    </div>
                    <div>
                        {/*importe*/}
                        <label htmlFor='importe'>Importe</label>
                        <input
                            {...importe}
                            className=''
                            required
                        />

                    </div>
                    <div>
                        {/*Comentario*/}
                        <label htmlFor='comentario'>Comentario</label>
                        <input
                            {...comentario}
                            className=''
                        />
                    </div>
                </section>
            </form>
        </div>
    )
}

export default NuevoCargo;