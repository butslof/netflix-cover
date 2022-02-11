import React, {useState} from "react";
import './MovieRows.css';
import NavigateBeforeIcon  from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon  from '@material-ui/icons/NavigateNext';

export default props =>{

    const [scrollX, setScrollX] = useState(-400);

    const handleLeftArrow = () => {

        let x = scrollX + Math.round(window.innerWidth / 2);

        if(x > 0){
            x = 0;
        }

        setScrollX(x);

    }

    const handleRightArrow = () => {

        let x = scrollX - Math.round(window.innerWidth / 2);

        let listW =  props.items.results.length * 150;

        if((window.innerWidth - listW) > x){
            x = (window.innerWidth - listW) - 60;
        }

        setScrollX(x);
    }

    return(
        <div>
            <div className="movieRow--listarea">
                <h2> {props.title} </h2>
                <div className="movie-row-left" onClick={handleLeftArrow}>
                    <NavigateBeforeIcon style={{fontSize: 50}} />
                </div>
                <div className="movie-row-right" onClick={handleRightArrow}>
                    <NavigateNextIcon style={{fontSize: 50}} />
                </div>
                <div  className="movieRow--list" style={{
                    marginLeft: scrollX ,
                    width: props.items.results.length * 150                
                }}>
                    {
                        
                        props.items.results.length > 0  && props.items.results.map((item, key) => (

                            <div key={key} className="movieRow--item">
                                {/* <h3>{item.title}</h3> */}
                                <img src={`https://image.tmdb.org/t/p/w200/${item.poster_path}`} alt={item.original_title}/> 
                            </div>

                        ))
                    
                    }
                </div>
               
           </div>
        </div>
    );
    
}