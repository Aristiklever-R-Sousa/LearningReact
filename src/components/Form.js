import { useState } from 'react';

function Form() {
    function cadastrarUser(e) {
        e.preventDefault();
        // alert(`Cadstrando esse cara: ${user}`);
        console.log(`User ${name} peidou a senha ${password}!`);
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text" id="name" name="name" placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value) }
                    ></input>
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password" id="password" name="password" placeholder="Digite a sua senha"
                        onChange={(e) => setPassword(e.target.value) }
                    ></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;
