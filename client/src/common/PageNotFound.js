import React from 'react';
import { Link } from "react-router-dom"

function PageNotFound() {

    return (
        <>
            Page Not Found: 404 error

            <Link to="/"> <h2>Back to Home</h2> </Link>
        </>
    )
}

export default PageNotFound;