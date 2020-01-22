import React, { useState } from "react";
import  ErrorComponent  from "../ErrorComponent";
import shortid from "shortid";
function FormGatos(props) {

    const {setGasto, setCreateGasto} = props;

  const [nameGasto, setNameGasto] = useState("");
  const [cantidadGasto, setCantidadGasto] = useState("");
  const [error, setError] = useState(false);

  const addGasto = e => {
      e.preventDefault();

      if (cantidadGasto < 1 || isNaN(cantidadGasto) || nameGasto === '') {
        setError(true);
        return;
    }
    setError(false);


    setCreateGasto(true);

    const gasto = {
        nameGasto,
        cantidadGasto,
        id: shortid.generate()
    }

    setGasto(gasto);

    setNameGasto('');
    setCantidadGasto('');

  }
  return (
    <form action="" onSubmit = {addGasto}>
      <h2>Agrega tus gastos aqui</h2>

      {error ? <ErrorComponent mensaje= "Ambos campos son obligatorios"/> : null}

      <div className="campo">
        <label htmlFor="Nombre gasto">Nombre gasto</label>
        <input
          type="text"
          name="name"
          id="name"
          className="u-full-width"
          placeholder="EJ. Comida"
          onChange = {e => setNameGasto(e.target.value)}
          value = {nameGasto}
        />
      </div>

      <div className="campo">
        <label htmlFor="Cantidad gasto">Cantidad gasto</label>
        <input
          type="number"
          name="gasto"
          id="gasto"
          className="u-full-width"
          placeholder="$100"
          onChange = {e => setCantidadGasto(parseInt(e.target.value), 10)}
          value = {cantidadGasto}
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
