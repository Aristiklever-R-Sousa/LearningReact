function SeuNome({setName}) {
    return (
        <>
            <div>
                <p>Digite o nome:</p>
                <input type="text" onChange={(e) => setName(e.target.value)} />
            </div>
        </>
    );
}

export default SeuNome;
