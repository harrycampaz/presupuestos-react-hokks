import React from 'react';
import Gasto from './Gasto';

function ListGasto(props) {

    const {gastos} = props;

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto 
                key={gasto.id}
                gasto={gasto}/>
            ))}
        </div>
    );
}

export default ListGasto;