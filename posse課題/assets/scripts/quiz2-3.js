'use strict';

{
const Question = [
{
    question: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
    answers: ['約28万人', '約79万人', '約183万人'],
    correct: 1,
    reference: '経済産業省 2019年3月 － IT 人材需給に関する調査'
},
{
    question: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
    answers: ['INTECH', 'BIZZTECH', 'X-TECH'],
    correct: 2,
},
{
    question: 'IoTとは何の略でしょう？',
    answers: ['Internet of Things', 'Integrate into Technology', 'Information on Tool'],
    correct: 0,
    reference: 'Society5.0 - 科学技術政策 - 内閣府'
},
{
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Society 5.0', 'CyPhy', 'SDGs'],
    correct: 0,
},
{
    question: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
    answers: ['Web3.0', 'NFT', 'メタバース'],
    correct: 0,
},
{
    question: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
    answers: ['約2倍', '約5倍', '約11倍'],
    correct: 1,
    reference: 'Accenture Technology Vision 2021'
}
];

const quiz = document.getElementById('main');

    const createHtml = (questionLater, questionNum) => {
    const answerHtml = questionLater.answers.map((answer, answerIndex) => `<li class="answer-list-item">
    <button class="p-quiz-box__answer__button js-answer" data-answer="${answerIndex}">
        ${answer}<i class="u-icon_arrow"></i>
    </button>
    </li>`
    ).join('');

    const referenceHtml = questionLater.reference ? `<div class="q-box-note">
<img class="details" src="/assets_sample/img/icon/icon-note.svg" alt="">
${questionLater.reference}</div>` : '';

    return `<section class="Q-box js-quiz" data-quiz="${questionNum}">
<div class="container">
  <span class="q-box-title">Q${questionNum + 1}</span>
  <span class="q-box-content">${questionLater.question}</span>
    <img class="hero-picture" src="/assets_sample/img/quiz/img-quiz0${questionNum + 1}.png" alt="">
  <span class="q-box-answer">A</span>
    <ul class="answer-list">
        ${answerHtml}
    </ul>
    <div class="correct-container js-answerBox">
        <p class="p-quiz-box__answer__correct__title js-answerTitle"></p>
        <p class="answer__correct__content">
            <span class="p-quiz-box__answer__correct__content__label">A</span>
            <span class="js-answerText"></span>
        </p>
    </div>
</div>
${referenceHtml}
</section>`
}

const shuffle = arrays => {
    const array = arrays.slice();
for (let i = array.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
}
return array
}

const quizArray = shuffle(Question)

quiz.innerHTML = quizArray.map((questionLater, index) => {
    return createHtml(questionLater, index)
}).join('')

const question = document.querySelectorAll('.js-quiz');

const quizDisabled = answers => {
    answers.forEach(answer => {
        answer.disabled = true;
    })
}
const quizTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
}

const quizClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
}

//各問題の中での処理
question.forEach(quiz => {
    const answers = quiz.querySelectorAll('.js-answer');
    const selectedQuiz = Number(quiz.getAttribute('data-quiz'));
    const answerBox = quiz.querySelector('.js-answerBox');
    const answerTitle = quiz.querySelector('.js-answerTitle');
    const answerText = quiz.querySelector('.js-answerText');

    answers.forEach(answer => {
    answer.addEventListener('click', () => {
    answer.classList.add('is-selected');
    const selectedAnswerNumber = Number(answer.getAttribute('data-answer'));
    
    quizDisabled(answers);

    const correctNum = Question[selectedQuiz].correct
    const isCorrect = correctNum === selectedAnswerNumber;

    answerText.innerText = Question[selectedQuiz].answers[correctNum];
    quizTitle(answerTitle, isCorrect);
    quizClassName(answerBox, isCorrect);
})
})
})
}

//オブジェクトの使い方　配列　引数が重要　

