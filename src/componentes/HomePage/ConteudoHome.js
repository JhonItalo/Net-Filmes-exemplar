
import styles from "./ConteudoHome.module.scss"
import React, { useState, useEffect } from 'react';

const ConteudoHome = ({ title, descricao }) => {
    const [titlefilme, settitlefilme] = useState('');
    const [titlecomposto, settitlecomposto] = useState('');

    useEffect(() => {
        settitlefilme(title);
        if (titlefilme != undefined || titlefilme != null) {
            settitlecomposto(titlefilme.split(":"))
        }
    }, [title, titlefilme]);

    return (
        <div className={styles.conteudo_banner_home}>
            <p className={styles.title}>{titlecomposto[0]}</p>
            <p className={styles.title}>{titlecomposto[1]}</p>
            <div className={styles.assistir_moreinfo_flex}>
                <div className={styles.assistir}><i className="fa-solid fa-play"></i> Assistir</div>
                <div className={styles.moreinfo}><i className="fa-solid fa-info"></i> Mais informações</div>
            </div>
        </div>
    );
}

export default ConteudoHome;
