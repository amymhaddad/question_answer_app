import React from 'react';
import { Link } from "react-router-dom"


function ShowQuestions(props) {

    return (
        <>
            <li style={{ listStyle: "None" }} >
                <Link to={`/questions/${props.id}`}>
                    <h2>{props.question}</h2>
                </Link>
            </li>

            <li style={{ listStyle: "None" }} >
                Answer: {props.answer}
            </li>

        </>

    )
}

export default ShowQuestions;