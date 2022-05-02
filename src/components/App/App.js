import OutraList from '../OutraList';
import './App.css';

function App() {
  const list = ["Ari", "Mai", "Rose"];

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraList itens={list} />
      <OutraList itens={[]} />
    </div>
  );
}

export default App;
