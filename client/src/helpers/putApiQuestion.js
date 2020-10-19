
import axios from "axios"

function putApiQuestion(question) {
    const url = "http://localhost:3000/api/questions"
    return axios({
        method: "put",
        url: url,
        data: question,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export default putApiQuestion;