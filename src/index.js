import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

// components Imported
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDxmnzEB5Xsn_Em4pz2EUxgpoPvQy3Yb_c';


// Create new Component. This component should produce some HTML

class App  extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [] ,
            selectedVideo: null
        };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ 
                videos: videos,
            selectedVideo: videos[0] 
        });
            console.log(this.state);
        });
    }


    render() {
        return (
        <div>
            <SearchBar />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList 
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
        );
    }
}
//Take the component generated HTML an put it on the page(in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));