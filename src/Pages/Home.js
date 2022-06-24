import { rotasContext } from "../Contexto/rotasContext";
import { useContext } from "react";
import Main from "../componentes/HomeComp/Main";


function Home({ filmesparams }) {
    const { setrotaAtual } = useContext(rotasContext)
    setrotaAtual("Home")

    return (
        <Main filmesparams={filmesparams} />
    );
}
export default Home;

