import React, { Component } from 'react';
import TrackDetails from '../components/TrackDetails';

const ChartList = (props) => {

  const tracks = props.tracks.map((track, index) => {

    return(

      <TrackDetails key={ index } track={ track }>
      </TrackDetails>

    )
  })

  return(
    <div className="chart-list-container">
      <ul className="chart-list">
        {tracks}
      </ul>
    </div>

  )
}




export default ChartList;
