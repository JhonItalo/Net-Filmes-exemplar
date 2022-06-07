

import HeaderHome from "./HeaderHome";
//import styles from "HeaderConteudo.module.scss"
import styles from './HeaderConteudo.module.scss'

function HeaderConteudo({ banner }) {
    return (
        <div className={styles.header_conteudo_principal} style={{ backgroundImage: "url('hj')" }} >
            <HeaderHome />
        </ div>
    );
}

export default HeaderConteudo;
