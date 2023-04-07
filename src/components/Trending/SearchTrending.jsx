import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cards } from '../Results/Cards'
import './SearchTrending.css'


export const SearchTrending = () => {
    const [dropvalue, setDropvalue] = useState("day")
    const [radiovalue, setRadiovalue] = useState("movie")
    const [data, setData] = useState([])
    const [generedata, setGenredata] = useState([])

    console.log(data)


    useEffect(() => {

        const Trendingdata = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/trending/${radiovalue}/${dropvalue}?api_key=5eafbd3ac98d48f8172fb4929b67f1a1`)
            const data = await res.json()
            setData(data.results)
        }

        const Genredata = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/genre/${radiovalue}/list?api_key=5eafbd3ac98d48f8172fb4929b67f1a1&language=en-US`)
            const data = await res.json()
            console.log(data.genres)
            setGenredata(data.genres)
        }

        Trendingdata()
        Genredata()


    }, [dropvalue, radiovalue])





    return (
        <>
            <div className="searchcontainer">
                <div className="searchbuttons">
                    <label>Popular:</label>
                    <select id="selectinput" onChange={(e) => {
                        setDropvalue(e.target.value)
                    }} >
                        <option value="day">Today</option>
                        <option value="week">This week</option>

                    </select>

                    <div className="buttons">
                        <input type="radio" value="movie" name="radio" id="movies" checked={radiovalue === "movie"} onChange={(e) => {
                            setRadiovalue(e.target.value)
                        }} />
                        <label for="movies">Movies</label>
                        <input type="radio" value="tv" name="radio" id="series" checked={radiovalue === "tv"} onChange={(e) => {
                            setRadiovalue(e.target.value)
                        }} />
                        <label for="series">Series</label>

                    </div>

                </div>
                <hr />


            </div>


            <div className="result">
                <div className="cards-container">
                    {
                        data.map((ele) => {
                            console.log(ele)
                            return <Link to={`${ele.media_type}/${ele.id}`}>
                                <Cards image={`https://image.tmdb.org/t/p/w154${ele.poster_path}`} moviename={ele.title} tvname={ele.name} moviedate={ele.release_date} tvdate={ele.first_air_date} votes={ele.vote_average} genre={ele.genre_ids} generedata={generedata} />
                            </Link>
                        })

                    }



                </div>

            </div>
        </>
    )
}
