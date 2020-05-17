import React, {Component} from 'react';

export default class TodoItem extends Component {

    render() {
        const {label, id, isDone, isImportant} = this.props.todos;
        const {onToggleDoneTodo, onToggleImportantTodo, onDeleteTodo} = this.props;
        return (
            <li className={`list-group-item d-flex todo-item align-items-center justify-content-between 
            ${isDone ? " isDone" : null} ${isImportant ? " isImportant" : null}` }
            >
                <div className="todo-item-label" onClick={() => onToggleDoneTodo(id)}>{label}</div>
                <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group" role="group" aria-label="First group">
                        <button onClick={() => onToggleImportantTodo(id)} className="btn important-btn btn-outline-primary">
                            <i className="fa fa-exclamation"></i>
                        </button>
                        <button onClick={() => onDeleteTodo(id)} className="btn btn-outline-danger">
                            <i className="fa fa-times"></i>
                        </button>
                    </div>
                </div>
            </li>
        )
    }
}
