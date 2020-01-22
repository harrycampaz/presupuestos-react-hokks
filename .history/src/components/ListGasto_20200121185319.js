import React from 'react';
import Gasto from './Gasto';

function ListGasto(props) {

    const {gastos, setGastos} = props;

    const deleteGastos = e => {

        console.log(gastos);
        
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