import { useState, useEffect } from 'react'
import axios from 'axios'
import ActorsTvCard from '../components/ActorsTvCard'
import TvRecommendCard from '../components/TvRecommendCard'

const SingleShow = ({ match }) => {

    const [tvActorsInfo, setTvActorsInfo] = useState({
        isFetched: false,
        data: {},
        error: null
    })
    
    
    const [tvShowInfo, settvShowInfo] = useState({
        isFetched: false, 
        data: {},
        error: null
    })
    
    
    const [recommendInfo, setRecommendInfo] = useState({
        isFetched: false, 
        data: {},
        error: null
    })
    
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/tv/${match.params.id}`, {
        params: {
            api_key: '5a7f563cfd45b94e412aa8504472de5c'
        }
    })
    .then(function (response) {
        settvShowInfo({
            isFetched: true,
            data: response.data,
            error: false,
        })
    })
    .catch(function (error) {
        settvShowInfo({
            isFetched: true,
            data: [],
            error: error,
        }) 
    }) 





    axios.get(`https://api.themoviedb.org/3/tv/${match.params.id}/credits`, {
        params: {
            api_key: '5a7f563cfd45b94e412aa8504472de5c'
        }
    })
    .then(function (response) {
        setTvActorsInfo({
            isFetched: true,
            data: response.data,
            error: false,
        })
    })
    .catch(function (error) {
        setTvActorsInfo({
            isFetched: true,
            data: [],
            error: error,
        }) 
    }) 
    
    
    axios.get(`https://api.themoviedb.org/3/tv/${match.params.id}/recommendations`, {
    params: {
        api_key: '5a7f563cfd45b94e412aa8504472de5c'
    }
})
.then(function (response) {
    setRecommendInfo({
        isFetched: true,
        data: response.data,
        error: false,
    })
})
.catch(function (error) {
    setRecommendInfo({
        isFetched: true,
        data: [],
        error: error,
    }) 
})


}, [])



return (
    <>
    <div className="container">
    {
       tvShowInfo.isFetched && tvActorsInfo.isFetched && recommendInfo.isFetched  ? (
           
            <div className="movie__info">
            <h2 className='info__title'> {tvShowInfo.data.name} </h2>
            <div className="info__wrapper">
            <div className="info__details">
            <h4 className='info__overview'>Language: {tvShowInfo.data.original_language}</h4>
            <h4 className='info__overview'>Realease date: {tvShowInfo.data.first_air_date}</h4>
            <h4 className='info__overview'>Runtime: {tvShowInfo.data.popularity}</h4>
            {
                tvShowInfo.data.genres.map ((genre, index) => (
                    <button className='info__btn' key={index} >{genre.name}</button>
                    ) )
                }
                </div>
                <div className="info__overview-holder">
                <p className='info__overview'> {tvShowInfo.data.overview} </p>
                <a className='info__link' href={tvShowInfo.data.homepage} target='blank'>Official site</a>
                </div>
                </div>
                
                
                
                
                <h3 className='tvactor__title'>tvActors</h3>
                <div className="tvactors__list">
                {
                    tvActorsInfo.data.cast.map ((tvactor, index) => (
                        <ActorsTvCard 
                        id={tvactor.id}
                        key={index}
                        name={tvactor.name}
                        imgLink={`https://image.tmdb.org/t/p/w500${tvactor.profile_path}`}
                        
                        />
                        ))
                    }
                    </div> 




                    
                    <h3 className='recommendation__title'>Recommendation</h3>
                    <div className="tv-recommend__list">
            {
                recommendInfo.data.results.map((index, recommend) => (
                    <TvRecommendCard 
                    id={recommend.id}
                    key={index.id}
                    title={index.name}
                    date={index.first_air_date}
                    rating={index.vote_average}
                    imgLink={`https://image.tmdb.org/t/p/w500${index.poster_path}`}
                    />
                    ))
                }
                </div>
                    
                        </div>
          
                ) : (
                    <h1>Loading...</h1>  
                    ) 
                }
                </div>
                </>
                )
            }
            export default SingleShow
            
            
            