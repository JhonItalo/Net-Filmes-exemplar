//css
import styles from './HeaderHome.module.scss'

function HeaderHome() {
  return (
    <header className={styles.header}>
      <div className={styles.capsula_Logo_Navigation_Flex}>
        <img src="/netflix.png" alt="logo" title='logo' />
        <nav className={styles.navigation}>
          <li>Início</li>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Bombando</li>
          <li>Minha lista</li>
        </nav>
      </div>

      <div className={styles.busca_e_icons}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-solid fa-bell"></i>
        <div className={styles.user}>
          <i className="fa-solid fa-user" style={{ fontSize: "25px" }}></i>
          <i className="fa-solid fa-caret-down" style={{ fontSize: "15px" }}></i>
        </div>
      </div>
    </header>
  );
}

export default HeaderHome;
