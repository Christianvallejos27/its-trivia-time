const greeting=document.querySelector(".greeting")
const timeElement=document.querySelector(".time-element")
const scoreElement=document.querySelector(".score-element")
const quizContainer=document.querySelector(".quiz-container")
const quizTitle=document.querySelector(".quiz-title")
const answerContainer=document.querySelector(".answer-container")
const startButton=document.querySelector("#start-button")
const quizQuestion=[
{
    question: "What is the top speed of a Ferrari 488 GTB?",
    possibleAnswers: ["200 mph", "220 mph", "240 mph", "260 mph"],
    answer: "205 mph"
  },
  {
    question: "Which car brand produces the Mustang?",
    possibleAnswers: ["Chevrolet", "Ford", "Dodge", "Toyota"],
    answer: "Ford"
  },
  {
    question: "What year was the first Porsche 911 produced?",
    possibleAnswers: ["1960", "1963", "1970", "1985"],
    answer: "1963"
  },
  {
    question: "What car brand made the civic?",
    possibleAnswers: ["Ford", "Kia", "Toyota", "Honda"],
    answer: "Honda"
  },
  
  
  
  // Add more questions as needed
];
var score = 0 
let time=100
let timesequence;
let currentquestion=0
function startTimer(){
    timesequence=setInterval(function(){
        timeElement.textContent="time: "+time
        time--
        if(time<=0){
        clearInterval(timesequence)
        //endGame()
        }
    },1000)
}
function displayQuiz(){
    greeting.classList.add("hide")
    quizContainer.classList.remove("hide")
   if(currentquestion>2){
        endGame()
    } else {
    quizTitle.textContent=quizQuestion[currentquestion].question
    let options=quizQuestion[currentquestion].possibleAnswers
    let optionslist=""
    for(var i = 0; i < options.length; i ++){
        optionslist += `<button>${options[i]}</button>`
        answerContainer.innerHTML=optionslist
    }
}
}
answerContainer.addEventListener("click", function(event){
    event.preventDefault()
    if (event.target.matches("button")){
        matchanswer(event.target.textContent)
    }
})
function matchanswer(click){
    const rightanswer=quizQuestion[currentquestion].answer
    if (click===rightanswer){
        alert("correct")
        score++
        scoreElement.textContent="score: "+score

    }if (click!==rightanswer){
        alert("incorrect")
        score--
        scoreElement.textContent="score: "+score

    }
    currentquestion++
    displayQuiz()
}

function endGame() {
    clearTimeout(timesequence)
}


startButton.addEventListener("click", function(event){
event.preventDefault()
startTimer()
displayQuiz()
})