import React from 'react';

function ListGasto(props) {

    const {gatos} = props;

    return (
        <div className="gastos-realizados">
            <h2>Listado</h2>
            {gatos.map(gasto => (
                
            ))}
        </div>
    );
}

export default ListGasto;