import { rotasContext } from "../Contexto/rotasContext";
import { useContext } from "react";

const Filmes = () => {
    const { setrotaAtual } = useContext(rotasContext)
    setrotaAtual("Filmes")

    return (
        <div>
            <h1>teste</h1>
        </div>

    );
}

export default Filmes;
