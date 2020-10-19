import React, { useState } from 'react';
import ModifyQuestionForm from "./ModifyQuestionForm"
import { toast } from "react-toastify"
import putApiQuestion from "../helpers/putApiQuestion"

function Modify(props) {

    const [question, setQuestion] = useState({ question: "", id: "" })
    const [errors, setErrors] = useState({})

    function handleChange(event) {
        if (event.target.name === "id") {
            setQuestion({ ...question, [event.target.name]: parseInt(event.target.value) })
        }
        else {
            setQuestion({ ...question, [event.target.name]: event.target.value })
        }
    }

    function clearData() {
        setQuestion({ question: "", id: "" })
    }

    function handleSuccessfulChange() {
        clearData()
        props.history.push("/")
        toast.success("Successfully modified the question")
    }

    function handleUnSuccessfulChange(message) {
        setErrors({ message: message })
        clearData()
    }

    function handleSubmit(event) {
        event.preventDefault()
        putApiQuestion(question)
            .then(() => handleSuccessfulChange())
            .catch((error) => handleUnSuccessfulChange(error.message))
    }

    return (
        <>
            <ModifyQuestionForm
                data={question}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            {errors && (
                <div>
                    {errors.message}
                    {errors.status}
                </div>

            )}
        </>
    )
}
export default Modify;