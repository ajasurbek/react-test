import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './TvShow.scss'

const TvShow = () => {
    
    const [popularTv, setPopularTv] = useState({
        isFetched: false,
        data: {},
        error: null
    })
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/popular`, {
        params: {
            api_key: "5a7f563cfd45b94e412aa8504472de5c"
        }
    })
    .then(function (response) {
        setPopularTv({
            isFetched: true,
            data: response.data,
            error: false
        })
    })
    .catch(function (error) {
        setPopularTv({
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
        popularTv.isFetched ? (
            <div className="list__tv">
            {
                popularTv.data.results.map((movie, index) => (
                    <Link to={`/movie/${movie.id}`} className="card__tv">
                    <span className="card__tv-rating">{movie.vote_average}</span>
                    <div className="card__tv-img-holder">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="img" className="card__tv-img" />
                    </div>
                    <h3 className="card__tv-title">{movie.name}</h3>
                    <h5 className="card__tv-date">{movie.first_air_date}</h5>
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
            
            export default TvShow;
            