
//hook
import React, { useState, useEffect } from 'react';
//componentes
import Header from "./Header";
//css
import styles from './Banner.module.scss'
import ConteudoHome from './ConteudoHome';

const buscaApi = async (opcao) => {
    const key = "api_key=617375c16cb7cbacc59f9c2b6102e4e4"
    const tmdb = "https://api.themoviedb.org/3/"
    const req = await fetch(`${tmdb}${opcao}${key}&language=pt-BR`)
    const response = await req.json();
    console.log(response)
    return response
}

function Banner({ atualrota }) {

    const [filmeDestaque, setfilmeDestaque] = useState("")
    const [rotaatual, setrotaatual] = useState("")

    useEffect(() => {
        const req = async () => {
            const requi = await buscaApi("movie/338953?");
            setfilmeDestaque(requi);
        }
        req();
    }, []);

    useEffect(() => {
        setrotaatual(atualrota);
    }, [atualrota]);

    return (
        <section className={styles.banner}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${filmeDestaque.backdrop_path}")`,
            }} >

            <Header atualrota={atualrota} />

            <div className={styles.gradiente_banner}></div>

            {rotaatual === "Home" &&
                <ConteudoHome title={filmeDestaque.title} />
            }

            {rotaatual === "Series" &&
                <div className={styles.conteudo_banner_home}>
                    <h1>series</h1>
                </div>
            }

            {rotaatual === "Filmes" &&
                <div className={styles.conteudo_banner_home}>
                    <h1>filmes</h1>
                </div>
            }

            {rotaatual === "Bombando" &&
                <div className={styles.conteudo_banner_home}>
                    <h1>bombando</h1>
                </div>
            }

            {rotaatual === "Minhalista" &&
                <div className={styles.conteudo_banner_home}>
                    <h1>minhalista</h1>
                </div>
            }




        </ section>
    );
}

export default Banner;
