import React from 'react';
import PropTypes from "prop-types"

function TextInput(props) {

    return (
        <>
            <div>
                <label htmlFor={props.id}>{props.label}</label>
                <input
                    id={props.id}
                    type="text"
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                />
            </div>
        </>
    )
}

TextInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default TextInput;