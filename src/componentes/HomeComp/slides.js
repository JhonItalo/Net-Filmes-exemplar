import React, { useRef } from 'react';
import styles from "./Slide.module.scss"

const Slide = ({ item }) => {
    const carroselscroll = useRef();

    const btn_direito = () => {
        carroselscroll.current.scrollLeft += (carroselscroll.current.offsetWidth - 68);
    }
    const btn_esquerdo = () => {
        carroselscroll.current.scrollLeft -= (carroselscroll.current.offsetWidth + 68);
    }

    return (
        <div className={styles.carrosel} ref={carroselscroll}>
            <div onClick={btn_direito} className={styles.button_direita}>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            <div onClick={btn_esquerdo} className={styles.button_esquerda}>
                <i className="fa-solid fa-chevron-right"></i>
            </div>
            {item.lista.results.map((item2, key) => (
                <div key={key} className={styles.carrosel_img} style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/w300/${item2.backdrop_path}")`,
                }} >
                </div>
            ))}
        </div>
    );
}

export default Slide;
