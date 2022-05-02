import './App.css';
import Evento from '../Evento';
import Form from '../Form';
import Condicional from '../Condicional';

function App() {
  // const name = "Aristiklever";

  return (
    <div className="App">
      <h1>Renderização Condicional</h1>
      <Condicional />
      {/* <Evento number={1}/> */}
      {/* <Evento number={2}/> */}
      {/* <Form /> */}
    </div>
  );
}

export default App;
