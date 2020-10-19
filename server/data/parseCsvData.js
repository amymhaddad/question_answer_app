const csv = require("csv-parser")
const fs = require("fs")
const results = []

fs
  .createReadStream("./data/code_challenge_question_dump.csv")
  .pipe(csv({ separator: "|" }))
  .on("data", (data) => results.push(data))
  .on("end", () => {
    return results
  })

module.exports = results
