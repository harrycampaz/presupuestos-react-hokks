import React from 'react';
import Gasto from './Gasto';

function ListGasto(props) {

    const {gastos, setGastos} = props;

    const deleteGastos = e => {

        // const newGasto = gastos.filter(onGasto => onGasto.id !== e);
        console.log('gastos', gastos);
        setGastos(newGasto);
        
        
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