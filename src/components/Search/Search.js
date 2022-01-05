import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Search.scss'

const Search = ( { match } ) => {

  const [movieList, setMovieList] = useState({
    isFetched: false,
    data: {},
    error: null
  })

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/search/movie?query=${match.params.searchQuery}`, {
      params: {
        api_key: "5a7f563cfd45b94e412aa8504472de5c"
      }
    })
      .then(function (response) {
        setMovieList({
          isFetched: true,
          data: response.data,
          error: false
        })
      })
      .catch(function (error) {
        setMovieList({
          isFetched: true,
          data: [],
          error: error
        })
      })
  }, [movieList])

  return (
    <>
      <div className="container">
        {
          movieList.isFetched ? (
            <div className="list__info">
              {
                movieList.data.results.map((movie, index) => (

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
          ) : (
              <div>
                <h1>Bunaqa kino topilmadi :(</h1>
                <h1>Bunaqa kino topilmadi :(</h1>
                <h1>Bunaqa kino topilmadi :(</h1>
                <h1>Bunaqa kino topilmadi :(</h1>
                <h1>Bunaqa kino topilmadi :(</h1>
                <h1>Bunaqa kino topilmadi :(</h1>
              </div>
            )

        }
      </div>
    </>
  )
}

export default Search;