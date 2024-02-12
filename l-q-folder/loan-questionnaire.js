const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const prevButton = document.getElementById('prev-btn')
const submitButton = document.getElementById('submit-btn')
const questionContainerElement = document.getElementById('question-container')
const resultsContainerElement = document.getElementById('result-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultsElement = document.getElementById('results')// testing
const matchesElement = document.getElementById('matches')// testing
//resultsContainerElement.classList.add('hide')

let currentQuestionIndex;

startButton.addEventListener('click', startQuestionnaire)
submitButton.addEventListener('click', submit)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  prevButton.classList.remove('hide')
  // when NEXT or SUBMIT button pressed, submit the info to change the status of the results array

})

prevButton.addEventListener('click', () => {
    currentQuestionIndex--
    setNextQuestion()
  })

function startQuestionnaire() {
  startButton.classList.add('hide')
  submitButton.classList.add('hide')
  prevButton.classList.add('hide')
  nextButton.classList.remove('hide')
  resetQuestionnaire()
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState() // clear the previous question actually will not work for my purposes
  showQuestion(questions[currentQuestionIndex])
}

// Function to display a question and its corresponding answer buttons
function showQuestion(question) {
  questionElement.innerText = question.question // Set the question text
  question.answers.forEach(answer => { // Loop through each answer
    const button = document.createElement('button') // Create a button element
    button.innerText = answer.text // Set the button text to the answer text
    button.classList.add('btn') // Add the 'btn' class to the button
    if (answer.correct) { // If the answer is correct
      button.dataset.correct = answer.correct // Set the 'correct' attribute of the button
    }
    button.addEventListener('click', selectAnswer) // Add a click event listener to the button
    answerButtonsElement.appendChild(button) // Append the button to the answer buttons container
  })
}

function resetQuestionnaire() {
  resetState()
  startButton.innerText = 'Start'
  startButton.classList.remove('hide')
  resultsContainerElement.classList.add('hide')
  questionContainerElement.classList.add('hide')
  matchesElement.innerHTML = "";
}

function resetState() { // clear the previous question
  // clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
  

}

function selectAnswer(e) {
  const selectedButton = e.target
  // const correct = selectedButton.dataset.correct
  // setStatusClass(document.body, correct)
  // Array.from(answerButtonsElement.children).forEach(button => {
  //   setStatusClass(button, button.dataset.correct)
  // })
  console.log(selectedButton)
  if (currentQuestionIndex + 1 < questions.length) { // if you are not at the last index
    nextButton.classList.remove('hide') // show the next button
    submitButton.classList.add('hide')  // hide the submit button
  } 
  else { // if you are at the last index
    startButton.innerText = 'Restart' // change the start button to say restart
    startButton.classList.remove('hide') // show start
    nextButton.classList.add('hide') // hide next button
    submitButton.classList.remove('hide') // show submit
  }
  
  if(currentQuestionIndex > 0) { // if you are not at the first index
    prevButton.classList.remove('hide') // show the previous button
  } 
  
}

// // edit below to show the results of the questionnaire
// function setStatusClass(element, correct) {
//   clearStatusClass(element)
//   if (correct) {
//     element.classList.add('correct')
//   } else {
//     element.classList.add('wrong')
//   }
// }

// // obsolete
// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }

// 1) Set up an array of booleans that will hold the results of the questionnaire
let results = [
  {"name" : "CommercialLoanDirect", "match" : true},
  {"name" : "OnDeck", "match" : true},
  {"name" : "NationalBusinessCapital", "match" : true},
  {"name" : "UpStart", "match" : true}
] 
  
// change links herein for the affiliate links
// 3) Create a function that will create an anchor tag for each company that is a match

function createAnchor(name) {
  if (name === "CommercialLoanDirect") {
  return `<a href="https://www.commercialloandirect.com/">Commercial Loan Direct</a><br>`
  }
  else if (name === "OnDeck") {
  return `<a href="https://www.ondeck.com/">OnDeck</a><br>`
  }
  else if (name === "NationalBusinessCapital") {
  return `<a href="https://www.nationalbusinesscapital.com/">National Business Capital</a><br>`
  }
  else if (name === "UpStart") {
  return `<a href="https://www.upstart.com/">UpStart</a><br>`
  }
}

function disqualifyCLD() {
  results[0].match = false;
}
function disqualifyOnDeck() {
  results[1].match = false;
}
function disqualifyNBC() {
  results[2].match = false;
}
function disqualifyUpStart() {
  results[3].match = false;
}

function submit() {
  submitButton.classList.add('hide')
  nextButton.classList.add('hide')
  prevButton.classList.add('hide')
  questionContainerElement.classList.add('hide')
  resultsContainerElement.classList.remove('hide')

  let numberOfMatches = 0;
  for(let i = 0; i < results.length; i++) {
    if(results[i].match) {
      matchesElement.innerHTML += createAnchor(results[i].name)
      numberOfMatches++;
    }
    //console.log(results[i].name + ": " + results[i].match);
  }
  if(numberOfMatches === 0) { 
    matchesElement.innerHTML += "No matches found";
  }
  matchesElement.innerHTML += "<br><br>";
}

const questions = [
  // {
  //   question: 'What type of loan are you looking for?',
  //   answers: [
  //     { text: 'Small Business Loan', correct: true, disqualifyCLD },
  //     { text: 'Line of Credit', correct: true },
  //     { text: 'Mortgage Financing', correct: true },
  //     { text: 'Personal Loan', correct: true },
  //     { text: 'Student Loan', correct: true },
  //     { text: 'Auto Loan', correct: true },
  //     { text: 'Other', correct: true}
  //   ]
  // },
  // {
  //   question: 'What is the estimated amount of funding you are looking for?',
  //   answers: [
  //     { text: 'Less than $10,000', correct: true },
  //     { text: 'Between $10,000 and $50,000', correct: true },
  //     { text: 'Between $50,000 and $100,000', correct: true },
  //     { text: 'Between $100,000 and $500,000', correct: true },
  //     { text: 'Between $500,000 and $1,000,000', correct: true },
  //     { text: 'Between $1,000,000 and $5,000,000', correct: true },
  //     { text: 'Above $5 million', correct: true },

  //   ]
  // },
  // {
  //   question: 'What is your estimated Business Credit Score (paydex score ranges from 1-100. Dont worry, some options may not require good credit)',
  //   answers: [
  //     { text: '80 or higher', correct: true },
  //     { text: 'Between 50 and 79', correct: true },
  //     { text: 'Below 50', correct: true }
  //   ]
  // },
  // {
  //   question: 'Are you able to demonstrate adequate cash flow in your business (if applicable)?',
  //   answers: [
  //     { text: 'Yes', correct: true },
  //     { text: 'No', correct: true },
  //     { text: 'Not Applicable', correct: true }
  //   ]
  // },
  // {
  //   question: 'Do you have access to financial documents such as: bank statements, tax returns, and/or financial statements?',
  //   answers: [
  //     { text: 'Yes', correct: true },
  //     { text: 'No', correct: true },
  //     { text: 'Not Applicable', correct: true }
  //   ]
  // },
  {
    question: 'Is your business insured?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: true },
      { text: 'Not Applicable (I am seeking a non-business loan)', correct: true }
    ]
  },
  {
    question: 'Have you been pre-approved for a loan?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: true },
      { text: 'Not Applicable', correct: true }
    ]
  }
]

