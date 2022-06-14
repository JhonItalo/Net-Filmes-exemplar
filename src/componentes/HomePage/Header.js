//css
import styles from './Header.module.scss'
//router
import { Link } from "react-router-dom";
//hook
import React, { useState, useEffect } from 'react';

function Header({ rotaAtualParams }) {
  const [rotaAtual, setrotaAtual] = useState("");


  useEffect(() => {
    setrotaAtual(rotaAtualParams);
  }, [rotaAtualParams]);

  return (
    <header className={styles.header}>
      <div className={styles.capsula_Logo_Navigation_Flex}>
        <Link to="/"><img src="/netflix.png" alt="logo" title='logo' /></Link>
        <nav className={styles.navigation}>
          <li><Link to='/' className={rotaAtual === "Home" ? `${styles.activeBold}` : ""} >Início</Link></li>
          <li> <Link to='/series' className={rotaAtual === "Series" ? `${styles.activeBold}` : ""}>Séries</Link></li>
          <li> <Link to="/filmes" className={rotaAtual === "Filmes" ? `${styles.activeBold}` : ""}>Filmes</Link></li>
          <li> <Link to="/bombando" className={rotaAtual === "Bombando" ? `${styles.activeBold}` : ""}>Bombando</Link></li>
          <li> <Link to="/minhalista" className={rotaAtual === "Minhalista" ? `${styles.activeBold}` : ""}> Minha lista</Link></li>
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
