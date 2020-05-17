import React, {Component} from 'react';
import "./TodoList.css";
import TodoFilters from "../TodoFilters/TodoFilters";
import InputBar from "../InputBar/InputBar";
import TodoItem from "../TodoItem/TodoItem";

export default class TodoList extends Component {

    constructor() {
        super();
        this.genId = 100
    }

    createTodo = (label) => {
        return {label, id: this.genId++, isDone: false, isImportant: false};
    };

    state = {
        todos: [],
        term: '',
        filter: 'all'
    };

    toggleProperty = (arr, id, propName) => {
        const index = arr.findIndex((el) => el.id === id);

        const oldItem = arr[index];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)]
    };
    deleteTodo = (id) => {
        this.setState(({todos}) => {
            const index = todos.findIndex((el) => el.id === id);
            const newTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
            return {todos: newTodos}
        })
    };
    addTodo = (text) => {
        this.setState(({todos}) => {
            const newTodo = this.createTodo(text);
            return {todos: [...todos, newTodo]}
        })
    };
    toggleDoneTodo = (id) => {
        this.setState(({todos}) => {
            return {todos: this.toggleProperty(todos, id, 'isDone')}
        })
    };
    toggleImportantTodo = (id) => {
        this.setState(({todos}) => {
            return {todos: this.toggleProperty(todos, id, 'isImportant')}
        })
    };
    onSearchChange = (term) => {
        this.setState({term})
    };
    onFilterChange = (filter) => {
        this.setState({filter})
    };
    search = (arr, term) => {
        if (term.length === 0) return arr;
        return arr.filter(item => {
            return item.label.indexOf(term) > -1;
        })
    };
    filter(arr, filter){
        switch (filter) {
            case 'all':
                return arr;
            case 'active':
                return arr.filter(item => !item.isDone);
            case 'done':
                return arr.filter(item => item.isDone);
            default:
                return arr;
        }
    }

    render() {
        const {todos, term, filter} = this.state;
        let doneCount = todos.filter(item => item.isDone).length;
        let todosCount = todos.length - doneCount;
        const visibleItems = this.filter(this.search(todos, term), filter);
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <TodoFilters doneCount={doneCount}
                                     todosCount={todosCount}
                                     onSearchChange={this.onSearchChange}
                                     onFilterChange={this.onFilterChange}
                                     term={term}
                                     filter={filter}

                        />
                        <InputBar todos={visibleItems} onAddTodo={this.addTodo}/>

                        <ul className="list-group todo-list">
                            {
                                visibleItems.map(todos => <TodoItem onDeleteTodo={this.deleteTodo}
                                                                    onToggleDoneTodo={this.toggleDoneTodo}
                                                                    onToggleImportantTodo={this.toggleImportantTodo}
                                                                    key={todos.id}
                                                                    todos={todos}/>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
