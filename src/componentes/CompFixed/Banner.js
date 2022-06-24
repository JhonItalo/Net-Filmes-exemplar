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
    const { rotaAtual } = useContext(rotasContext)

    useEffect(() => {
        setfilmeDestaque(filmebanner);
    }, [filmebanner]);

    return (
        <section className={styles.banner}
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${filmeDestaque.backdrop_path}")`,
            }} >

            <div className={styles.gradiente_banner}>

                <InfoFilme filmeDestaqueParams={filmeDestaque} />

                {rotaAtual === "Series" &&
                    <div className={styles.conteudo_banner_series}>
                        <h3>Séries</h3>
                        <div className={styles.select}>
                            <p >Genêro</p>
                        </div>
                    </div>
                }

                {rotaAtual === "Filmes" &&
                    <div className={styles.conteudo_banner_Filmes}>
                        <h1>filmes</h1>
                    </div>
                }

                {rotaAtual === "Bombando" &&
                    <div className={styles.conteudo_banner_Bombando}>
                        <h1>bombando</h1>
                    </div>
                }

                {rotaAtual === "Minhalista" &&
                    <div className={styles.conteudo_banner_home}>
                        <h1>minhalista</h1>
                    </div>
                }

            </div>

        </ section>
    );
}

export default Banner;
