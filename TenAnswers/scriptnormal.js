let solution = 0;
let remain = 10;

const getSolution = () => {
    solution = Math.round(Math.random() * 99);
    console.log(solution);
}

const updateCirclePosition = () => {
    let currentRound = 10 - remain;
    let percentage = (currentRound / 10) * 100;

    circle.style.marginTop = `${percentage}%`;
}

const updateRoundCount = () => {
    let roundCount = document.getElementById("round-count");
    roundCount.innerText = `Round ${10 - remain}/10`;
}

const Checkanswer = () => {
    let textnumber = document.getElementById("Number");
    let userInput = document.getElementById("userInput").value;

    // ตรวจสอบว่า userInput มีความยาวไม่เกิน 2 ตัว
    if (userInput.length <= 2) {
        if (userInput == solution) {
            textnumber.innerHTML += `Correct! The solution was ${solution}.<br>`;
            alert("Congratulations! You won!");
            handleGameEnd();
        } else {
            textnumber.innerHTML += `Try again Number Is : ${userInput} <br>`;
            if (userInput > solution) {
                textnumber.innerHTML += `Your guess is greater.<br>`;
            } else {
                textnumber.innerHTML += `Your guess is less.<br>`;
            }
        }

        userInput = " ";
        remain--;

        if (remain === 0) {
            textnumber.innerHTML += `Game Over. The correct solution was ${solution}.<br>`;
            alert("Game Over. You lost.");
            handleGameEnd();
        }
        updateRoundCount();
    } else {
        // แสดงข้อความถ้าผู้ใช้ใส่เลขมากกว่า 2 ตัว
        textnumber.innerHTML += `ห้ามใส่ตัวเลขมากกว่า 2ตัว.<br>`;
    }
}
const handleGameEnd = () => {
    const playAgain = confirm("Do you want to play again?");
    
    if (playAgain) {
        resetGame();
    } else {
        // Redirect to the home page or any other action you want
        window.location = 'tenanswers.html';
    }
}


const resetGame = () => {
    // Clear displayed information
    let textnumber = document.getElementById("Number");
    textnumber.innerHTML = "";

    // Reset game state, e.g., solution, remain, etc.
    getSolution();
    remain = 11;

    // Update round count and circle position
    updateRoundCount();
}


getSolution();
