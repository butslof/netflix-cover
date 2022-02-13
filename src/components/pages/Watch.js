import React, {useEffect, useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import Tmdb from "../../Tmdb";
import { useParams } from 'react-router-dom';
import ReactNetflixPlayer from "react-netflix-player";



export default props =>{


    let { id, type } = useParams();

    const [movieInfo, setMovieInfo] = useState('');

    useEffect (() =>{


        const loadInfo = async () => {

            setMovieInfo(await Tmdb.getMovieInfo(id, type));

        }

        loadInfo();

    },[])
    
 

    return(
        <div className="page">
            <Header/>
                <div className="player">
                    <ReactNetflixPlayer  
                        title={movieInfo.original_name} 
                        src="http://localhost/react/netflix-cover/videos/lucifer.mp4"
                        fullPlayer={false}
                        primaryColor='#db232a'
                    />
                </div>
            <Footer/>
        </div>
    )
}