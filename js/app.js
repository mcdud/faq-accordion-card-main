const questions = document.querySelectorAll(".card__faq-question");
const answers = document.querySelectorAll(".card__faq-answer");

let activeQuestion = questions[1];
let activeAnswer = answers[1];

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {

        // toggle clicked question
        questions[i].classList.toggle('faq-question--active');
        answers[i].classList.toggle('faq-answer--visible');

        // if another question was active, hide it
        if(activeQuestion != null) {
            activeQuestion.classList.remove('faq-question--active');
            activeAnswer.classList.remove('faq-answer--visible');
        }

        // check if clicked question was active, if true set active question to none else clicked question
        if (questions[i] === activeQuestion) {
            activeQuestion = null;
            activeAnswer = null;
        } else {
            activeQuestion = questions[i];
            activeAnswer = answers[i];
        }

    })
}
