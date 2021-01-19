import React,{useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [movie, setMovie] = useState(null);
  useEffect(()=>{
  axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7d01e2f21937769f340b6be2e4f1f146&page=1')
  .then (data =>{
    setMovie(data.data)
    console.log(data.data)
    
  })
  .catch(error => console.log(error))
}, [])
  return (
    <div className="App">
      {movie &&(
        <div>
          {movie.results.map(wynik=>(
            <h1>
              {wynik.original_title}
            </h1>
          ))}
        </div>
        )}
    </div>
  );
}

export default App;
