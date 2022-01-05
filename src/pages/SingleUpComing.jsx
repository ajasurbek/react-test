import { useState, useEffect } from 'react'
import axios from 'axios'

const SingleUpComing = ({ match }) => {

    const [movieComingInfo, setMovieComingInfo] = useState({
        isFetched: false,
        data: {},
        error: null
    })


    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${match.params.id}/credits`, {
        params: {
            api_key: '5a7f563cfd45b94e412aa8504472de5c'
        }
    })
    .then(function (response) {
        setMovieComingInfo({
            isFetched: true,
            data: response.data,
            error: false,
        })
    })
    .catch(function (error) {
        setMovieComingInfo({
            isFetched: true,
            data: [],
            error: error,
        }) 
    }) 


}, [])

    return (
<>
<h1>hellow</h1>
</>

    )
}
export default SingleUpComing