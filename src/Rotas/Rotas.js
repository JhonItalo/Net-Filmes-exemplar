import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
//page
import Home from "../Pages/Home"
import Series from "../Pages/Series"
import Filmes from "../Pages/Filmes"
import Bombando from "../Pages/Bombando"
import MinhaLista from "../Pages/MinhaLista"
//componentes
import Banner from "../componentes/CompFixed/Banner"
import Header from "../componentes/CompFixed/Header"
//requisições func
import { listafilmes } from "../Requisicoes"
//context
import { rotasContext } from "../Contexto/rotasContext";

const Rotas = () => {
    //controle de rotas
    const [rotaAtual, setrotaAtual] = useState("Home")
    //lista de filmes
    const [filmes, setfilmes] = useState('');
    //filme banner principal
    const [filmeDestaque, setfilmeDestaque] = useState("")
    //carregando dados
    useEffect(() => {
        (async function req() {
            const t = await listafilmes();
            setfilmes(t);
            const h = await t[0].lista.results[Math.floor(Math.random() * (t[0].lista.results.length - 1))]
            setfilmeDestaque(h)
        })();
    }, []);

    return (
        <BrowserRouter>
            <rotasContext.Provider value={{ rotaAtual, setrotaAtual }}>
                <Header />
                <Banner filmebanner={filmeDestaque} />
                <Routes>
                    <Route index element={<Home filmesparams={filmes} />} />
                    <Route path="/series" element={<Series />} />
                    <Route path="/filmes" element={<Filmes />} />
                    <Route path="/bombando" element={<Bombando />} />
                    <Route path="/minhalista" element={<MinhaLista />} />
                </Routes>
            </rotasContext.Provider>
        </BrowserRouter>
    );
}

export default Rotas;
