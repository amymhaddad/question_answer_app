
import React, { useState, useEffect } from 'react';
import ShowQuestions from "./ShowQuestions"
import Header from "../common/Header"
import ManageQuestionsForm from "./ManageQuestionsForm";
import { getApiQuestions } from "../helpers/apiRequests"
import { getApiParsedQuestions } from "../helpers/apiRequests"

function Questions() {
    const [questions, setQuestions] = useState([])
    const [params, setParams] = useState({
        distractors: "",
        answer: "",
        id: "",
        limit: "",
    })

    useEffect(() => {
        getApiQuestions()
            .then((response) => {
                setQuestions(response.data)
            })
            .catch((error) => console.log("err", error))
    }, [])

    function clearForm() {
        setParams({
            distractors: "",
            answer: "",
            limit: "",
        })
    }

    function handleChange(event) {
        setParams({ [event.target.name]: event.target.value })
    }

    function handleSubmit(event) {
        event.preventDefault()

        getApiParsedQuestions(params)
            .then((response) => handleSuccessfulRequest(response.data))
            .catch((error) => console.log("err", error))
    }

    function handleSuccessfulRequest(data) {
        setQuestions(data)
        clearForm()
    }

    return (
        <>
            <Header />
            <ManageQuestionsForm
                data={params}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />

            <ul>
                {questions.map(question => (
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

export default Questions;
