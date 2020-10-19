import React from 'react';
import Header from "../common/Header"

function AddQuestionForm(props) {


    const { question, distractors, answer } = props.questionData
    return (
        <>
            <Header />
            <form onSubmit={props.onSubmit}>
                <label>Question</label>
                <input
                    type="text"
                    name="question"
                    value={question}
                    onChange={props.onChange}
                />

                <label>Answer</label>
                <input
                    type="number"
                    name="answer"
                    value={answer}
                    onChange={props.onChange}
                />

                <label>Distractors</label>
                <input
                    type="text"
                    name="distractors"
                    value={distractors}
                    onChange={props.onChange}
                />

                <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary"
                />
            </form>
        </>

    )
}

export default AddQuestionForm