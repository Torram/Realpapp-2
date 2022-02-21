import React, { Fragment } from "react";
import spinner from "./spinner.gif";

const Spinner = () => (
	<Fragment>
		<div className='modalOver'>
			<div className='modal'>
				<img
					src={spinner}
					alt='cargando...'
					style={{ width: "200px", margin: "auto", display: "block" }}
				/>
			</div>
		</div>
	</Fragment>
);

export default Spinner;
