import axios from "axios"

function postApiQuestion(newQuestion) {

    const url = "http://localhost:3000/api/questions"
    return axios({
        method: "post",
        url: url,
        data: newQuestion,
        headers: {
            'Content-Type': 'application/json'
        }
    })

}

export default postApiQuestion;
