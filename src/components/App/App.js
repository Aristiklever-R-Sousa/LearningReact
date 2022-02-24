import logo from '../../logo.svg';
import './App.css';

import HelloWorld from '../HelloWorld/HelloWorld';
import SayMyName from '../SayMyName';
import Frase from '../Frase/Frase';

function App() {
  const name = "Aristiklever";
  const newName = name.toUpperCase();

  const url = 'https://via.placeholder.com/150';

  function sum(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Alterando o JSX</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1, 2)}</p>
      <img src={url} alt="Minha imagem"></img>
      <SayMyName name="Gregors" />
      <Frase />
      <Frase />
      <Frase />
      <HelloWorld />
    </div>
  );
}

export default App;
