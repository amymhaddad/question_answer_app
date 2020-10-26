import React from 'react';
import PropTypes from "prop-types"

function SubmitForm(props) {

    return (
        <input
            type="submit"
            value={props.value}
            className="btn btn-primary"
            onClick={props.onClick}
        />
    )
}

SubmitForm.propTypes = {
    value: PropTypes.string
}

export default SubmitForm; 
