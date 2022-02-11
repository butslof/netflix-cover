import React,  {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRows from './components/MovieRows';
import FeaturedMovie from './components/FeaturedMovie';
import Header from './components/Header';
import Footer from './components/Footer';
import Loadding from './components/Loadding';
import './App.css';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featuredData, setFeaturedData] = useState(null);

  useEffect(()=>{

    const loadAll = async () => {

      // Pegar toda lista de filme
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      // console.log(list)

      // Pegando o Featured
      let originals = list.filter(i=>i.slug === 'originais');
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1));
      let chosen = originals[0].items.results[randomChosen]; 

      let featured = await Tmdb.getMovieInfo(chosen.id, 'tv');

      console.log(featured);
      setFeaturedData(featured);

    }

    loadAll();

 

  }, []);

  return (
   
    <div className="page">
      <Header/>
      {
        featuredData && <FeaturedMovie item={featuredData}/>
      }
      <section className="lists">
        {
          movieList.map((item, key) => (
            <MovieRows key={key} title={item.title} items={item.items}/>
          ))
        }
      </section>
      <Footer/>
      {movieList.length <= 0 &&
        <Loadding/>
      }
    </div>
  );

} 