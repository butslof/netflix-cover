const limitCaracter = (text) => {

    if(text.length > 200){
        return text.substring(0, 200) + '...';
    }
    else{
        return text;
    }

}



export default limitCaracter;