import React from 'react';

class TodoForm extends React.Component {
	add() {
		var inputValue = this.refs.TodoInput.value;
		if (inputValue.length > 2) {
			this.props.add(inputValue);
		}
	}

	render() {
		return (<div>
			<input ref='TodoInput' />
			<button onClick={this.add.bind(this)}>Add</button>
		</div>)
	}
}

export default TodoForm;