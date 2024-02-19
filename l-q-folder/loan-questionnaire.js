const submitButton = document.getElementById('submit-btn')
const restartButton = document.getElementById('restart-btn')
const questionContainerElement = document.getElementById('question-container')
const resultsContainerElement = document.getElementById('result-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultsElement = document.getElementById('results')
const matchesElement = document.getElementById('matches')
const q1a1btn = document.getElementById('q1a1')
const q1a2btn = document.getElementById('q1a2')

submitButton.addEventListener('click', submit)
restartButton.addEventListener('click', restart)

q1a1btn.addEventListener('click', handleq1a1)
q1a2btn.addEventListener('click', handleq1a2)

// Dropdown Menu

 document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle("active")
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if (dropdown === currentDropdown ) return
      dropdown.classList.remove("active")
    })
  })

// Dark Mode

let themeDots = document.getElementsByClassName("theme-dot")
let theme = localStorage.getItem('theme')

if(theme == null) {
  setTheme('light')
}else{
  setTheme(theme)
}

for(var i=0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function(){
    let mode = this.dataset.mode
    console.log('Option Clicked: ', mode)
    setTheme(mode)
  })
}

function setTheme(mode){
  if(mode == 'light'){
    document.getElementById('theme-style').href = 'loan-questionnaire.css'
  }
  if(mode == 'dark'){
    document.getElementById('theme-style').href = '../darkmode.css'
  }
  localStorage.setItem('theme', mode)
}

let results = [
  {"name" : "CommercialLoanDirect", "match" : true},
  {"name" : "OnDeck", "match" : true},
  {"name" : "NationalBusinessCapital", "match" : true},
  {"name" : "UpStart", "match" : true}
] 

// Might want a switch statement for the different buttons to handle the qualify/disqualify

// Might want to use select fields for mutual exclusivity of the buttons, and then submit the qualify/disqualify to the results array. That way I don't have to requalify all the time, breaking the logic of the buttons.

// Question 1
function handleq1a1() { // handles the first button of first question
  qualifyNBC();
  qualifyCLD();
  qualifyOnDeck();
  qualifyUpStart();
  setBtnColor(q1a1btn);
  clearBtnColor(q1a2btn);
}
function handleq1a2() { // handles the second button of first question
  disqualifyNBC();
  disqualifyCLD();
  disqualifyOnDeck();
  disqualifyUpStart();
  setBtnColor(q1a2btn);
  clearBtnColor(q1a1btn);
}

function setBtnColor(btn) {
  btn.style.backgroundColor = "rgb(1, 92, 111)";
}
function clearBtnColor(btn) {
  btn.style.backgroundColor = "rgb(0, 152, 183)";
}

// change links herein for the affiliate links

function createAnchor(name) {
  if (name === "CommercialLoanDirect") {
    return `<a href="https://www.commercialloandirect.com/">Commercial Loan Direct</a><br>`}
  else if (name === "OnDeck") {
    return `<a href="https://www.ondeck.com/">OnDeck</a><br>`}
  else if (name === "NationalBusinessCapital") {
    return `<a href="https://www.nationalbusinesscapital.com/">National Business Capital</a><br>`}
  else if (name === "UpStart") {
    return `<a href="https://www.upstart.com/">UpStart</a><br>`}
}

function disqualifyCLD() { results[0].match = false; }
function qualifyCLD() { results[0].match = true; }

function disqualifyOnDeck() { results[1].match = false; }
function qualifyOnDeck() { results[1].match = true; }

function disqualifyNBC() { results[2].match = false;}
function qualifyNBC() { results[2].match = true;}

function disqualifyUpStart() { results[3].match = false;}
function qualifyUpStart() { results[3].match = true; }

function restart() {
  matchesElement.innerHTML = ""
  restartButton.classList.add('hide')
  submitButton.classList.remove('hide')
  questionContainerElement.classList.remove('hide')
  resultsContainerElement.classList.add('hide')
  clearBtnColor(q1a1btn);
  clearBtnColor(q1a2btn);
  qualifyCLD();
  qualifyOnDeck();
  qualifyNBC();
  qualifyUpStart();
}

// add a loading animation with a spinning logo on submit

function submit() {
function tellSamHowCoolHeIs() {
  console.log("Sam, you are so cool!");
}
  matchesElement.innerHTML = ""
  restartButton.classList.remove('hide')
  submitButton.classList.add('hide')
  questionContainerElement.classList.add('hide')
  resultsContainerElement.classList.remove('hide')
  let numberOfMatches = 0;
  for(let i = 0; i < results.length; i++) {
    if(results[i].match) {
      matchesElement.innerHTML += createAnchor(results[i].name)
      numberOfMatches++;
    }
  }
  if(numberOfMatches === 0) { 
    matchesElement.innerHTML += "No matches found";
  }
  matchesElement.innerHTML += "<br><br>";
}