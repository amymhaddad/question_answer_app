import React from 'react';
import Header from "../common/Header"

function ModifyQuestionForm(props) {

    const { question, id } = props.data

    return (

        <>
            <Header />
            <form onSubmit={props.onSubmit}>
                <label>Question ID</label>
                <input
                    type="number"
                    name="id"
                    value={id}
                    onChange={props.onChange}
                />

                <label>Modify Question</label>
                <input
                    type="text"
                    name="question"
                    value={question}
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

export default ModifyQuestionForm;