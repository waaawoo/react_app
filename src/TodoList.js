import React, { Component } from 'react';
import Todo from './Todo';


class TodoList extends Component {

  render() {
    const todos = this.props.todos.map( todo =>
      <Todo
        key={todo.id}
        // todoに入っているすべての要素を引き継ぐ
        {...todo}
      />
    )

    return(
      <ul>
        {todos}
      </ul>
    );
  }
}

export default TodoList
