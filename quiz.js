const quizForm =document.querySelector(".quiz-form")
const submitAnswerBtn =document.querySelector("#submit-answer-btn")
const outputText =document.querySelector("#output")


//its the correct answer of both the questions
const correctAnswers = ['90°', 'right angled'];


function calculateScore(){
    let score=0
    let index =0

    const formResults=new FormData(quizForm)
    for(let value of formResults.values()){
        if(value===correctAnswers[index]){
            score++
        }
        index++;
    }
    console.log(score)
    outputText.innerText="Your Score is "+ score
}


submitAnswerBtn.addEventListener("click",calculateScore)
