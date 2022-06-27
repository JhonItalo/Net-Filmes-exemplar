import { rotasContext } from "../Contexto/rotasContext";
import { useContext } from "react";
import Main from "../componentes/HomeComp/Main"

const Series = ({ filmesparams }) => {
    const { setrotaAtual } = useContext(rotasContext)
    setrotaAtual("Series")
    return (
        <div>
            <Main filmesparams={filmesparams} />
        </div>

    );
}

export default Series;
