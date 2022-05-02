import { useState } from "react";

function Condicional() {
  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();
  
  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail('');
  }

  return (
    <div>
      <h2>Cadastre seu email</h2>
      <form>
        <input
            type="email" placeholder="Digite o email.."
            onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={enviarEmail}>Enviar Email</button>
      </form>
      {userEmail && (
          <div>
              <p>O email do user é: {userEmail}</p>
              <button onClick={limparEmail}>Limpar e-mail</button>
          </div>
      )}
    </div>
  );
}

export default Condicional;
