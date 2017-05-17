import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import VideoList from './components/video_list';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBtPUNwPiNmPM77hY4XV4q6YdCF6_c8o1E';

// Create a new component. This component should produce
// some HTML.
class App extends Component {
	constructor(props) {
		super(props);

		this.state = { videos: [] };

		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
		});

	}

	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}


// Take this component's HTML and put it on the page (DOM)
ReactDOM.render(<App />, document.querySelector('.container'));