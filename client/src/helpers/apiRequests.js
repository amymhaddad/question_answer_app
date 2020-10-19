import axios from "axios"
import { questionsURL } from "./constants"

export {
    getApiQuestions,
    getApiQuestion,
    getApiParsedQuestions,
    postApiQuestion,
    putApiQuestion
}

function getApiQuestions() {
    return axios({
        method: "get",
        url: questionsURL,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function getApiQuestion(id) {
    return axios({
        method: "get",
        url: `${questionsURL}/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}


function getApiParsedQuestions(params) {
    return axios({
        method: "get",
        url: questionsURL,
        params: params,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function postApiQuestion(newQuestion) {
    return axios({
        method: "post",
        url: questionsURL,
        data: newQuestion,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

function putApiQuestion(question) {
    return axios({
        method: "put",
        url: questionsURL,
        data: question,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}