import { useState, useEffect } from "react";
import styles from "./Main.module.scss"
import Slide from "./slides"

function Main({ filmesparams }) {
    const [filmes, setfilmes] = useState("")


    useEffect(() => {
        setfilmes(filmesparams)
    }, [filmesparams])



    return (
        <div className={styles.container_listas}>
            {(filmes != undefined && filmes != null && filmes != "") &&
                <>
                    {filmes.map((item, key) => (

                        <div key={key} className={styles.lista_item}>

                            <h3 >{item.titulo}</h3>
                            <Slide item={item}></Slide>

                        </div>
                    ))}

                </>
            }
        </div >
    );
}
export default Main;

