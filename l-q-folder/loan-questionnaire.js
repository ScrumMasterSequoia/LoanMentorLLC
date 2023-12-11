const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const prevButton = document.getElementById('prev-btn')
const submitButton = document.getElementById('submit-btn')
const questionContainerElement = document.getElementById('question-container')
const resultsContainerElement = document.getElementById('results-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultsElement = document.getElementById('results')// testing
const matchesElement = document.getElementById('matches')// testing

let currentQuestionIndex;

startButton.addEventListener('click', startQuestionnaire)
submitButton.addEventListener('click', submit)

nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
  prevButton.classList.remove('hide')

    // 2) When the user presses next check if the answer is a match for each company
  //    (Hint: you can use the forEach method to loop through the questions array)

  // may want to use a boolean to check if each answer is a match for each company 
  // by adding a question number boolean for each question to each company object

  // alternatively, I could just see if any given parameter happens to say false each time 
  // I check, (but how to keep track if questions aren't tracked) and if any are false, then
  // the company is not a match

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
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState() // clear the previous question actually will not work for my purposes
  // because I want to keep the state saved in the objects. So maybe it will work but needs to be tested
  showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  
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

// edit below to show the results of the questionnaire
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

// obsolete
function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

// 1) Set up an array of booleans that will hold the results of the questionnaire
let results = [
  {"name" : "CLDMatch", "match" : true},
  {"name" : "OnDeckMatch", "match" : true},
  {"name" : "NationalBusinessCapitalMatch", "match" : true},
  {"name" : "UpStartMatch", "match" : true}
] 
  
function submit() {
  submitButton.classList.add('hide')
  nextButton.classList.add('hide')
  prevButton.classList.add('hide')
  questionContainerElement.classList.add('hide')
  resultsContainerElement.classList.remove('hide')
  


  // 3) If the answer is a match, push true to the array, if not push false



  // 4) When the user presses submit, display the results of the questionnaire based on the answers
  //    (Hint: you can use the forEach method to loop through the results array and display the results)


  // 5) If the user presses restart, reset the questionnaire and the results
  //    (Hint: you can use the resetState function to reset the questionnaire. Make it so)


}

// log the names of each company in the array and whether or not they are a match based on user input
// for(let i = 0; i < results.length; i++) {
//   console.log(results[i].name + ": " + results[i].match);
// }





// replace correct: true/false with the info profiles of each company
// eg. UpStart-match: true, CLD-match: false, etc.

const questions = [
  {
    question: 'What type of loan are you looking for?',
    answers: [
      { text: 'Small Business Loan', correct: true },
      { text: 'Line of Credit', correct: true },
      { text: 'Mortgage Financing', correct: true },
      { text: 'Personal Loan', correct: true },
      { text: 'Student Loan', correct: true },
      { text: 'Auto Loan', correct: true },
      { text: 'Other', correct: true}
    ]
  },
  {
    question: 'What is the estimated amount of funding you are looking for?',
    answers: [
      { text: 'Less than $10,000', correct: true },
      { text: 'Between $10,000 and $50,000', correct: true },
      { text: 'Between $50,000 and $100,000', correct: true },
      { text: 'Between $100,000 and $500,000', correct: true },
      { text: 'Between $500,000 and $1,000,000', correct: true },
      { text: 'Between $1,000,000 and $5,000,000', correct: true },
      { text: 'Above $5 million', correct: true },

    ]
  },
  {
    question: 'What is your estimated Business Credit Score (paydex score ranges from 1-100. Dont worry, some options may not require good credit)',
    answers: [
      { text: '80 or higher', correct: true },
      { text: 'Between 50 and 79', correct: true },
      { text: 'Below 50', correct: true }
    ]
  },
  {
    question: 'Are you able to demonstrate adequate cash flow in your business (if applicable)?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: true },
      { text: 'Not Applicable', correct: true }
    ]
  },
  {
    question: 'Do you have access to financial documents such as: bank statements, tax returns, and/or financial statements?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: true },
      { text: 'Not Applicable', correct: true }
    ]
  },
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