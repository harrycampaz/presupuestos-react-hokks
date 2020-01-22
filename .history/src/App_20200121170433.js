import React, { useEffect } from "react";
import Header from "./components/ui/Header";
import Main from "./components/Main";
import { useState } from "react";
import FormGatos from "./components/ui/FormGatos";
import ListGasto from "./components/ListGasto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isPresupuesto, setIsPresupuesto] = useState(true);
  const [createGasto, setCreateGasto] = useState(false);
  const [gasto, setGasto] = useState({});
  const [gastos, setGastos] = useState([]);

  useEffect(()=> {
    if(createGasto){
      const listGastos = [...gastos, gasto];
      setGastos(listGastos);
    }
    
  }, [gasto]);

  return (
    <div className="App container">
      <Header titulo="Gastos" />
      <div className="contenido-principal contenido">
        {isPresupuesto ? (
          <Main
            setPresupuesto={setPresupuesto}
            setIsPresupuesto={setIsPresupuesto}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <FormGatos setGasto={setGasto} createGasto={createGasto}/>
            </div>
            <div className="one-half column">
              <ListGasto gastos = {gastos}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
