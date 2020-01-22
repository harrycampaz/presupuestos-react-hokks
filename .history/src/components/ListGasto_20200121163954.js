import React from 'react';
import Gasto from './Gasto';

function ListGasto(props) {

    const {gatos} = props;

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gatos.map(gasto => (
                <Gasto gasto={gasto}/>
            ))}
        </div>
    );
}

export default ListGasto;