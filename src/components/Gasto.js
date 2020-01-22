import React from "react";

const Gasto = ({ gasto, deleteGastos }) => {


  return( <li className="gastos">
    <p>
      {gasto.nameGasto}
      <span className="gasto">${gasto.cantidadGasto}</span>
      <button type="submit" onClick={() => deleteGastos(gasto.id)}>
        Eliminar
      </button>
    </p>
  </li>)
}

export default Gasto;
