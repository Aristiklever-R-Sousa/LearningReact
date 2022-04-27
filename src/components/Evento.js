import Button from "./events/Button";

function Evento({number}) {
    function meuEvento() {
        alert(`Opa, fui ativado! ${number}`);
    }

    function secondEvent() {
        alert("Activate the second event.");
    }

    return (
        <div>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento"/>
            <Button event={secondEvent} text="Segundo Evento"/>
            {/* <button onClick={meuEvento} >Ativar</button> */}
        </div>
    );
}

export default Evento;
