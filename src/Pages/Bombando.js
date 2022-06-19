import { rotasContext } from "../Contexto/rotasContext";
import { useContext } from "react";

const Bombando = () => {
    const { setrotaAtual } = useContext(rotasContext)
    setrotaAtual("Bombando")

    return (
        <div>
            <h1>teste</h1>
        </div>

    );
}

export default Bombando;
