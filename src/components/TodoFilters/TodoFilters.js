import React, {Component} from 'react';

class TodoFilters extends Component {
    render() {
        return (
            <div className="btn-group mb-3" role="group" aria-label="Second group">
                <button type="button" className="btn btn-secondary">All</button>
                <button type="button" className="btn btn-secondary">Done</button>
                <button type="button" className="btn btn-secondary">Not done</button>
            </div>
        )
    }
}

export default TodoFilters;