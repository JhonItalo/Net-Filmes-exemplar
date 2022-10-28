import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Home from "../Pages/Home"
import Series from "../Pages/Series"
import Filmes from "../Pages/Filmes"
import Bombando from "../Pages/Bombando"
import MinhaLista from "../Pages/MinhaLista"
import Banner from "../componentes/layout/Banner"
import Header from "../componentes/layout/Header"
import Footer from "../componentes/layout/Footer"
import { listafilmes } from "../Requisicoes"



const Rotas = () => {
    const [filmes, setfilmes] = useState('');
    const [filmeDestaque, setfilmeDestaque] = useState("")

    useEffect(() => {
        async function req() {
            const allFilmes = await listafilmes();
            setfilmes(allFilmes);
            const destaque = await allFilmes[0].lista.results[Math.floor(Math.random() * (allFilmes[0].lista.results.length - 1))]
            setfilmeDestaque(destaque)
        }
        req();
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <Banner filmebanner={filmeDestaque} />
            <Routes>
                <Route path="/" index element={<Home filmesparams={filmes} />} />
                <Route path="/series" element={<Series filmesparams={filmes} />} />
                <Route path="/filmes" element={<Filmes />} />
                <Route path="/bombando" element={<Bombando />} />
                <Route path="/minhalista" element={<MinhaLista />} />
            </Routes>
            <Footer />

        </BrowserRouter>
    );
}

export default Rotas;
