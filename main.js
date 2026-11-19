let flashCards = [
    {
        question: "How many continents are there?",
        answer: "7"
    },
    {
        question: "What is the closest planet to the Sun?",
        answer: "Mercury"
    },
    {
        question: "What is 12 x 12?",
        answer: "144"
    },
    {
        question: "Who was the first President of the United States?",
        answer: "George Washington"
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: "Pacific Ocean"
    },
    {
        question: "How many sides does a hexagon have?",
        answer: "6"
    },
    {
        question: "What gas do plants absorb from the atmosphere?",
        answer: "Carbon dioxide"
    },
    {
        question: "What is the capital of Japan?",
        answer: "Tokyo"
    },
    {
        question: "How many bones are in the average adult human body?",
        answer: "206"
    },
    {
        question: "What is the smallest prime number?",
        answer: "2"
    },
    {
        question: "Who wrote Romeo and Juliet?",
        answer: "William Shakespeare"
    },
    {
        question: "What is the largest mammal in the world?",
        answer: "Blue whale"
    },
    {
        question: "What is the freezing point of water in Celsius?",
        answer: "0 degrees"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },
    {
        question: "How many degrees are in a right angle?",
        answer: "90 degrees"
    },
    {
        question: "What is the largest country in the world by land area?",
        answer: "Russia"
    },
    {
        question: "What is the process by which plants make their own food?",
        answer: "Photosynthesis"
    },
    {
        question: "In what year did the United States declare independence?",
        answer: "1776"
    },
    {
        question: "What is the main language spoken in Brazil?",
        answer: "Portuguese"
    },
    {
        question: "How many players are on the court for one basketball team?",
        answer: "5"
    }
];

let answerElement = document.getElementById("answer");
let answerGuessElement = document.getElementById("answer-guess");
let revealButton = document.getElementById("reveal");
let nextButton = document.getElementById("next");
let checkAnswerButton = document.getElementById("check-answer");
let currentCardIndex = 0;

function showFlashCard() {
    let card = flashCards[currentCardIndex];

    document.getElementById("question").textContent = card.question;
    answerElement.textContent = "";
    answerElement.classList.remove("answer-correct", "answer-incorrect");
    answerGuessElement.value = "";
}

showFlashCard();

revealButton.addEventListener("click", function() {
    answerElement.textContent = flashCards[currentCardIndex].answer;
    answerElement.classList.remove("answer-incorrect");
    answerElement.classList.add("answer-correct");
});

checkAnswerButton.addEventListener("click", function() {
    let guess = answerGuessElement.value.trim();
    let correctAnswer = flashCards[currentCardIndex].answer;
    let isCorrect = guess.toLowerCase() === correctAnswer.toLowerCase();

    answerElement.textContent = guess || "Enter an answer first.";
    answerElement.classList.toggle("answer-correct", isCorrect);
    answerElement.classList.toggle("answer-incorrect", !isCorrect);

    if (isCorrect){
        const correct = new Audio('applepay.mp3')

        correct.play()
    } else {
        const incorrect = new Audio('wrong-answer-buzzer.mp3')

        incorrect.play()
    }
});

nextButton.addEventListener("click", function() {
    currentCardIndex = (currentCardIndex + 1) % flashCards.length;
    showFlashCard();
});
