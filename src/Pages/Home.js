import { rotasContext } from "../Contexto/rotasContext";
import { useContext } from "react";

function Home() {
    const { setrotaAtual } = useContext(rotasContext)
    setrotaAtual("Home")
    return (
        <div>
            <h1>teste</h1>
        </div>
    );
}
export default Home;

