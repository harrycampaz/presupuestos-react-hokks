import React, {useState} from 'react';

function FormGatos(props) {

    const [nameGasto, setNameGasto]= useState('');
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);

    return (
        <form action="">

        <h2>Agrega tus gastos aqui</h2>

<div className="campo">
    <label htmlFor="Nombre gasto">Nombre gasto</label>
    <input type="text" name="gasto" id="gasto" className="u-full-width" placeholder="EJ. Comida"/>
</div>

<div className="campo">
    <label htmlFor="Cantidad gasto">Cantidad gasto</label>
    <input type="number" name="gasto" id="gasto" className="u-full-width" placeholder="EJ. Comida"/>
</div>

<input type="submit" value="Agregar gasto" className="button-primary u-full-width"/>
        </form>
    );
}

export default FormGatos;