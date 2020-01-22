import React, { Fragment, useState } from 'react';

function Main(props) {

    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);

    const addPresupuesto = e => {
        e.preventDefault();

        if(cantidad < 1 || cantidad === null){
            setError(true);
        }
    }
    return (
       <Fragment>
           <h2>Presupuesto</h2>

           <form action="" onSubmit={addPresupuesto}>
               <input type="number" 
               name="presupuesto" 
               id="presupuesto" 
               className="u-full-width"
               placeholder="Agrega presupuesto"
               onChange={ e => setCantidad(parseInt(e.target.value, 10))}
               />

               <input type="submit" value="Guardar presupuesto" className="button-primary u-full-width"/>
           </form>
       </Fragment>
    );
}

export default Main;