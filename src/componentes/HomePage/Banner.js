import React, { useState, useEffect, useContext } from 'react';
import styles from './Banner.module.scss'
//componentes
import Header from "./Header";
import InfoFilme from './InfoFilme';
//context
import { rotasContext } from '../../Contexto/rotasContext';

function Banner({ filmebanner }) {
    const [filmeDestaque, setfilmeDestaque] = useState("")
    //rotas context
    const { rotaAtual, setrotaAtual } = useContext(rotasContext)

    useEffect(() => {
        setfilmeDestaque(filmebanner);
    }, [filmebanner]);

    return (
        <section className={styles.banner}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${filmeDestaque.backdrop_path}")`,
            }} >

            <Header />
            <InfoFilme filmeDestaqueParams={filmeDestaque} />
            <div className={styles.gradiente_banner}></div>

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
