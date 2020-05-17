import React, {Component} from 'react';

class TodoFilters extends Component {

    state = {
        term: ''
    };

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        const {todosCount, doneCount, filter, onFilterChange} = this.props;
        return (
            <div className="row align-items-center justify-content-between">
                <div className="col-lg-3">
                    <div className="btn-group mb-3 todo-filters" role="group" aria-label="Second group">
                        {
                            this.buttons.map(({name, label}) => {
                                const isActive = filter === name;
                                const clazz = isActive ? "btn-primary" : "btn-secondary";
                                return (
                                    <button type="button"
                                            key={name}
                                            className={`btn ${clazz}`}
                                            onClick={() => onFilterChange(name)}
                                    >{label}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="col-lg-6">
                    <input placeholder="Type to search"
                           type="text" value={this.state.term}
                           className="form-control search mb-3"
                           onChange={this.onSearchChange}
                    />
                </div>

                <div className="col-lg-3">
                    <div className="done-counter mb-3">{todosCount} more to do, {doneCount} done</div>
                </div>
            </div>
        )
    }
};

export default TodoFilters;