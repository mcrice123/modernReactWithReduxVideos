import React, { Component }  from 'react';

class Display extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return(
			<div id="display">
				<h1>{this.props.num}</h1>
			</div>
		);
	}
}
export default Display;