import React, {Component} from 'react';

class TodoItem extends Component {



    render() {
        const {label, id, isDone} = this.props.todos;

        return (
            <li className={`list-group-item d-flex todo-item align-items-center justify-content-between 
            ${isDone ? " isDone" : null}`}>
                {label}
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group" role="group" aria-label="First group">
                        <button onClick={() => this.props.onToggleTodo(id)} className="btn btn-outline-success">
                            <i className="fa fa-check"></i>
                        </button>
                        <button onClick={() => this.props.onDeleteTodo(id)} className="btn btn-outline-danger">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}

export default TodoItem;