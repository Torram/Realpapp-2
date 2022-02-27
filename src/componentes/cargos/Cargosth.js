import React, {useContext, useEffect} from "react";
import CargoContext from "../../contexto/cargo/cargoContext";
import CuentaContext from "../../contexto/cuenta/cuentaContext";
import Cargostd from "./Cargostd";
import Spinner from "../elementos/Spinner";

const Cargosth = () => {
    const cargoContext = useContext(CargoContext);
    const {cargos, prueba2} = cargoContext;
    const {traerCargosRec} = cargoContext;
   
    /////////////////////////////////////////////
    const cuentaContext = useContext(CuentaContext);
    const {prueba,cuentas} = cuentaContext;
    const cuentasLength = Object.keys(cuentas).length;
    ////////////////////////////////////////////

    const cargosLength = Object.keys(cargos).length;

    useEffect(() => {
        if(cargosLength === 0){
            traerCargosRec();
            if (cuentasLength === 0) {
                prueba();
                prueba2();
            }
        }
    },[cargos])

    if (cargosLength === 0)
        return <Spinner />

    return(
        <>
            <div className=''>
                <table id='car'>
                    <thead id='car'> 
                        <tr id='car'>
                            <th id='car'>Id Cuenta</th>
                            <th id='car'>Fecha</th>
                            <th id='car'>Habitación</th>
                            <th id='car'>Id</th>
                            <th id='car'>Concepto</th>
                            <th id='car'>Referencia</th>
                            <th id='car'>Importe</th> 
                            <th id='car'>Total</th>
                            <th id='car'>Pagado</th>
                        </tr>                       
                    </thead>
                    <tbody id='car'>
                        {cargos.map((res) => (
                            <Cargostd key={res.folio} cargo={res}/>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Cargosth;