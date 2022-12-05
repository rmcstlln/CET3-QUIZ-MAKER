var questions = [{
    "question": "The darkest part of the shadow is",
    "option1": "Umbra",
    "option2": "Penumbra",
    "option3": "Antumbra",
    "option4": "None of these",
    "answer": "1"
},  {
    "question": "What does DNA stands for?",
    "option1": "Ribonucleic acid",
    "option2": "Deoxyribonucleic acid",
    "option3": "Folic acid",
    "option4": "None of these",
    "answer": "2"
},  {
    "question": "Who discovered the concept of gravity?",
    "option1": "Galileo Galilei",
    "option2": "Robert Boyle",
    "option3": "Isaac Newton",
    "option4": "Leonardo da Vinci",
    "answer": "3"
},  {
    "question": "Which of the following is used in pencils?",
    "option1": "Charcoal",
    "option2": "Silicon",
    "option3": "Graphite",
    "option4": "Phosphorous",
    "answer": "3"
},  {
    "question": "You see your reflection in a mirror because:",
    "option1": "light is absorbed",
    "option2": "light is diffracted",
    "option3": "light is reflected",
    "option4": "light is refracted",
    "answer": "3"
},  {
    "question": "The gas usually filled in the electric bulb is",
    "option1": "Hydrogen",
    "option2": "Nitrogen",
    "option3": "Carbon Dioxide",
    "option4": "Oxygen",
    "answer": "2"
}, {
    "question": "The hardest substance available on earth is",
    "option1": "Diamond",
    "option2": "Iron",
    "option3": "Gold",
    "option4": "Platinum",
    "answer": "1"
}, {
    "question": "How many bones are there in an adult human body?",
    "option1": "36",
    "option2": "98",
    "option3": "206",
    "option4": "872",
    "answer": "3"
},  {
    "question": "Which of the following is an element?",
    "option1": "Ruby",
    "option2": "Diamond",
    "option3": "Sapphire",
    "option4": "Emerald",
    "answer": "2"
},  {
    "question": "Which of following is called universal solvent?",
    "option1": "Alcohol",
    "option2": "Sulfuric acid",
    "option3": "Benzene",
    "option4": "Water",
    "answer": "4"
}]

var currentQuestion = 0;
var score = 0
var totQuestions = questions.length;

var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + ". " + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if(!selectedOption){
        alert("Please select your answer!");
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score += 1;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = "Submit"
    }
    if(currentQuestion == totQuestions){
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.textContent = "Your Score: " + score + "/10";
        return;
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);