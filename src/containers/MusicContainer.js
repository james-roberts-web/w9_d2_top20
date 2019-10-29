import React, { Component } from 'react';
import ChartList from '../components/ChartList';

class MusicContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      tracks: [],
      currentTrack: null
    };
  }

  componentDidMount() {
    const url = "https://itunes.apple.com/gb/rss/topsongs/limit=20/json";

    fetch(url)
      .then(res => res.json())
      .then(tracks => this.setState({tracks: tracks}))
      .catch(err => console.error(err));
    }
  render () {
    return (
      <ChartList></ChartList>
    )
  }
}

export default MusicContainer;
