import React from 'react';
import Header from './components/ui/Header';
import Main from './components/Main';
import { useState } from 'react';


function App() {

  const [presupuesto, setPresupuesto] = useState(0);

  const [isPresupuesto, setIsPresupuesto] = useState(true);

  return (
    <div className="App container">
     <Header titulo = "Gastos"/>
     <div className="contenido-principal contenido">
      {(isPresupuesto) ? 
      
      <Main setPresupuesto= {setPresupuesto} setIsPresupuesto ={setIsPresupuesto}/>
      : <div className="row">
        <div className="one-half column">

<p>Formulario p</p>
        </div>
        <div className="one-half column">
<p>data</p>
        </div>
      </div> }
     </div>
    </div>
  );
}

export default App;
