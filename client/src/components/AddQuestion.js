import React, { useState, useEffect } from 'react';
import AddQuestionForm from "./AddQuestionForm"
import { toast } from "react-toastify"
import { postApiQuestion } from "../helpers/apiRequests"

function AddQuestion(props) {
    const [newQuestion, setQuestion] = useState({
        question: "",
        answer: "",
        distractors: ""
    })

    const [errors, setErrors] = useState({})

    function clearData() {
        setQuestion({
            question: "",
            answer: "",
            distractors: ""
        })
    }

    function handleChange(event) {
        const addQuestion = { ...newQuestion, [event.target.name]: event.target.value }
        setQuestion(addQuestion)
    }

    function handleSuccessfulPost() {
        clearData()
        props.history.push("/")
        toast.success("Successfully added a question")
    }

    function handleUnSuccessfulPost(message) {
        setErrors({ message: message })
        clearData()
    }

    function handleSubmit(event) {
        event.preventDefault()
        postApiQuestion(newQuestion)
            .then(() => handleSuccessfulPost())
            .catch(error => handleUnSuccessfulPost(error.message))
    }

    return (
        <>
            <AddQuestionForm
                questionData={newQuestion}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {errors && (
                <div>
                    {errors.message}
                </div>
            )}

        </>

    )
}

export default AddQuestion;