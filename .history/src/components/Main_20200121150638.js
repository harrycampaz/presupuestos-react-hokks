import React, { Fragment, useState } from 'react';
import ErrorComponent from './ErrorComponent';

function Main(props) {

    const {setPresupuesto, setIsPresupuesto} = props;

    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);

    const addPresupuesto = e => {
        e.preventDefault();

        if (cantidad < 1 || isNaN(cantidad)) {
            setError(true);
            return;
        } 
        setError(false);
        setPresupuesto(cantidad);
        setIsPresupuesto(false);
    }
    return (
        <Fragment>
            <h2>Presupuesto</h2>

            {error ? <ErrorComponent mensaje= "Presupuesto incorrecto"/> : null}

            <form action="" onSubmit={addPresupuesto}>
                <input type="number"
                    name="presupuesto"
                    id="presupuesto"
                    className="u-full-width"
                    placeholder="Agrega presupuesto"
                    onChange={e => setCantidad(parseInt(e.target.value, 10))}
                />

                <input type="submit" value="Guardar presupuesto" className="button-primary u-full-width" />
            </form>
        </Fragment>
    );
}

export default Main;