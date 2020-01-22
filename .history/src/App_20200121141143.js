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
      {isPresupuesto}
     </div>
    </div>
  );
}

export default App;
