import React, { Component } from 'react';
import ChartList from '../components/ChartList';

class MusicContainer extends Component {

  constructor(props){
    super(props);

    this.state = {
      tracks: []
    };
  }

  componentDidMount() {

    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(res => res.json())
      .then(tracks => this.setState({ tracks: tracks.feed.entry }))
      .catch(err => console.error(err));
    }

  render () {
    return (

      <div className="music-container">
        <div className="header">
          <h1 className="title"> Top 20 Charts </h1>
        </div>
        <div className="subheader">
          <p>Has anyone seen Zane Lowe about?</p>
        </div>
        <ChartList tracks={ this.state.tracks }></ChartList>
      </div>

    )
  }
}

export default MusicContainer;
