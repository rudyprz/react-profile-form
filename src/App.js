import React from 'react';
import { Address, Bank, Contact, Fiscal, Legal } from './components';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App-Header">
        <h1 className="text-4xl tracking-wide font-medium text-gray-900">Perfil</h1>
        <p className="mt-1 text-md text-gray-500">Favor de completar los siguientes campos</p>
      </div>
        <div className="App-Container">
          <Fiscal />
          <Address />
          <Contact />
          <Legal />
          <Bank />
          <div className="text-right">  
            <button class="bg-indigo-500 hover:bg-blue-500 text-white font-semibold mt-10 py-2 px-6 border rounded-full shadow">
              Guardar
            </button>
          </div>
        </div>
    </div>
  );
}

export default App;
