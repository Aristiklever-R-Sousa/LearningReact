import './App.css';
import Evento from '../Evento';
import Form from '../Form';

function App() {
  const name = "Aristiklever";

  return (
    <div className="App">
      <h1>Testando Evento!</h1>
      <Evento number={1}/>
      <Evento number={2}/>
      <Form />
    </div>
  );
}

export default App;
