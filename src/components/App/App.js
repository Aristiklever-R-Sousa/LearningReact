import { useState } from 'react';
import Saudacao from '../stateLift/Saudacao';
import SeuNome from '../stateLift/SeuNome';

import './App.css';

function App() {
  const  [name, setName] = useState();

  return (
    <div className="App">
      <h1>State Lift</h1>
      <SeuNome setName={setName} />
      <Saudacao name={name} />
    </div>
  );
}

export default App;
