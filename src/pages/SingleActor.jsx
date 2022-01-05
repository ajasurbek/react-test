import { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './SingleActor.scss'

const SingleActor = ( { match } ) => {
  
  
  const [ movieCredits, setMovieCredits ] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  
  const [credits, setCredits] = useState({
    isFetched: false,
    data: {},
    error: null
  })
  
  const matchId = match.params.id;
  
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/person/${matchId}/movie_credits`, {
    params: {
      api_key: "5a7f563cfd45b94e412aa8504472de5c"
    }
  })
  .then(function (response) {
    setMovieCredits({
      isFetched: true,
      data: response.data,
      error: false
    })
  })
  .catch(function (error) {
    setMovieCredits({
      isFetched: true,
      data: [],
      error: error
    })
  })
}, [])

useEffect(() => {
  axios.get(`https://api.themoviedb.org/3/movie/${matchId}/credits`, {
  params: {
    api_key: "5a7f563cfd45b94e412aa8504472de5c"
  }
})
.then(function (response) {
  setCredits({
    isFetched: true,
    data: response.data,
    error: false
  })
})
.catch(function (error) {
  setCredits({
    isFetched: true,
    data: [],
    error: error
  })
})
}, [])



return(
  <>
  <div className="container">
  
  {
    movieCredits.isFetched ? (
      <div className="list__info">
      {
        movieCredits.data.cast.map((movie, index) => (
          
          <Link to={`/movie/${movie.id}`} className="card__info">
          <span className="card__info-rating">{movie.vote_average}</span>
          <div className="card__info-img-holder">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="img" className="card__info-img" />
          </div>
          <h3 className="card__info-title">{movie.title}</h3>
          <h5 className="card__info-date">{movie.release_date}</h5>
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
      
      export default SingleActor;