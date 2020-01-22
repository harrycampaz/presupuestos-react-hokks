import React, { Fragment } from 'react';

function Main(props) {
    return (
       <Fragment>
           <h2>Presupuesto</h2>

           <form action="">
               <input type="number" 
               name="presupuesto" 
               id="presupuesto" 
               className="u-full-width"
               placeholder="Agrega presupuesto"
               onChange={}
               />

               <input type="submit" value="Guardar presupuesto" className="button-primary u-full-width"/>
           </form>
       </Fragment>
    );
}

export default Main;