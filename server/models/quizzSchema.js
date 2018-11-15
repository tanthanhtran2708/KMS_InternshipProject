const mongoose=require('mongoose');

const quizzSchema = mongoose.Schema({
    userID: String,
    userAns: String
})

module.exports = mongoose.model("QuizzAnswerModel",quizzSchema);
