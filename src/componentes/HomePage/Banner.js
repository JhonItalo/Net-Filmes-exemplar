import React, { useState, useEffect } from 'react';
import styles from './Banner.module.scss'
//componentes
import Header from "./Header";
import InfoFilme from './InfoFilme';

function Banner({ rotaAtualParams, filmebanner }) {
    //controle de rotas
    const [rotaAtual, setrotaAtual] = useState("")
    //filme banner principal
    const [filmeDestaque, setfilmeDestaque] = useState("")

    useEffect(() => {
        setfilmeDestaque(filmebanner);
        console.log("entrei filmedestaue")
    }, [filmebanner]);

    useEffect(() => {
        setrotaAtual(rotaAtualParams);
    }, [rotaAtualParams]);

    return (
        <section className={styles.banner}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${filmeDestaque.backdrop_path}")`,
            }} >

            <Header rotaAtualParams={rotaAtual} />

            <div className={styles.gradiente_banner}></div>

            <InfoFilme filmeDestaqueParams={filmeDestaque} />

            {rotaAtual === "Series" &&
                <div className={styles.conteudo_banner_home}>
                    <h1>series</h1>
                </div>
            }

            {rotaAtual === "Filmes" &&
                <div className={styles.conteudo_banner_home}>
                    <h1>filmes</h1>
                </div>
            }

            {rotaAtual === "Bombando" &&
                <div className={styles.conteudo_banner_home}>
                    <h1>bombando</h1>
                </div>
            }

            {rotaAtual === "Minhalista" &&
                <div className={styles.conteudo_banner_home}>
                    <h1>minhalista</h1>
                </div>
            }




        </ section>
    );
}

export default Banner;
