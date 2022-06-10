//router dom
import React, { useState, useEffect } from 'react';
//componentes
function Home({ atualrota }) {
    atualrota("Home");
    /*  //configutações de acesso ou tmdb
      const key = "api_key=617375c16cb7cbacc59f9c2b6102e4e4"
      const tmdb = "https://api.themoviedb.org/3/"
  
      //Estado para guardar o banner principal
      const [posterPrincipal, setposterPrincipal] = useState("")
  
      //funcão para buscar dados da api
      const buscaApi = async (opcao) => {
          const req = await fetch(`${tmdb}${opcao}${key}&language=pt-BR`)
          const response = await req.json();
          return response
      }
      //buscaApi("movie/338953?");
      useEffect(() => {
          const req = async () => {
              const reqFilmeBanner = await buscaApi("movie/338953?");
              setposterPrincipal(reqFilmeBanner);
          }
          req();
  
      }, []);
  */
    return (
        <div>
            <h1>teste</h1>
        </div>
    );
}

export default Home;

