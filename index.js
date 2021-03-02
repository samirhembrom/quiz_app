const quizData = [{
  question: "What is the national animal of India?",
  a: "Tiger",
  b: "Lion",
  c: "Deer",
  d: "Elephant",
  correct: "a"
},{
  question: "Inside which HTML element do we put the JavaScript?",
  a: "<javascript>",
  b: "<scripted>",
  c: "<script>",
  d: "<js>",
  correct: "c"
},{
  question: "Who is the prime minister of India?",
  a: "Nirav Modi",
  b: "Narendra Modi",
  c: "Mamata Banerjee",
  d: "Manmohan Singh",
  correct: "b"
},{
  question: "What does CSS stand for?",
  a: "Computer Style Sheets",
  b: "Colorful Style Sheets",
  c: "Cascading Style Sheets",
  d: "Creative Style Sheets",
  correct: "c"
},{
  question: "HTML is what type of language?",
  a: "Scripting Language",
  b: "Markup Language",
  c: "Programming Language",
  d: "Network Protocol",
  correct: "b"
}
]

const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
  deselectAnswer();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

}

function getSeleted(){
  let answer = undefined;
  answerEls.forEach((answerEl) =>{
    if(answerEl.checked){
      answer = answerEl.id;
  }
});
return answer;
}

function deselectAnswer(){
  answerEls.forEach((answerEl) =>{
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSeleted();

  if(answer){
      console.log(quizData[currentQuiz].correct);
      if(quizData[currentQuiz].correct === answer){
        score++;
      }
      currentQuiz++;

      if(currentQuiz < quizData.length){
          loadQuiz();
      }else{
        
        quiz.innerHTML = `<h2>You have scored ${score}/${quizData.length}</h2>
        <button onClick="location.reload()">Reload</button>`;
      }
  }
})
