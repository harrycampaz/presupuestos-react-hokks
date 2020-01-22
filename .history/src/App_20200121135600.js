import React from 'react';
import Header from './components/ui/Header';
import Main from './components/Main';


function App() {
  return (
    <div className="App container">
     <Header titulo = "Gastos"/>
     <div className="contenido-principal contenido">
       <Main/>
     </div>
    </div>
  );
}

export default App;
