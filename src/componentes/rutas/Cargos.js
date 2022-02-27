import react, {useState} from "react";
import Cargosth from "../../componentes/cargos/Cargosth";
import NuevoCargo from "../cargos/NuevoCargo";

const Cargos = () => {

    const [newCargo, setNewCargo] = useState(false);

    const useField = ({type,name}) => {
        const [value, setValue] = useState('')
        const onChange = event => {
            setValue(event.target.value)
        }
        return{
            type,
            value,
            name,
            onChange
        }
    }

    const toggleNewCargo = () => {
		if (newCargo) {
			setNewCargo(false);
		} else {
			setNewCargo(true);
		}
	};

    return(
        <>
            <h1>
                Cargos
                
                <span className='floatRight'>
					{newCargo ? (
						<i className='fas fa-minus-square' onClick={toggleNewCargo}></i>
					) : (
						<i className='fas fa-plus-square' onClick={toggleNewCargo}></i>
					)}
				</span>
            </h1>
            {newCargo && <NuevoCargo/>}
            < Cargosth />
        </>
    );
}

export default Cargos;
