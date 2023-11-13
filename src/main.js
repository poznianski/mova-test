import { questions } from "./questions.js";
import {
  createButton,
  createInput,
  createParagraph,
} from "./helpers/helpers.js";

const startButton = document.querySelector("#start-button");
const quizContent = document.querySelector("#quiz-wrap");

let currentLevel = 0;
let correctAnswers = 0;
let currentTask = 1;
let currentQuestionId;

const startQuiz = () => {
  startButton.style.display = "none";
  quizContent.style.display = "block";
  nextButton.style.display = "block";
  resultContainer.style.opacity = "0";

  displayQuestion();
};

startButton.addEventListener("click", startQuiz);

const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
const questionElement = document.querySelector("#question-container");
const optionsElement = document.querySelector("#options-container");
const nextButton = document.querySelector("#next-button");
const resultContainer = document.querySelector("#results-container");
const quizContainer = document.querySelector("#quiz-container");
const answerResult = document.querySelector("#answer-result");
answerResult.className = "result-message";

const displayQuestion = () => {
  questionElement.innerHTML = "";
  optionsElement.innerHTML = "";
  answerResult.textContent = "";
  nextButton.textContent = "Check";
  isAnswerChecked = false;

  const currentLevelQuestions = questions.filter(
    (q) => q.level === levels[currentLevel] && q.task === currentTask,
  );

  console.log("Filtered Questions:", currentLevelQuestions);

  if (currentLevelQuestions.length === 0) {
    console.log("No more questions for this level and task");
    endTest();
    return;
  }

  const randomIndex = Math.floor(Math.random() * currentLevelQuestions.length);

  const questionData = currentLevelQuestions[randomIndex];

  if (questionData) {
    currentQuestionId = questions.indexOf(questionData);
  } else {
    console.error("Something went wrong while fetching the question data");
    endTest();
  }

  questionElement.appendChild(
    createParagraph(questionData.title, "test_question-title test_mb-20"),
  );
  questionElement.appendChild(
    createParagraph(questionData.question, "test_question-text"),
  );

  const form = document.createElement("form");
  form.id = "option-form";
  form.className = "test_form-options";

  questionData.options.forEach((option, i) => {
    const radioDiv = document.createElement("div");
    radioDiv.className = "test_radio";

    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "option";
    radio.value = option;
    radio.id = `option${i}`;

    if (i === 0) {
      radio.checked = true;
    }

    const label = document.createElement("label");
    label.htmlFor = `option${i}`;
    label.textContent = option;
    label.className = "test_radio-label";

    radioDiv.appendChild(radio);
    radioDiv.appendChild(label);

    form.appendChild(radioDiv);
    form.appendChild(document.createElement("br"));
  });

  optionsElement.appendChild(form);
};

const maxTaskNumber = (level) => {
  const tasksForLevel = questions.filter((q) => q.level === level);

  return Math.max(...tasksForLevel.map((q) => q.task));
};

let isAnswerChecked = false;

const handleButtonClick = () => {
  if (isAnswerChecked) {
    isAnswerChecked = false;
    nextButton.textContent = "Check";
    displayQuestion();
  } else {
    handleAnswerClick();
    isAnswerChecked = true;
    nextButton.textContent = "Next";
  }
};

const handleAnswerClick = () => {
  const formData = new FormData(document.getElementById("option-form"));
  const selectedAnswer = formData.get("option");

  resultContainer.textContent = "";

  const selectedOption = document.querySelector(`input[name="option"]:checked`);
  const selectedLabel = selectedOption ? selectedOption.nextSibling : null;

  if (currentQuestionId == null) {
    console.error("No current question set");
    return;
  }

  const currentQuestion = questions[currentQuestionId];

  if (selectedAnswer === currentQuestion.answer) {
    if (selectedLabel) {
      selectedLabel.classList.add("correct-answer");
    }
    answerResult.textContent = "Correct!";
    answerResult.className = "result-message correct";
    correctAnswers++;
  } else {
    if (selectedLabel) {
      selectedLabel.classList.add("wrong-answer");
    }
    answerResult.textContent = "Wrong!";
    answerResult.className = "result-message wrong";
  }

  setTimeout(() => {
    answerResult.classList.add("hidden-message");
  }, 2000);

  const maxTasks = maxTaskNumber(levels[currentLevel]);

  if (correctAnswers >= 2 && currentLevel < levels.length - 1) {
    currentLevel++;
    correctAnswers = 0;
    currentTask = 1;
  } else if (currentTask > maxTasks) {
    endTest();
  } else {
    currentTask++;
  }
};

nextButton.addEventListener("click", () => {
  handleButtonClick();
});

const resetAndStartQuiz = () => {
  currentLevel = 0;
  correctAnswers = 0;
  currentTask = 1;
  currentQuestionId = null;
  resultContainer.innerHTML = "";
  quizContent.style.display = "block";

  nextButton.textContent = "Check";
  answerResult.textContent = "";
  answerResult.className = "";

  questionElement.style.display = "block";
  optionsElement.style.display = "flex";

  startQuiz();
};

const endTest = () => {
  resultContainer.textContent = "";
  resultContainer.style.opacity = "1";
  const options = document.querySelector("#options-container");
  options.style.display = "none";
  questionElement.style.display = "none";

  resultContainer.appendChild(
    createParagraph(
      "Дякуємо за проходження мовного тесту!",
      "result-text test_mb-20",
    ),
  );
  resultContainer.appendChild(
    createParagraph(
      `Ваш результат: ${levels[currentLevel]}`,
      "result-text test_mb-20",
    ),
  );
  resultContainer.appendChild(
    createParagraph(
      "Якщо ви хочете отримати результат на електронну пошту, заповніть поля нижче.",
      "result-text test_mb-20",
    ),
  );

  resultContainer.appendChild(
    createInput("text", "email", "test_input test_mb-20", "E-mail"),
  );

  resultContainer.appendChild(
    createInput(
      "text",
      "fullName",
      "test_input test_mb-20",
      "Ім'я та прізвище",
    ),
  );

  const sendButton = createButton("test_button", "test_button", "Відправити");
  resultContainer.appendChild(sendButton);

  sendButton.addEventListener("click", async () => {
    const emailInput = document.querySelector("#email");
    const fullNameInput = document.querySelector("#fullName");
    const email = emailInput ? emailInput.value : "";
    const fullName = fullNameInput ? fullNameInput.value : "";
    const level = levels[currentLevel];

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(email)) {
      const errorMessage = createParagraph(
        "Please enter a valid email address",
        "error-text",
      );
      resultContainer.appendChild(errorMessage);
      setTimeout(() => {
        errorMessage.remove();
      }, 2000);
      return;
    }

    if (!email || !fullName) {
      const errorMessage = createParagraph(
        "Inputs cannot be empty",
        "error-text",
      );
      resultContainer.appendChild(errorMessage);
      setTimeout(() => {
        errorMessage.remove();
      }, 2000);
      return;
    }

    resultContainer.innerHTML = "<p>Loading...</p>";

    options.style.display = "none";

    try {
      const response = await fetch("https://mova-backend.vercel.app/send-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, level, fullName }),
      });

      resultContainer.innerHTML = "";

      if (response.ok) {
        resultContainer.appendChild(
          createParagraph(
            "Успішно відправлено, перевірте свою скриньку",
            "result-text",
          ),
        );

        const retakeTestButton = createButton(
          "test_button",
          "test_button",
          "Пройти тест знову",
        );
        const goToCoursesButton = createButton(
          "test_button",
          "test_button",
          "Перейти до вибору курсів",
        );

        resultContainer.appendChild(retakeTestButton);
        resultContainer.appendChild(goToCoursesButton);

        retakeTestButton.addEventListener("click", resetAndStartQuiz);
        goToCoursesButton.addEventListener(
          "click",
          () =>
            (window.location.href = "https://movaproject.com.ua/#courses_v"),
        );
      } else {
        resultContainer.appendChild(
          createParagraph(
            "Щось пішло не так. Будь-ласка, зверніться до адміністратора",
            "result-text",
          ),
        );
      }
    } catch (error) {
      resultContainer.appendChild(
        createParagraph(
          "Помилка на стороні клієнта. Будь-ласка, зверніться до адміністратора",
          "result-text",
        ),
      );
      console.log("An error occurred:", error);
    }
  });

  nextButton.style.display = "none";
};

displayQuestion();
