import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Cards } from '../Results/Cards'
import '../Trending/SearchTrending.css'


export const Search = () => {
    const [searchdrop, setSearchdrop] = useState("movie")
    const [name, setName] = useState("")
    const [clickname, setClickname] = useState(name)
    const [dataarr, setDataarr] = useState([])
    console.log(dataarr)



    useEffect(() => {
      const moviesearch= async()=>{
        const res=await fetch(`https://api.themoviedb.org/3/search/${searchdrop}?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${clickname}`)
        console.log(res)
        const data= await res.json()
        console.log(data.results)
        setDataarr(data.results)

      }

      moviesearch()
    
     
    }, [searchdrop,clickname])
    




  return (
    <>

<div className="inputcontainer">
            <div className="searchinput">
                <select id="searchselect" onChange={(e)=>{
                    setSearchdrop(e.target.value)


                }}>
                    <option id="movie" value="movie">Movie</option>
                    <option id="tv" value="tv">Series</option>
                </select>
                <input type="text" id="inputsearch"  value={name} onChange={(e)=>{
                    setName(e.target.value)

                }}/>
                <button onClick={()=>{
                    setClickname(name)
                    setName("")

                }}>search
                </button>
            </div>

            <hr />


        </div>
        <div id="result" className="result">
            <div id="cards-container" className="cards-container">

            {
                        dataarr.map((ele) => {
                            console.log(ele)
                            return( <Link to= {`/${searchdrop}/${ele.id}`}><Cards image={`https://image.tmdb.org/t/p/w154${ele.poster_path}`} moviename={ele.title}  tvname={ele.name}  moviedate={ele.release_date} tvdate={ele.first_air_date} votes={ele.vote_average } genre={ele.genre_ids } />
                            </Link>)
                        })

                    }


            </div>

        </div>
    </>
   
  )
}
