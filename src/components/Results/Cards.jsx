import React from 'react';
import './Cards.css';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Cards = (props) => {
  return (
    <>
      <div className="poster">
        <img src={props && props.image} alt={props.moviename || props.tvname} />

        <div className="imgcontent">
          <h3>{props && (props.moviename || props.tvname)}</h3>
          <small>Action | Drama</small>
          <p>{props && ((props.moviedate || props.tvdate))}</p>
        </div>
        
        <div className="votes">
          <CircularProgressbar
            className="progressbar"
            value={props && ((props.votes * 10).toFixed(1))}
            text={`${props && ((props.votes * 10).toFixed(1))}%`}
            styles={{
              path: {
                stroke: 'hsl(102, 65%, 60%)',
              },
              text: {
                fill: 'hsl(102, 65%, 60%)',
              },
              text: {
                fill: 'white',
                // Text size
                fontSize: '24px',
              },
            }}
          />
        </div>
      </div>
    </>
  );
};
