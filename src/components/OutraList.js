function OutraList( {itens} ) {
    return (
        <>
        <h3>Lista de Coisas boas:</h3>
        {
            itens.length > 0 ? (
                itens.map(
                    (item, index) => <p key={index}> {item} </p>
                )
            ) : (
                <p>Não há itens na list!</p>
            )
        }
        </>
    );
}

export default OutraList;
