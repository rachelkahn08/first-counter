import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);

		this.state = {
			title: this.props.title,
			value: 0
		}
		
	}

	increment() {
		this.setState({ value: this.state.value + 1 });
	}

	decrement() {
		if (this.state.value <= 0) {
			this.setState({ value: 0 });
		} else {
			this.setState({ value: this.state.value - 1 });	
		}
		
	}

	reset() {
		this.setState({ value: 0 });
	}
	
	render() {

		const { title } = this.props;
		
		return (
				<div>
					<h3>{ this.state.title }</h3>
					<div> { this.state.value } </div>
					<button onClick={this.increment}>+</button>
					<button onClick={this.decrement}>-</button>
					<button onClick={this.reset}>reset</button>
				</div>
		);
	}
}

export default Counter;