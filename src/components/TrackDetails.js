import React from 'react';

const TrackDetails = ({track}) => {

  return (

    <div className="track-details">
      <div className="track-name">
        <h3>{track["im:name"].label}</h3>
      </div>
      <div className="artist-name">
        <h4>{track["im:artist"].label}</h4>
      </div>
      <div className="release-image">
        <img src={track["im:image"][2].label}/>
      </div>
    </div>

  )
}

export default TrackDetails;
