import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Details.css'


export const Details = () => {
    const { id, media } = useParams()
    // console.log(id, media)
    const [moviedetails, setMoviedetails] = useState([])
    const [castdetails, setCastdetails] = useState([])
    console.log(castdetails)


    useEffect(() => {
        const moviedetails = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/${media}/${id}?api_key=5eafbd3ac98d48f8172fb4929b67f1a1`)
            // console.log(res)
            const data = await res.json()
            // console.log(data)
            setMoviedetails(data)


        }

        const castcrew = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/${media}/${id}/credits?api_key=5eafbd3ac98d48f8172fb4929b67f1a1`)
            console.log(res)
            const data = await res.json()
            console.log(data)
            setCastdetails(data)



        }

        moviedetails()
        castcrew()

    }, [media, id])

   





    return (
        moviedetails ? (

            <>
                <div className="imagecontainer" style={{ background: ` linear-gradient(transparent, rgb(0, 0, 0,0.8) 70%, black),url(https://image.tmdb.org/t/p/w1280/${moviedetails.backdrop_path})` }}>

                    <div className="imagesdetails">
                        <img src={`https://image.tmdb.org/t/p/w154${moviedetails.poster_path}`} alt="" />
                        <div className="cardsdetails">
                            <div className="percent">
                                <p>  {moviedetails && (moviedetails.vote_average * 10).toFixed(1)}%
                                </p>
                            </div>
                            <div className="relase">
                                <p>{moviedetails && (moviedetails.release_date || moviedetails.first_air_date)}</p>
                                <p>{moviedetails && moviedetails.runtime} mins</p>
                                <p>English</p>
                            </div>
                            <div className="title">
                                <p>Drama</p>
                                <h2>{moviedetails && (moviedetails.title || moviedetails.name)}</h2>

                            </div>


                        </div>
                    </div>



                </div>
                <div className="castcontanier">
                    <div className="plot">
                        <h1>Plot</h1>
                        <hr />
                        <p>{moviedetails.overview}</p>
                    </div>
                    <div id="cast" className="cast">
                        <h1>Cast</h1>
                        <hr />
                        {
                            castdetails.cast?.map((ele,idx) => {
                                return (
                                    idx<5?(  <div class="castdetails">
                                    <img src={`https://image.tmdb.org/t/p/w45${ele.profile_path}`} alt={ele.name} />
                                    <p>{ele.name}</p></div>):(<>
                                    </>)
                                    
                                  
                                )
                            })
                        }
                        <button className='castbtn'>See more...</button>

                    </div>

                </div>
            </>
        ) : (
            <>

            </>
        )




    )
}
