import React from 'react';
import Gasto from './Gasto';

function ListGasto(props) {

    const {gastos, presupuesto, setGastos, setRestante} = props;

    const deleteGastos = e => {

        const newGasto = gastos.filter(onGasto => onGasto.id !== e);
        console.log('gastos', newGasto);
        setGastos(newGasto);

        const sumaGastos = newGasto.reduce((suma, gasto) => {
            return suma + gasto.cantidadGasto;
          }, 0);

        setRestante(presupuesto - sumaGastos);
        
    }

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto 
                key={gasto.id}
                gasto={gasto} deleteGastos = {deleteGastos}/>
            ))}
        </div>
    );
}

export default ListGasto;