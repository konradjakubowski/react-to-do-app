import React from 'react';

const Todo = ({item, removeTodo}) => {
    return <li onClick = {() => removeTodo(item.id)}> {item.text} </li>;
};

export default Todo;