
//hook
import React, { useState, useEffect } from 'react';
//componentes
import Header from "./Header";
import ConteudoHome from './ConteudoHome';
//css
import styles from './Banner.module.scss'
//requisicoes func
import { buscaApi, listafilmes } from "../../Requisicoes.js"

function Banner({ atualrota }) {
    //filme banner principal
    const [filmeDestaque, setfilmeDestaque] = useState("")
    //controle de rotas
    const [rotaatual, setrotaatual] = useState("")
    //lista de filmes
    const [filmes, setfilmes] = useState('');


    useEffect(() => {
        (async function req() {
            const t = await listafilmes();
            setfilmes(t);
            console.log(filmes)
            console.log("to aqui")
        })();
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
                <ConteudoHome title={filmeDestaque.title} descricao={filmeDestaque.overview} />
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
