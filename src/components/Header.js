import React, { useEffect, useState } from "react";
import './Header.css'



export default props => {
    
    const [headerBlack, setHeaderBlack] = useState('');

    useEffect(()=>{

        const scrollEvent = () => {
            if(window.scrollY > 10){
                setHeaderBlack('header-black');
            }
            else{
                setHeaderBlack('');
            }
        }

        window.addEventListener('scroll', scrollEvent);

        return () =>{
            window.removeEventListener('scroll', scrollEvent)
        }
        

    }, []);

    return(
        <header className={headerBlack}>
            <div className="header-logo">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"/>
                </a>
            </div>
            <div className="header-user">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" />
                </a>
            </div>
        </header>
    );
}