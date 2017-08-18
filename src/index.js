import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar';
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const YOUTUBE_API_KEY = 'AIzaSyCCnPbp9INLQUDMwDIqZsnNjXdO0RUyma0'
const GOOGLE_MAPS_API_KEY = 'AIzaSyDdcFGPEu80h_fp_EdE3CYnp6MQFI9MJdU'


class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
    	videos: [],
    	selectedVideo: null

    };

		YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
  	  this.setState({ 
  	  	videos: videos, 
				selectedVideo: videos[0]
  	  })
	});

  }

  render() {
		return (
		  <div>
		    <SearchBar />
		    <VideoDetail video={this.state.selectedVideo}/>
		    <VideoList 
		    	onVideoSelect={selectedVideo => this.setState({selectedVideo})}
		    	videos={this.state.videos} 
		    />
		  </div>
		);	
  }
};

ReactDOM.render(<App />, document.querySelector('.container'));