import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './UpComing.scss'

const UpComing = () => {

  const [upComing, setUpComing] = useState({
    isFetched: false,
    data: {},
    error: null
  })

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/upcoming`, {
      params: {
        api_key: "5a7f563cfd45b94e412aa8504472de5c"
      }
    })
      .then(function (response) {
        setUpComing({
          isFetched: true,
          data: response.data,
          error: false
        })
      })
      .catch(function (error) {
        setUpComing({
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
          upComing.isFetched ? (
            <div className="list__upcoming">
              {
                upComing.data.results.map((movie, index) => (

                    <Link to={`/movie/${movie.id}`} className="card__upcoming">
                    <span className="card__upcoming-rating">{movie.vote_average}</span>
                    <div className="card__upcoming-img-holder">
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="img" className="card__upcoming-img" />
                    </div>
                    <h3 className="card__upcoming-title">{movie.title}</h3>
                    <h5 className="card__upcoming-date">{movie.release_date}</h5>
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

export default UpComing;