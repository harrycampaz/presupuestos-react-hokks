import React from 'react';
import Gasto from './Gasto';

function ListGasto(props) {

    const {gastos} = props;

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gatos.map(gastos => (
                <Gasto gastos={gasto}/>
            ))}
        </div>
    );
}

export default ListGasto;