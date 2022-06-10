//react router
//hook
import styles from "./ConteudoHome.module.scss"

const ConteudoHome = ({ title }) => {

    const split = title.split(":");
    return (
        <div className={styles.conteudo_banner_home}>
            <p>{split[0]}</p>
            <p>{split[1]}</p>
            <div className={styles.assistir_moreinfo_flex}>
                <div className={styles.assistir}><i className="fa-solid fa-play"></i> Assistir</div>
                <div className={styles.moreinfo}><i className="fa-solid fa-info"></i> Mais informações</div>
            </div>
        </div>
    );
}

export default ConteudoHome;
