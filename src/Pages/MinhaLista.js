import { rotasContext } from "../Contexto/rotasContext";
import { useContext } from "react";

const MinhaLista = () => {
    const { setrotaAtual } = useContext(rotasContext)
    setrotaAtual("Minhalista")

    return (
        <div>
            <h1>teste</h1>
        </div>

    );
}

export default MinhaLista;
