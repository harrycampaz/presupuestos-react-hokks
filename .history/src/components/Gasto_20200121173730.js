import React from "react";

const Gasto = ({ gasto }) => {

    const deleteGasto = (id) => {
        console.log(id);
        
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
