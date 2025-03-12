const url = `https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple`;
const startBtn = document.querySelector('#start-btn')
const nextBtn = document.querySelector('#next-btn')
const timer = document.querySelector('.timer')
const scoreArea = document.querySelector('.score')
let score = 0;
let correctAnswer ="";
let questionsLeft = 10;
let time = 10;
let timerInterval;
const questionContainer = document.querySelector('#question-container');


//format the question to display
async function formatQuestion(questionData) {
    const question = questionData.results[0]; 


    // startBtn.setAttribute('hidden', '');
    startBtn.style.display = 'none';
    nextBtn.style.display = 'block';
    timer.style.display = 'block';
    scoreArea.style.display='block';

    document.querySelector('.quiz-container h1').style.marginLeft = "0px";

    let allAnswers = [...question.incorrect_answers, question.correct_answer];
    
    // Shuffle the answers
    allAnswers = allAnswers.sort(() => Math.random() - 0.5);

    correctAnswer = question.correct_answer;
    console.log(correctAnswer)
    questionContainer.innerHTML = `
        <p class="question-text">${question.question}</p>
        <div class="options">
            ${allAnswers.map(answer => `
                <label>
                    <input type="radio" name="answer" value="${answer}"> ${answer}
                </label>
            `).join('')}
        </div>
    `;    
    clearInterval(timerInterval);
    time = 10;
    timer.innerHTML =  `⏳ <span id="timer">${time}s</span>`;

    timerInterval = setInterval(()=>{
        if (time <= 0){
            clearInterval(timerInterval);
            checkAnswer();
            getQuestion();
  
        }
        else{
            time --;
            timer.innerHTML = `⏳ <span id="timer">${time}s</span>`
        }
    },1000);



    
}

// retrive the question
const getQuestion = async () => {
    if (questionsLeft <= 0) {  // Fix the game over condition
        const gameOverText = document.querySelector('.gameOver');
        if (gameOverText) {
            gameOverText.removeAttribute('hidden');
        }
        startBtn.style.display = 'block';
        nextBtn.style.display = 'none';
        questionContainer.innerHTML =``;
        clearInterval(timerInterval);
        timer.style.display = 'none';
        return;
    }

    try {
       
        const questionData = await fetch(url);
        const questionDataJson = await questionData.json();
        console.log(questionDataJson)
        formatQuestion(questionDataJson); 
        questionsLeft--;
    } catch (e) {
        console.log("Error fetching the question:", e);
    }
};


const checkAnswer = () => {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        // No option selected, do nothing (or show a warning if needed)
        return;
    }

    const selectedValue = selectedOption.parentNode.textContent.trim();
    if (selectedValue === correctAnswer) {
        score++; // Increase the score
        scoreArea.innerHTML = `Score: ${score}/10`; // Update the score in UI
    }
};


startBtn.addEventListener('click', getQuestion);
nextBtn.addEventListener('click', ()=>{
    checkAnswer();
    getQuestion();
});