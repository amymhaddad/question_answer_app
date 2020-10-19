import axios from "axios"
import React from 'react';

function getApiQuestions() {
    const url = "http://localhost:3000/api/questions"
    return axios({
        method: "get",
        url: url,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default getApiQuestions;