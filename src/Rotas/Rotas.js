//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//page
import Home from "../Pages/Home"

const Rotas = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                {/*<Route path="/explorar" element={<Explorar pageAtual={setRotaAtual} />} />*/}
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
