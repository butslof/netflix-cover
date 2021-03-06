import React  from "react";
import LimitCaracter from "./functions/LimitCaracter";
import { Link } from "react-router-dom";

import './FeaturedMovie.css'


export default props => {

    let firstDate = new Date(props.item.first_air_date);

    return(
        <div className="featured" style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${props.item.backdrop_path})`,
        }}>
            <div className="featured-vertical">
                <div className="featured-horizontal">
                    <div className="featured-name">
                        <h1>{props.item.original_name}</h1>
                    </div>
                    <div className="featured-info">
                        <div className="featured-points">
                            {props.item.vote_average} pontos
                        </div>
                        <div className="featured-year">
                            {firstDate.getFullYear()}
                        </div>
                        <div className="featured-seasons">
                            {props.item.number_of_seasons} temporada{props.item.number_of_seasons !== 1 && 's'}
                        </div>  
                        <div className="featured-description">
                            {LimitCaracter(props.item.overview)}
                        </div> 
                        <div className="featured-buttons">
                            <Link to={`/watch/tv/${props.item.id}`} className="light-button" >&#9658; Assistir</Link>
                            <Link to={`/list/add/${props.item.id}`} className="my-list-button">+ Minha Lista</Link>

                        </div> 
                        <div className="featured-description">
                            <strong>Genêros: </strong>
                            {
                                props.item.genres.map((item, key)=>(

                                   <span key={key}>{item.name} </span>

                                ))
                            }
                        </div> 
                    </div>     
                </div>
            </div>
          
        </div>
    );
}
   