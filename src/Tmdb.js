const API_KEY = "b6ca38fcad324447a29e8bc8e8183f83"; 
const API_BASE = "https://api.themoviedb.org/3"; 
const language = "pt-BR";


// Originais Netflix 
// Recomendados 
// Em Alta
// Ação
// Comédia
// Terror
// Romance
// Documentários


const basicFetch = async (endpoint) => {

    const req = await fetch(`${API_BASE}${endpoint}&api_key=${API_KEY}`);
    const json = await req.json();
    return json;

}

export default {

    getHomeList: async () => {

        return[
          {
            slug: 'originais',
            title: 'Originais do Netflix',
            items: await basicFetch(`/discover/tv?with_network=213&language=${language}`)
          },
          {
            slug: 'trending',
            title: 'Recomendados para você',
            items: await basicFetch(`/trending/all/week?language=${language}`)
          },
          {
            slug: 'toprated',
            title: 'Em Alta',
            items: await basicFetch(`/movie/top_rated?language=${language}`)
          },
          {
            slug: 'action',
            title: 'Ação',
            items: await basicFetch(`/discover/movie?with_genres=28&language=${language}`)
          },
          {
            slug: 'comedy',
            title: 'Comédia',
            items: await basicFetch(`/discover/movie?with_genres=35&language=${language}`)
          },
          {
            slug: 'horror',
            title: 'Terror',
            items: await basicFetch(`/discover/movie?with_genres=27&language=${language}`)

          },
          {
            slug: 'romance',
            title: 'Romance',
            items: await basicFetch(`/discover/movie?with_genres=10749&language=${language}`)

          },
          {
            slug: 'documentary',
            title: 'Documentário',
            items: await basicFetch(`/discover/movie?with_genres=99&language=${language}`)

          }
        ];

    },
    
    getMovieInfo: async (id, type) =>{

      let info = {};

      if(id){
        switch(type){
          case 'movie':
            info = await basicFetch(`/movie/${id}?language=${language}`)
          break;

          case 'tv':
            info = await basicFetch(`/tv/${id}?language=${language}`)
          break;
        }
      }

      return info

    }

}