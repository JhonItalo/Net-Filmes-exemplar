//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//hook
import React, { useState } from 'react';
//page
import Home from "../Pages/Home"
import Series from "../Pages/Series"
import Filmes from "../Pages/Filmes"
import Bombando from "../Pages/Bombando"
import MinhaLista from "../Pages/MinhaLista"
//componentes
import Banner from "../componentes/HomePage/Banner"


const Rotas = () => {
    const [rotaAtual, setrotaAtual] = useState("Home")
    return (
        <BrowserRouter>
            <Banner atualrota={rotaAtual} />
            <Routes>
                <Route index element={<Home atualrota={setrotaAtual} />} />
                <Route path="/series" element={<Series atualrota={setrotaAtual} />} />
                <Route path="/filmes" element={<Filmes atualrota={setrotaAtual} />} />
                <Route path="/bombando" element={<Bombando atualrota={setrotaAtual} />} />
                <Route path="/minhalista" element={<MinhaLista atualrota={setrotaAtual} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;
