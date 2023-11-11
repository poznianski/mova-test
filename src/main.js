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

  displayQuestion();
};

startButton.addEventListener("click", startQuiz);

const levels = ["A1", "A2", "B1", "B2", "C1", "C2"];
const questionElement = document.querySelector("#question-container");
const optionsElement = document.querySelector("#options-container");
const nextButton = document.querySelector("#next-button");
const resultContainer = document.querySelector("#results-container");
const quizContainer = document.querySelector("#quiz-container");

const displayQuestion = () => {
  questionElement.innerHTML = "";
  optionsElement.innerHTML = "";

  const currentLevelQuestions = questions.filter(
    (q) => q.level === levels[currentLevel] && q.task === currentTask,
  );

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

const handleAnswerClick = () => {
  const formData = new FormData(document.getElementById("option-form"));
  const selectedAnswer = formData.get("option");

  resultContainer.textContent = "";

  if (currentQuestionId == null) {
    console.error("No current question set");
    return;
  }

  const currentQuestion = questions[currentQuestionId];

  if (selectedAnswer === currentQuestion.answer) {
    resultContainer.textContent = `Correct!`;
    correctAnswers++;
  } else {
    resultContainer.textContent = `Wrong!`;
  }

  const maxTasks = maxTaskNumber(levels[currentLevel]);

  if (correctAnswers >= 2 && currentLevel < levels.length - 1) {
    currentLevel++;
    correctAnswers = 0;
    currentTask = 1;
  } else if (currentTask > maxTasks) {
    endTest();
    return;
  } else {
    currentTask++;
  }

  displayQuestion();
};

nextButton.addEventListener("click", () => {
  handleAnswerClick();
});

const endTest = () => {
  resultContainer.textContent = "";
  resultContainer.style.display = "flex";
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
      "result-text",
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

    options.style.display = "none";

    try {
      const response = await fetch("https://mova-backend.vercel.app/send-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, level, fullName }),
      });

      resultContainer.innerHTML = "Loading...";

      await new Promise((resolve) => setTimeout(resolve, 2000));

      resultContainer.innerHTML = "";

      if (response.ok) {
        resultContainer.appendChild(
          createParagraph(
            "Успішно відправлено, перевірте свою скриньку",
            "result-text",
          ),
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
          "Щось пішло не так. Будь-ласка, зверніться до адміністратора",
          "result-text",
        ),
      );
      console.log("An error occurred:", error);
    }
  });

  nextButton.style.display = "none";
};

displayQuestion();
