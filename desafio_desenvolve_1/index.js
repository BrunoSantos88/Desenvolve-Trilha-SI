const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")
const $questionTimeLimit = 120; 

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)


//Fuction
function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}
function displayNextQuestion() {
  resetState()
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }
  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)
    newAsnwer.addEventListener("click", selectAnswer)
  })
}
function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target;
  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true;
  });
  if (answerClicked.dataset.correct) {
    answerClicked.classList.add("correct");
  } else {
    answerClicked.classList.add("incorrect");
  }
  document.querySelectorAll(".answer").forEach(button => {
    if (button.dataset.correct) {
      button.classList.add("correct");
    }
  });
  $nextQuestionButton.classList.remove("hide");
  currentQuestionIndex++;
}

function finishGame() {
  const totalQuestions = questions.length;
  const performance = Math.floor((totalCorrect / totalQuestions) * 100);

  let message = "";

  switch (true) {
    case performance >= 90:
      message = "Excelente :)";
      break;
    case performance >= 70:
      message = "Muito bom :)";
      break;
    case performance >= 50:
      message = "Bom";
      break;
    default:
      message = "Pode melhorar :(";
  }

  $questionsContainer.innerHTML = `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button onclick=window.location.reload() class="button">
      Refazer teste
    </button>
  `;
}

function startTimer() {
  let timeLeft = $questionTimeLimit; 

  timerInterval = setInterval(() => {
    timeLeft--; 
    document.getElementById('time-left').textContent = timeLeft; 

    if (timeLeft === 0) {
      clearInterval(timerInterval); 
      endGame();
    }
  }, 1000);
}


function displayNextQuestion() {
  resetState();
  
  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }

  const currentQuestion = questions[currentQuestionIndex];
  $questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });

  startTimer(); // Inicia o temporizador para a nova pergunta
}
function displayNextQuestion() {
  resetState();
  
  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }

  const currentQuestion = questions[currentQuestionIndex];
  $questionText.textContent = currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });

  startTimer(); // Inicia o temporizador para a nova pergunta
}
function endGame() {
  document.querySelector('.final-message').classList.remove('hide'); // Exibe a mensagem final
  document.querySelector('.controls-container').classList.add('hide'); // Oculta o contêiner de controles
}
document.querySelector('.start-quiz').addEventListener('click', function() {
  startTimer(); // Inicia o temporizador quando o botão "Iniciar!" é clicado
});
function displayNextQuestion() {
  resetState();
  
  if (questions.length === currentQuestionIndex) {
    return finishGame();
  }

  const currentQuestion = questions[currentQuestionIndex];
  $questionText.textContent = currentQuestion.question;
  currentQuestion.answers.forEach(answer => {
    const newAnswer = document.createElement("button");
    newAnswer.classList.add("button", "answer");
    newAnswer.textContent = answer.text;
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct;
    }
    $answersContainer.appendChild(newAnswer);

    newAnswer.addEventListener("click", selectAnswer);
  });

function endGame() {
  // Altera o texto do temporizador para "Fim de jogo"
  document.querySelector('.timer').textContent = "Fim de jogo";
  // Exibe a mensagem final
  document.querySelector('.final-message').classList.remove('hide');
  // Oculta o contêiner de controles
  document.querySelector('.controls-container').classList.add('hide');

  // Fala a mensagem de que o jogador perdeu
  speakMessage("Tempo esgotado! Você perdeu o jogo.");
}

// Função para falar uma mensagem
function speakMessage(message) {
  const speech = new SpeechSynthesisUtterance(message);
  speechSynthesis.speak(speech);
}
}

//banco das questoes
const questions = [
  {
    question: "Qual data que começou Desenvolve?",
    answers: [
      { text: "Dia 29 janeiro", correct: false },
      { text: "Dia 02 Fevereiro", correct: true },
      { text: "12 Dezembro", correct: false},
      { text: "29 Fevereiro", correct: false }
    ]
  },
  {
    question: "Onde é o lugar correto para inserir JavaScript?",
    answers: [
      { text: "Tanto no <head> quanto no <body> está correto", correct: true },
      { text: "No <body>", correct: false },
      { text: "No <head>", correct: false },
      { text: "Em outro lugar", correct: false }
    ]
  },
  {
    question: 'Qual é a sintaxe correta para se referir a um script externo chamado "xxx.js"',
    answers: [
      { text: '<script src="xxx.js">', correct: true },
      { text: '<script href="xxx.js">', correct: false },
      { text: '<script name="xxx.js">', correct: false },
      { text: "Nenhuma das alternativas", correct: false }
    ]
  },
  {
    question: 'O arquivo JavaScript externo deve conter a tag <script>',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
  {
    question: 'Como escrever "Hello World" numa caixa de alerta?',
    answers: [
      { text: 'msg("Hello World");', correct: false },
      { text: 'alert("Hello World");', correct: true },
      { text: 'msgBox("Hello World");', correct: false },
      { text: 'alertBox("Hello World");', correct: false }
    ]
  },
  {
    question: 'Como podemos criar uma função no JavaScript?',
    answers: [
      { text: 'function:myFunction()', correct: false },
      { text: 'function myFunction()', correct: true },
      { text: 'function = myFunction()', correct: false },
      { text: 'Nenhum desses códigos criaria uma função', correct: false }
    ]
  },
  {
    question: 'Como podemos chamar uma função chamada "minhaFuncao"?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
]
