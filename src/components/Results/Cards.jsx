import React from 'react'
import './Cards.css'


export const Cards = (props) => {
  // console.log(props.generedata)
  //  const newgenre = props.generedata.find((ele)=>{
  //   return ele.id === props.genre[0]
  // })

  // console.log(newgenre.name)
  
  return (
    <>
        <div class="poster">
          <img src={props && props.image} alt={props.moviename || props.tvname} />

          <div class="imgcontent">
            <h3>{props && (props.moviename || props.tvname)}</h3>
            {/* <small>{ newgenre.name && newgenre.name}</small> */}
            <small> Action | Drama</small>
            <p>{props && ((props.moviedate || props.tvdate))}</p>
          </div>
          <div class="votes">
            {props && ((props.votes *10).toFixed(1))} %
           
            

          </div>


        </div>

    </>

  )
}
