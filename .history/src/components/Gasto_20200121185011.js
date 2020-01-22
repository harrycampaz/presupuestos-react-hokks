import React from "react";

const Gasto = ({ gasto, setGastos }) => {

    const deleteGasto = (id) => {
        console.log(id);
        setGastos([]);
        
    }

  return( <li className="gastos">
    <p>
      {gasto.nameGasto}
      <span className="gasto">${gasto.cantidadGasto}</span>
      <button type="submit" onClick={() => deleteGasto(gasto.id)}>
        Eliminar
      </button>
    </p>
  </li>)
}

export default Gasto;
