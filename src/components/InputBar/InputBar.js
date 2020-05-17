import React, {useState} from 'react';

const InputBar = (props) => {

    const [label, setLabel] = useState('');

    return (
        <form onSubmit={e => {
            e.preventDefault();
            props.onAddTodo(label);
            setLabel(e.currentTarget.value = '')
        }} className="input-group mb-3 input-bar">
            <input
                value={label}
                onChange={(e) => setLabel(e.currentTarget.value)}
                type="text"
                placeholder="What's need todo?"
                className="form-control"/>
            <div className="input-group-append">
                <button  className="btn btn-outline-secondary"
                        id="button-addon2">
                    Add todo
                </button>
            </div>
        </form>
    )
};

export default InputBar;