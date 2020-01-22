import React from 'react';

function FormGatos(props) {
    return (
        <form action="">

        <h2>Agrega tus gastos aqui</h2>

<div className="campo">
    <label htmlFor="Nombre gasto">Nombre gasto</label>
    <input type="text" name="gasto" id="gasto" className="u-full-width" placeholder="EJ. Comida"/>
</div>
        </form>
    );
}

export default FormGatos;