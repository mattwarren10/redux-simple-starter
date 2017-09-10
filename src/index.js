import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import YTSearch from "youtube-api-search";

import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import LoadingIcon from "./components/loading_icon"
import Footer from "./components/footer"

const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      coldplay: "something just like this"
    };
 
    this.videoSearch(this.state.coldplay);
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]        
      });
    });    
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div className="container">        
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
          />
        </div>        
        <Footer />
      </div>
    );
  }
}
if(typeof window !== 'undefined') {
  ReactDOM.render(
    <IntlProvider locale="en">
      <App />
    </IntlProvider>, document.querySelector(".container"));
}