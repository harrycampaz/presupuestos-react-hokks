import React from 'react';
import Gasto from './Gasto';

function ListGasto(props) {

    const {gastos, setGastos, setUpdateGasto} = props;

    const deleteGastos = e => {

        if(gastos.length > 1){
            const newGasto = gastos.filter(onGasto => onGasto.id !== e);
            console.log('gastos', newGasto);
            setGastos(newGasto);
            setUpdateGasto(true);
            return;
        }

        setGastos([]);
       
        
        
        
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