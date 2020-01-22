import React, { Fragment, useState } from 'react';

function Main(props) {

    const [cantidad, setCantidad] = useState(0);

    const [error, setError] = useState(false);

    return (
       <Fragment>
           <h2>Presupuesto</h2>

           <form action="">
               <input type="number" 
               name="presupuesto" 
               id="presupuesto" 
               className="u-full-width"
               placeholder="Agrega presupuesto"
               onChange={ e => setCantidad(parseInt(e.target.value))}
               />

               <input type="submit" value="Guardar presupuesto" className="button-primary u-full-width"/>
           </form>
       </Fragment>
    );
}

export default Main;