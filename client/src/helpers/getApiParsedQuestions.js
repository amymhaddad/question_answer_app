import axios from "axios"
import React from 'react';

function getApiParsedQuestions(params) {
    const url = "http://localhost:3000/api/questions"
    return axios({
        method: "get",
        url: url,
        params: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export default getApiParsedQuestions;