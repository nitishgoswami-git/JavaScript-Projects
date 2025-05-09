
        let randNum = parseInt(Math.random() * 100 + 1);
        const submit = document.querySelector('#subt');
        const userInput = document.querySelector('#guessField');
        const guessSlot = document.querySelector('.guesses');
        const remaining = document.querySelector('.lastResult');
        const lowOrHi = document.querySelector('.lowOrHi');
        const startOver = document.querySelector('.resultParas');

        const p = document.createElement('p');

        let prevGuess = [];
        let numGuess = 1;
        let playGame = true;

        if (playGame) {
            submit.addEventListener('click', (e) => {
                e.preventDefault();
                const guess = parseInt(userInput.value);

                if (!guess) {
                    alert("Please enter a number!");
                    return;
                }

                console.log(guess);
                validateGuess(guess);
            });
        }

        function validateGuess(guess) {
            if (isNaN(guess) || guess < 1 || guess > 100) {
                alert("Enter a valid number between 1 and 100.");
            } else {
                prevGuess.push(guess);
                if (numGuess === 11) {
                    displayGuess(guess);
                    displayMessage(`Game Over. The correct number was ${randNum}`);
                    endGame();
                } else {
                    displayGuess(guess);
                    checkGuess(guess);
                }
            }
        }

        function checkGuess(guess) {
            if (guess === randNum) {
                displayMessage(`You Won! 🎉`);
                endGame();
            } else if (guess < randNum) {
                displayMessage(`Number is too Low 📉`);
            } else {
                displayMessage(`Number is too High 📈`);
            }
        }

        function displayMessage(message) {
            lowOrHi.innerHTML = `<h2>${message}</h2>`;
        }

        function displayGuess(guess) {
            userInput.value = "";
            guessSlot.innerHTML += `${guess}, `;
            numGuess++;
            remaining.innerHTML = `${11 - numGuess}`;
        }

        function endGame() {
            userInput.value = '';
            userInput.setAttribute('disabled', '');
            p.classList.add('button');
            p.innerHTML = `<h2 id="newGame">Start Over</h2>`;
            startOver.appendChild(p);
            playGame = false;
            newGame();
        }

        function newGame() {
            const newGameButton = document.querySelector('#newGame');
            newGameButton.addEventListener('click', () => {
                randNum = parseInt(Math.random() * 100 + 1);
                prevGuess = [];
                numGuess = 1;
                guessSlot.innerHTML = '';
                remaining.innerHTML = `10`;
                userInput.removeAttribute('disabled');
                startOver.removeChild(p);
                playGame = true;
            });
        }
