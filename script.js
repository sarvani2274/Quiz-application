const quizData = [
    {
        question: "Which of the following is a NoSQL database?",
        options: ["MySQL", "PostgreSQL", "MongoDB", "Oracle"],
        correct: 2
    },
    {
        question: "What does the acronym REST stand for in web development?",
        options: ["Rapid Execution Service Template", "Representational State Transfer", "Remote Execution Standard Technology", "Restructured Text"],
        correct: 1
    },
    {
        question: "Which HTTP method is used to update a resource on the server?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: 2
    },
    {
        question: "Which of the following is a popular frontend JavaScript framework?",
        options: ["Django", "React", "Flask", "Laravel"],
        correct: 1
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Simple Query Language", "Sequential Query Language", "Server Query Language"],
        correct: 0
    },
    {
        question: "Which of the following is a CSS preprocessor?",
        options: ["SASS", "Bootstrap", "Tailwind", "jQuery"],
        correct: 0
    },
    {
        question: "What is the default port for HTTP?",
        options: ["21", "22", "80", "443"],
        correct: 2
    },
    {
        question: "Which of the following is a build tool for JavaScript applications?",
        options: ["npm", "Webpack", "Git", "Jenkins"],
        correct: 1
    },
    {
        question: "Which command is used to initialize a new Git repository?",
        options: ["git commit", "git init", "git merge", "git push"],
        correct: 1
    },
    {
        question: "In the MERN stack, what does 'N' stand for?",
        options: ["Node.js", "Nginx", "NestJS", "Netlify"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    deselectOptions();
    const currentQuizData = quizData[currentQuestion];
    document.getElementById('question').innerText = currentQuizData.question;
    const optionsList = document.querySelectorAll('.option-btn');
    optionsList.forEach((optionBtn, index) => {
        optionBtn.innerText = currentQuizData.options[index];
        optionBtn.classList.remove('correct', 'incorrect'); // Remove color class on load
    });
}

function deselectOptions() {
    document.querySelectorAll('.option-btn').forEach(option => {
        option.disabled = false;
        option.classList.remove('correct', 'incorrect'); // Remove classes for next question
    });
}

function selectOption(selectedIndex) {
    const currentQuizData = quizData[currentQuestion];
    const optionButtons = document.querySelectorAll('.option-btn');

    // Disable options after one is selected
    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuizData.correct) {
        optionButtons[selectedIndex].classList.add('correct');
        score++;
    } else {
        optionButtons[selectedIndex].classList.add('incorrect');
        optionButtons[currentQuizData.correct].classList.add('correct'); // Highlight correct answer
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuiz();
    } else {
        document.getElementById('quiz-box').classList.add('hidden');
        document.getElementById('result-box').classList.remove('hidden');
        document.getElementById('score').innerText = score;
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('quiz-box').classList.remove('hidden');
    loadQuiz();
}

// Load the first question
loadQuiz();
