
import axios from "axios"
import React, { useState, useEffect } from 'react';
import ShowQuestions from "./ShowQuestions"
import Header from "../common/Header"

function Question(props) {
    const [question, setQuestion] = useState([])

    //I want this function to run each time a single qustion is clicked on. I take the id from teh query params and pass it to the db
    useEffect(() => {

        const id = parseInt(props.match.params.id)
        const url = `http://localhost:3000/api/questions/${id}`
      
        axios({
            method: "get",
            url: url,
            headers: {
               'Content-Type': 'application/json'
            }
           })
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
                    id = {question.id}
                    question ={question.question}
                    answer={question.answer}

                />
            ))}
        </ul>
    
        </>

    )
}

export default Question;