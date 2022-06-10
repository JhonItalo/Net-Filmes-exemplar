//css
import styles from './Header.module.scss'
//router
import { Link } from "react-router-dom";
//hook
import React, { useState, useEffect } from 'react';

function Header({ atualrota }) {
  const [rotaatual, setrotaatual] = useState("");

  useEffect(() => {
    setrotaatual(atualrota);
  }, [atualrota]);

  return (
    <header className={styles.header}>
      <div className={styles.capsula_Logo_Navigation_Flex}>
        <img src="/netflix.png" alt="logo" title='logo' />
        <nav className={styles.navigation}>
          <li><Link to='/' className={rotaatual === "Home" ? `${styles.activeBold}` : ""} >Início</Link></li>
          <li> <Link to='/series' className={rotaatual === "Series" ? `${styles.activeBold}` : ""}>Séries</Link></li>
          <li> <Link to="/filmes" className={rotaatual === "Filmes" ? `${styles.activeBold}` : ""}>Filmes</Link></li>
          <li> <Link to="/bombando" className={rotaatual === "Bombando" ? `${styles.activeBold}` : ""}>Bombando</Link></li>
          <li> <Link to="/minhalista" className={rotaatual === "Minhalista" ? `${styles.activeBold}` : ""}> Minha lista</Link></li>
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

export default Header;
