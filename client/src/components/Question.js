
import axios from "axios"
import React, { useState, useEffect } from 'react';
import ShowQuestions from "./ShowQuestions"
import Header from "../common/Header"
import { getApiQuestion } from "../helpers/apiRequests"

function Question(props) {
    const [question, setQuestion] = useState([])

    useEffect(() => {
        const id = parseInt(props.match.params.id)
        getApiQuestion(id)
            .then((response) => {
                setQuestion([response.data])
            })
            .catch((error) => console.log("err", error))
    }, [])

    return (
        <>
            <Header />
            <ul>
                {question.map(question => (
                    <ShowQuestions
                        key={question.id}
                        id={question.id}
                        question={question.question}
                        answer={question.answer}

                    />
                ))}
            </ul>

        </>

    )
}

export default Question;