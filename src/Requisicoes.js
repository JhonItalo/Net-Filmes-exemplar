const key = "api_key=617375c16cb7cbacc59f9c2b6102e4e4"
const tmdb = "https://api.themoviedb.org/3/"

const buscaApi = async (opcao) => {
    const req = await fetch(`${tmdb}${opcao}${key}&language=pt-BR&page=1`)
    const response = await req.json();
    console.log("entrei")
    return response
}

const listafilmes = async () => {
    return [{
        titulo: "Originais Netflix",
        lista: await buscaApi("discover/tv?with_network=213&")
    },
    {
        titulo: "Popular",
        lista: await buscaApi("movie/popular?")
    },
    {
        titulo: "Bem avaliados",
        lista: await buscaApi("movie/top_rated?")
    },
    {
        titulo: "Virais da semana",
        lista: await buscaApi("trending/movie/week?")
    },
    {
        titulo: "Ação",
        lista: await buscaApi("discover/movie?sort_by=popularity.desc&page=1&with_genres=28&")
    },
    {
        titulo: "Documentários",
        lista: await buscaApi("discover/movie?sort_by=popularity.desc&page=1&with_genres=99&")
    },
    {
        titulo: "Drama",
        lista: await buscaApi("discover/movie?sort_by=popularity.desc&page=1&with_genres=18&")
    },
    {
        titulo: "Horror",
        lista: await buscaApi("discover/movie?sort_by=popularity.desc&page=1&with_genres=27&")
    },
    {
        titulo: "Romance",
        lista: await buscaApi("discover/movie?sort_by=popularity.desc&page=1&with_genres=10749&")
    }]
}



export { buscaApi, listafilmes };
