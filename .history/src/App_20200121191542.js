import React, { useEffect } from "react";
import Header from "./components/ui/Header";
import Main from "./components/Main";
import { useState } from "react";
import FormGatos from "./components/ui/FormGatos";
import ListGasto from "./components/ListGasto";
import ControlPresupuesto from "./components/ControlPresupuesto";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isPresupuesto, setIsPresupuesto] = useState(true);
  const [restante, setRestante] = useState(0)
  const [createGasto, setCreateGasto] = useState(false);
  const [gasto, setGasto] = useState({});
  const [gastos, setGastos] = useState([]);

  useEffect(()=> {
    if(createGasto){
      const listGastos = [...gastos, gasto];

      console.log(listGastos);
      

      setGastos(listGastos);

      setCreateGasto(false);

      const sumaGastos = gastos.reduce((suma, gasto) => {
        return suma+ gasto.cantidadGasto;
      });

      console.log(sumaGastos);
      

      const presupuestoRestante = restante - gasto.cantidadGasto;
      setRestante(presupuestoRestante);

    }
    
  }, [createGasto, restante, gasto, gastos]);

  return (
    <div className="App container">
      <Header titulo="Gastos" />
      <div className="contenido-principal contenido">
        {isPresupuesto ? (
          <Main
            setPresupuesto={setPresupuesto}
            setIsPresupuesto={setIsPresupuesto}
            setRestante= {setRestante}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <FormGatos setGasto={setGasto} setCreateGasto={setCreateGasto}/>
            </div>
            <div className="one-half column">
              <ListGasto gastos = {gastos} setGastos ={setGastos}/>
              <ControlPresupuesto  presupuesto={presupuesto} restante={restante}/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
