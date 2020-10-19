import React from 'react';
import PropTypes from "prop-types"

function DropDown(props) {

    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <select
                id={props.id}
                name={props.name}
                onChange={props.onChange}
                selectValue={props.selectValue}
            >
                <option>--</option>
                <option value={props.value1} > Ascending </option>
                <option value={props.value2} > Descending </option>
            </select>
        </>
    )
}

DropDown.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.func.isRequired,
    value: PropTypes.string
}
export default DropDown;
