var quizData = [
    {
        question: "1/5 What percent of websites use Javascript",
        a: "0",
        b: "83",
        c: "98",
        d: "97",
        e: "45",
        correct: "c",
    },
    {
        question: "2/5 What does DOM stand for",
        a: "Document Object Model",
        b: "Drive Object Method",
        c: "Document Origin Model",
        d: "Desktop Object ",
        e: "Myspace",
        correct: "a",
    },
    {
        question: "3/5Are Java and Javascript the same",
        a: "No",
        b: "Yes",
       c: "",
       d: "",
       e:"",
        correct: "a",
    },
    {
        question: "4/5 When did  ECMAScript 6 get released",
        a: "1996",
        b: "1987",
        c: "2006",
        d: "2015",
        e: "2023",
        correct: "d",
    },

    {
        question: "5/5 What was Microsoft's version of Javascript called",
        a: "c#",
        b: "Microscript",
        c: "Jascript",
        d: "Jscript",
        e: "j#",
        correct: "d",
    },

    
];
const submitBtn = document.getElementById('submit')

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')
const questionEl = document.getElementById('question')
let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    unclickAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
    
}
function unclickAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getPicked() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getPicked()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
          currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = 

          
          
       
           function drawScore() {
            ctx.font = "16px Arial";
            ctx.fillStyle = "#0095DD";
            ctx.fillText(`Score: ${score}/${quizData.length} `);
          }
          
       
       
        }


    }
})

