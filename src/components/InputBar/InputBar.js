import React, {useState} from 'react';

const InputBar = (props) => {

    const [label, setLabel] = useState('');

    return (
        <form className="input-group mb-3 input-bar">
            <input
                value={label}
                onChange={(e) => setLabel(e.currentTarget.value)}
                type="text"
                placeholder="Enter the text"
                className="form-control"/>
            <div className="input-group-append">
                <button onClick={() => props.onAddTodo(label)} className="btn btn-outline-secondary"
                        type="button" id="button-addon2">
                    Add todo
                </button>
            </div>
        </form>
    )
};

export default InputBar;