const questions = [
    { title: "第1題", image: "https://i.imgur.com/D4QjUi0.png", options: ["1/4", "0", "0或1/4", "以上皆非"],                   answer: "0或1/4", hint: "learning/images/Hint1.png" },
    { title: "第2題", image: "https://i.imgur.com/08ml33O.png", options: ["π", "π/6", "5π/6", "以上皆是"],                     answer: "5π/6", hint: "learning/images/Hint2.png" },
    { title: "第3題", image: "https://i.imgur.com/qD2AJtV.png", options: ["(A)", "(B)", "(C)", "(D)"],                         answer: "(B)", hint: "learning/images/Hint3.png" },
    { title: "第4題", image: "https://i.imgur.com/JhCKPKy.png", options: ["[-2,2]", "[2,0)", "(-2,2)", "(0,2)"],               answer: "(-2,2)", hint: "learning/images/Hint4.png" },
    { title: "第5題", image: "https://i.imgur.com/QkVSqd4.png", options: ["-1/2", "-8/3", "-1", "-2"],                         answer: "-8/3", hint: "learning/images/Hint5.png" },
    { title: "第6題", image: "https://i.imgur.com/3Yrr18e.png", options: ["2", "3", "4", "以上皆非"],                          answer: "3", hint: "learning/images/Hint6.png" },
    { title: "第7題", image: "https://i.imgur.com/teyVIqd.png", options: ["6", "3", "9", "12"],                                answer: "9", hint: "learning/images/Hint7.png" },
    { title: "第8題", image: "https://i.imgur.com/4gKJ1ZL.png", options: ["最小值", "最大值", "無最大值也無最小值", "以上皆非"], answer: "最大值", hint: "learning/images/Hint8.png" }
];


let currentIndex = 0;
const container = document.getElementById("questionArea");

function updateProgress() {
  const progress = ((currentIndex) / questions.length) * 100;
  document.getElementById("progressFill").style.width = `${progress}%`;
}

function renderQuestion(index) {
  container.innerHTML = "";
  const q = questions[index];

  const card = document.createElement("div");
  card.className = "question-card active";

  card.innerHTML = `
    <div class="question-title">${q.title}</div>
    <img class="question-img" src="${q.image}" alt="題目圖">
    <div class="options">
      ${q.options.map((opt, i) => `
        <label class="option-label">
          <input type="radio" name="q${index}" value="${opt}"> ${opt}
        </label>
      `).join('')}
    </div>
    <div class="btn-group">
      <button class="btn" onclick="submitAnswer(${index})">繳交</button>
      <button class="btn" onclick="showHint(${index})">參考提示</button>
    </div>
    <img id="hint${index}" class="hint-img" src="${q.hint}" alt="提示圖">
  `;

  container.appendChild(card);
  updateProgress();
}

function submitAnswer(index) {
  const selected = document.querySelector(`input[name=q${index}]:checked`);
  if (!selected) {
    alert("請選擇一個答案！");
    return;
  }
  const correct = questions[index].answer;
  if (selected.value === correct) {
    alert("回答正確！");
  } else {
    alert("回答錯誤，請參考提示。");
  }
  currentIndex++;
  if (currentIndex < questions.length) {
    renderQuestion(currentIndex);
  } else {
    updateProgress();
    alert("測驗完成！");
    container.innerHTML = "<h2 style='text-align:center;'>🎉 你已完成全部測驗！</h2>";
  }
}

function showHint(index) {
  document.getElementById(`hint${index}`).style.display = "block";
}

renderQuestion(currentIndex);