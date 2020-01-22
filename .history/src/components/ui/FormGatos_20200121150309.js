import React, { useState } from "react";

function FormGatos(props) {
  const [nameGasto, setNameGasto] = useState("");
  const [cantidadGasto, setCantidadGasto] = useState(0);
  const [error, setError] = useState(false);

  const addGasto = e => {
      e.preventDefault();

      if (cantidadGasto < 1 || isNaN(cantidadGasto) || nameGasto === '') {
        setError(true);
        return;
    }
    
    setError(false);

  }
  return (
    <form action="" onSubmit = {addGasto}>
      <h2>Agrega tus gastos aqui</h2>

      <div className="campo">
        <label htmlFor="Nombre gasto">Nombre gasto</label>
        <input
          type="text"
          name="gasto"
          id="gasto"
          className="u-full-width"
          placeholder="EJ. Comida"
          onChange = {e => setNameGasto(e.target.value)}
        />
      </div>

      <div className="campo">
        <label htmlFor="Cantidad gasto">Cantidad gasto</label>
        <input
          type="number"
          name="gasto"
          id="gasto"
          className="u-full-width"
          placeholder="EJ. Comida"
          onChange = {e => setCantidadGasto(parseInt(e.target.value), 10)}
        />
      </div>

      <input
        type="submit"
        value="Agregar gasto"
        className="button-primary u-full-width"
      />
    </form>
  );
}

export default FormGatos;
