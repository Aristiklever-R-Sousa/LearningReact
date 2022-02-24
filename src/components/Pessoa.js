function Pessoa({ name, age, profission, photo }) {
    return (
        <div>
            <img src={photo} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {profission}</p>
        </div>
    );
}

export default Pessoa;
