function Form() {
    function cadastrarUser(e) {
        e.preventDefault();
        // alert(`Cadstrando esse cara: ${user}`);
        console.log({e: e});
    }

    return (
        <div>
            <h1>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUser}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"></input>
                </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    );
}

export default Form;