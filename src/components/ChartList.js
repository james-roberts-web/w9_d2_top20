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

    <ul className="chart-list">
    {tracks}
    </ul>

  )
}




export default ChartList;
