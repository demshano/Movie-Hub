import { useState, useEffect } from 'react';

export const UseFetch = (apiPath, queryTerm="") => {

const [data, setData] = useState([]);
const url =`https://api.themoviedb.org/3/${apiPath}?api_key=a65a50fa7876b631c58b24400a9b4b7f&query=${queryTerm}`;

useEffect(()=> {
    async function fetchMovies(){
        const response = await fetch(url);
        const json = await response.json();
        setData(json.results);
    }  
    fetchMovies();
}, [url])



  return { data }

}
