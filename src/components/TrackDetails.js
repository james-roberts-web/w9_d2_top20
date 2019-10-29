import React from 'react';

const TrackDetails = ({track}) => {

  return (

    <div className="track-details">
      <div className="release-image">
        <img src={track["im:image"][1].label}/>
      </div>
      <div className="track-and-artist">
        <div className="artist-name">
          <h4>{track["im:artist"].label}</h4>
        </div>
        <div className="track-name">
          <h3>{track["im:name"].label}</h3>
        </div>
      </div>
    </div>
  )
}

export default TrackDetails;
