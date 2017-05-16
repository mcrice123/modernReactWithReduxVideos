import React, { Component }  from 'react';

class Counter extends Component {
	constructor(props) {
			super(props);
	}

	render() {
		return(
			<div id="counter">
				<div id="plus" onClick={this.props.didAdd}>
					+
				</div>
				<div id="minus" onClick={this.props.didMinus}>
					-
				</div>
			</div>
		);
	}
}
export default Counter;