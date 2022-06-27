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
import Footer from "../componentes/CompFixed/Footer"
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
                    <Route path="Netflix-clone/" index element={<Home filmesparams={filmes} />} />
                    <Route path="Netflix-clone/series" element={<Series filmesparams={filmes} />} />
                    <Route path="Netflix-clone/filmes" element={<Filmes />} />
                    <Route path="Netflix-clone/bombando" element={<Bombando />} />
                    <Route path="Netflix-clone/minhalista" element={<MinhaLista />} />
                </Routes>
                <Footer />
            </rotasContext.Provider>
        </BrowserRouter>
    );
}

export default Rotas;
