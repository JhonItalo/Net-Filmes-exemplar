
//hook
import React, { useState, useEffect } from 'react';
//componentes
import Header from "./Header";
//css
import styles from './Banner.module.scss'

const buscaApi = async (opcao) => {
    const key = "api_key=617375c16cb7cbacc59f9c2b6102e4e4"
    const tmdb = "https://api.themoviedb.org/3/"
    const req = await fetch(`${tmdb}${opcao}${key}&language=pt-BR`)
    const response = await req.json();
    return response
}

function Banner({ }) {

    const [filmeDestaque, setfilmeDestaque] = useState("")

    useEffect(() => {
        const req = async () => {
            const requi = await buscaApi("movie/338953?");
            setfilmeDestaque(requi);
        }
        req();
    }, []);

    return (
        <section className={styles.header_conteudo_principal} style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${filmeDestaque.backdrop_path}")`
        }} >
            <Header />
            
            <div className={styles.filme_conteudo}>
                <p>{filmeDestaque.title}</p>
                <button>assistir</button>
                <button>Mais informações</button>
            </div>
        </ section>
    );
}

export default Banner;
