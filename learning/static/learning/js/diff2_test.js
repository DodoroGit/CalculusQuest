const questions = [
    { title: "第1題", image: "https://i.imgur.com/EpHIAsK.png", options: ["(A)", "(B)", "(C)", "(D)"], answer: "(A)", hint: "https://i.imgur.com/yaSu1zq.png" },
    { title: "第2題", image: "https://i.imgur.com/p9EAM9P.png", options: ["(A)", "(B)", "(C)", "(D)"], answer: "(B)", hint: "https://i.imgur.com/YQhl7mx.png" },
    { title: "第3題", image: "https://i.imgur.com/pR992aj.png", options: ["1/5", "4/5", "6/5", "1"], answer: "4/5", hint: "https://i.imgur.com/EzUisMS.png" },
    { title: "第4題", image: "https://i.imgur.com/0EHO4l4.png", options: ["96", "48", "24", "12"], answer: "24", hint: "https://i.imgur.com/YQhl7mx.png" },
    { title: "第5題", image: "https://i.imgur.com/WtBZIkL.png", options: ["x = 0", "x = π", "x = π/2", "x = π/4"], answer: "x = π/2", hint: "https://i.imgur.com/u5jwz4n.png" },
    { title: "第6題", image: "https://i.imgur.com/jSPLOpA.png", options: ["-16/13", "0", "1", "1/2"], answer: "-16/13", hint: "https://i.imgur.com/tWu3FKq.png" },
    { title: "第7題", image: "https://i.imgur.com/Po7Zllr.png", options: ["(A)", "(B)", "(C)", "(D)"], answer: "(C)", hint: "https://i.imgur.com/EzUisMS.png" },
    { title: "第8題", image: "https://i.imgur.com/STZQ1Mg.png", options: ["(A)", "(B)", "(C)", "(D)"], answer: "(B)", hint: "https://i.imgur.com/yaSu1zq.png" },
    { title: "第9題", image: "https://i.imgur.com/83QtbkO.png", options: ["(A)", "(B)", "(C)", "(D)"], answer: "(D)", hint: "https://i.imgur.com/Q86S60h.png" },
    { title: "第10題", image: "https://i.imgur.com/8sk8Ig7.png", options: ["1 + x", "1 - x", "x - 1", "x + 1"], answer: "1 - x", hint: "https://i.imgur.com/qvRuuid.png" },
    { title: "第11題", image: "https://i.imgur.com/4zZ1RMx.png", options: ["-9", "0", "9", "18"], answer: "9", hint: "https://i.imgur.com/sriN9VW.png" },
    { title: "第12題", image: "https://i.imgur.com/YrHOPGq.png", options: ["0", "-1", "1", "不存在"], answer: "不存在", hint: "https://i.imgur.com/syasSZD.png" },
    { title: "第13題", image: "https://i.imgur.com/44hgeqT.png", options: ["-1", "0", "1", "2"], answer: "0", hint: "https://i.imgur.com/tWu3FKq.png" }
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