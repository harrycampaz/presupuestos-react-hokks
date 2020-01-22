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
      : null}
     </div>
    </div>
  );
}

export default App;
