//router dom
import React, { useState, useEffect } from 'react';
//componentes
import HeaderConteudo from "../componentes/HomePage/HeaderConteudo"

function Home() {
    //configutações de acesso ou tmdb
    const key = "api_key=617375c16cb7cbacc59f9c2b6102e4e4"
    const tmdb = "https://api.themoviedb.org/3/"

    //Estado para guardar o banner principal
    const [posterPrincipal, setposterPrincipal] = useState("")

    //funcão para buscar dados da api
    const buscaApi = async (opcao) => {
        const req = await fetch(`${tmdb}${opcao}${key}&language=pt-BR`)
        const resposta = await req.json();
        return resposta
    }
    useEffect(async () => {
        setposterPrincipal(buscaApi("movie/338953?"))
    }, []);

    return (
        <div>
            <HeaderConteudo banner={posterPrincipal} />
        </div>
    );
}

export default Home;
