import css from './Frase.module.css';

function Frase() {
    return (
        <div className={css.fraseContainer}>
            <p className={css.fraseContent}>Este é um componente com uma frase!</p>
        </div>
    );
}

export default Frase;
