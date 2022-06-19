import { rotasContext } from "../Contexto/rotasContext";
import { useContext } from "react";

const Series = () => {
    const { setrotaAtual } = useContext(rotasContext)
    setrotaAtual("Series")
    return (
        <div>
            <h1>teste</h1>
        </div>

    );
}

export default Series;
