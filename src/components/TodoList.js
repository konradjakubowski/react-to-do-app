import React from 'react';
import Todo from './Todo.js';

const TodoList = props => {
	const todoList = props.list.map(item => {
	    return <Todo item={item} removeTodo={props.remove} key={item.id}/>;
	  });
	return <ul>{todoList}</ul>;             
};

export default TodoList;