import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';
import './TopRated.scss'


const TopRated = () => {

  const [topRatedMovie, setTopRatedMovie] = useState({
    isFetched: false,
    data: {},
    error: null
  })

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/top_rated`, {
      params: {
        api_key: "5a7f563cfd45b94e412aa8504472de5c"
      }
    })
      .then(function (response) {
        setTopRatedMovie({
          isFetched: true,
          data: response.data,
          error: false
        })
      })
      .catch(function (error) {
        setTopRatedMovie({
          isFetched: true,
          data: [],
          error: error
        })
      })
  }, [])


  return (
    <>
      <div className="container">
        {
          topRatedMovie.isFetched ? (
            <div className="list__ranking">
              {
                topRatedMovie.data.results.map((movie, index) => (
                  
                  <Link to={`/movie/${movie.id}`} className="rated__card">
                    <span className="rated__ranking">{movie.vote_average}</span>
                    <div className="img__holder">
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="img" className="rated__img" width='200' height='300' />
                    </div>
                    <h3 className="rated__title">{movie.title}</h3>
                    <h5 className="rated__date">{movie.release_date}</h5>
                  </Link>
                
                ))
              }
            </div>
          )
            : (
              <h1>Loading...</h1>
            )

        }
      </div>
    </>
  )
}

export default TopRated;