import React, {Component} from 'react';
import "./TodoList.css";
import InputBar from "./InputBar";
import TodoFilters from "./TodoFilters";
import TodoItem from "./TodoItem";

class TodoList extends Component {

    constructor() {
        super();
        this.count = 100;
    }

    state = {
        todos: [
            {label: "Do homework", id: 1, isDone: false},
            {label: "Play guitar", id: 2, isDone: false},
            {label: "Learn react", id: 3, isDone: false}
        ]
    };

    deleteTodo = (id) => {
        this.setState(({todos}) => {
            const index = todos.findIndex((el) => el.id === id);
            const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];

            return {
                todos: newTodos
            }
        })
    };

    addTodo = (label) => {
      this.setState(({todos}) => {
          const newTodo = {label: label, id: this.count++, isDone: false};
          return {
              todos: [...todos, newTodo]
          }
      })
    };

    toggleTodo = (id) => {
        this.setState(({todos}) => {
            const index = todos.findIndex((el) => el.id === id);

            const oldItem = todos[index];
            const newItem = {...oldItem, isDone: !oldItem.isDone};

            return {
                todos: [
                    ...todos.slice(0, index),
                    newItem,
                    ...todos.slice(index + 1)]
            }
        })
    };

    render() {
        return (
            <div className="container d-flex justify-content-center">
                <div className="col-lg-8">
                        <TodoFilters/>
                        <InputBar todos={this.state.todos} onAddTodo={this.addTodo}/>

                        <ul className="list-group todo-list">
                            {
                                this.state.todos.map(todos => <TodoItem onDeleteTodo={this.deleteTodo}
                                                                        onToggleTodo={this.toggleTodo}
                                                                        key={todos.id}
                                                                        todos={todos}/>)
                            }
                        </ul>
                </div>
            </div>
        )
    }
}

export default TodoList;