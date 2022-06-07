

import React, { useState, useEffect } from 'react';
//componentes
import HeaderHome from "./HeaderHome";
import styles from './HeaderBanner.module.scss'


function HeaderBanner({ filmeDestaque }) {
    const [filmeDestaqueLocal, setfilmeDestaqueLocal] = useState("teste")

    useEffect(() => {
        setfilmeDestaqueLocal(filmeDestaque);
        console.log(filmeDestaque)
    }, [filmeDestaque]);

    return (
        <div className={styles.header_conteudo_principal} style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${filmeDestaqueLocal.backdrop_path}")`
        }} >
            <HeaderHome />
            <div className={styles.filme_conteudo}>
                <p>{filmeDestaqueLocal.title}</p>
                <button>assistir</button>
                <button>Mais informações</button>
            </div>




        </ div>
    );
}

export default HeaderBanner;
