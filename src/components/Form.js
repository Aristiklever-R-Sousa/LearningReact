import { useState } from 'react';

function Form() {
    function cadastrarUser(e) {
        e.preventDefault();
        // alert(`Cadstrando esse cara: ${user}`);
        console.log({e: e});
        console.log({name , pass});
    }

    const [name, setName] = useState();
    const [pass, setPass] = useState();

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input
                        type="text"
                        id="name" name="name"
                        placeholder="Digite o seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input
                        type="password"
                        id="password" name="password"
                        placeholder="Digite sua senha"
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;
