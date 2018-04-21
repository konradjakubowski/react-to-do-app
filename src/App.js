import React, { Component } from 'react';
import Title from './components/Title.js';
import TodoList from './components/TodoList.js';
import TodoForm from './components/TodoForm.js';
import style from './App.css';
import uuid from 'uuid';

class App extends Component {
  constructor(props){
        super(props);
        this.state = {
            data: [{
                id: 1,
                    text: 'Work it harder'
                }, {
                id: 2,
                    text: 'Make it better'
                }, {
                id: 3,
                    text: 'Do it faster'
                }, {
                id: 4,
                    text: 'Makes us stronger'
                }],
            value: ''
        };
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(val) {
        const todo = { 
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo]; 
        this.setState({data});
    }

    removeTodo(id) {
      const remainder = this.state.data.filter(todo => todo.id !== id);
      this.setState({data: remainder});
    }

    render() {
    return (
      <div className={'TodoApp'}>
          <Title apptitle='To Do React Application' desc='A Portfolio Project of Konrad Jakubowski' />                {/* komponent Title.js */}
          <TodoList list={this.state.data} remove={this.removeTodo.bind(this)} />
          <TodoForm add={this.addTodo.bind(this)} />   
        </div>
    );
  }
}

export default App;