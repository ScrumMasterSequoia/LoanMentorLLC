const submitButton = document.getElementById('submit-btn')
const restartButton = document.getElementById('restart-btn')
const questionContainerElement = document.getElementById('question-container')
const resultsContainerElement = document.getElementById('result-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const resultsElement = document.getElementById('results')// testing
const matchesElement = document.getElementById('matches')// testing

const q1a1btn = document.getElementById('q1a1')
const q1a2btn = document.getElementById('q1a2')

submitButton.addEventListener('click', submit)
restartButton.addEventListener('click', restart)

let results = [
  {"name" : "CommercialLoanDirect", "match" : true},
  {"name" : "OnDeck", "match" : true},
  {"name" : "NationalBusinessCapital", "match" : true},
  {"name" : "UpStart", "match" : true}
] 

// for some reason the event listeners are not working. They are getting called on page load only
q1a1btn.addEventListener('click', handleq1a1)
q1a2btn.addEventListener('click', handleq1a2)

// Question 1
function handleq1a1() {
  disqualifyCLD();
  qualifyNBC();
  setBtnColor(q1a1btn);
  clearBtnColor(q1a2btn);
}
function handleq1a2() {
  disqualifyNBC();
  qualifyCLD();
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
function qualifyCLD() {
  results[0].match = true;
}

function disqualifyOnDeck() {
  results[1].match = false;
}
function qualifyOnDeck() {
  results[1].match = true;
}

function disqualifyNBC() {
  results[2].match = false;
}
function qualifyNBC() {
  results[2].match = true;
}

function disqualifyUpStart() {
  results[3].match = false;
}
function qualifyUpStart() {
  results[0].match = true;
}

function restart() {
  matchesElement.innerHTML = ""
  restartButton.classList.add('hide')
  questionContainerElement.classList.remove('hide')
  resultsContainerElement.classList.add('hide')
  clearBtnColor(q1a1btn);
  clearBtnColor(q1a2btn);
  qualifyCLD();
  qualifyOnDeck();
  qualifyNBC();
  qualifyUpStart();
}

function submit() {
  matchesElement.innerHTML = ""
  restartButton.classList.remove('hide')
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

// clearBtnColor(q1a1btn);
// clearBtnColor(q1a2btn);

// qualifyCLD();
// qualifyOnDeck();
// qualifyNBC();
// qualifyUpStart();



// const questions = [
  // {
  //   question: 'What type of loan are you looking for?',
  //   answers: [
  //     { text: 'Small Business Loan', , disqualifyCLD },
  //     { text: 'Line of Credit',  },
  //     { text: 'Mortgage Financing',  },
  //     { text: 'Personal Loan',  },
  //     { text: 'Student Loan',  },
  //     { text: 'Auto Loan',  },
  //     { text: 'Other', }
  //   ]
  // },
  // {
  //   question: 'What is the estimated amount of funding you are looking for?',
  //   answers: [
  //     { text: 'Less than $10,000',  },
  //     { text: 'Between $10,000 and $50,000',  },
  //     { text: 'Between $50,000 and $100,000',  },
  //     { text: 'Between $100,000 and $500,000',  },
  //     { text: 'Between $500,000 and $1,000,000',  },
  //     { text: 'Between $1,000,000 and $5,000,000',  },
  //     { text: 'Above $5 million',  },

  //   ]
  // },
  // {
  //   question: 'What is your estimated Business Credit Score (paydex score ranges from 1-100. Dont worry, some options may not require good credit)',
  //   answers: [
  //     { text: '80 or higher',  },
  //     { text: 'Between 50 and 79',  },
  //     { text: 'Below 50',  }
  //   ]
  // },
  // {
  //   question: 'Are you able to demonstrate adequate cash flow in your business (if applicable)?',
  //   answers: [
  //     { text: 'Yes',  },
  //     { text: 'No',  },
  //     { text: 'Not Applicable',  }
  //   ]
  // },
  // {
  //   question: 'Do you have access to financial documents such as: bank statements, tax returns, and/or financial statements?',
  //   answers: [
  //     { text: 'Yes',  },
  //     { text: 'No',  },
  //     { text: 'Not Applicable',  }
  //   ]
  // },
  // {
  //   question: 'Is your business insured?',
  //   answers: [
  //     { text: 'Yes', cldMatch: true, onDeckMatch: false, nbcMatch: false, upStartMatch: false },
  //     { text: 'No',  cldMatch: true, onDeckMatch: false, nbcMatch: false, upStartMatch: false }
  //   ]
  // },
  // {
  //   question: 'Have you been pre-approved for a loan?',
  //   answers: [
  //     { text: 'Yes', cldMatch: true, onDeckMatch: false, nbcMatch: false, upStartMatch: false  },
  //     { text: 'No', cldMatch: true, onDeckMatch: false, nbcMatch: false, upStartMatch: false  },
  //     { text: 'Not Applicable', cldMatch: true, onDeckMatch: false, nbcMatch: false, upStartMatch: false  }
  //   ]
  // }
// ]

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

  topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }