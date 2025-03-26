const questions = [
    { title: "第1題", image: "https://i.imgur.com/02PnEip.png", options: ["(1)", "(2)", "(3)", "(4)"], answer: "(3)", hint: "https://i.imgur.com/yaSu1zq.png" },
    { title: "第2題", image: "https://i.imgur.com/FgfOBWu.png", options: ["不存在", "0", "2/3", "1/3"], answer: "0", hint: "https://i.imgur.com/YQhl7mx.png" },
    { title: "第3題", image: "https://i.imgur.com/MLgzVi5.png", options: ["不可微分", "7", "-6", "1"], answer: "-6", hint: "https://i.imgur.com/EzUisMS.png" },
    { title: "第4題", image: "https://i.imgur.com/LshZqyy.png", options: ["不存在", "1", "6", "0"], answer: "不存在", hint: "https://i.imgur.com/YQhl7mx.png" },
    { title: "第5題", image: "https://i.imgur.com/RKC5mlQ.png", options: ["1", "2", "7", "-1/2"], answer: "-1/2", hint: "https://i.imgur.com/u5jwz4n.png" },
    { title: "第6題", image: "https://i.imgur.com/7ZtxlDx.png", options: ["不存在", "-5", "1", "0"], answer: "-5", hint: "https://i.imgur.com/tWu3FKq.png" },
    { title: "第7題", image: "https://i.imgur.com/xK7qfNR.png", options: ["1", "10", "20", "-3"], answer: "10", hint: "https://i.imgur.com/EzUisMS.png" },
    { title: "第8題", image: "https://i.imgur.com/Vl1thsY.png", options: ["0", "5", "-3", "16"], answer: "-3", hint: "https://i.imgur.com/yaSu1zq.png" },
    { title: "第9題", image: "https://i.imgur.com/Yj79vyM.png", options: ["2", "15", "4", "以上皆非"], answer: "4", hint: "https://i.imgur.com/Q86S60h.png" },
    { title: "第10題", image: "https://i.imgur.com/MfKVlDQ.png", options: ["π/4", "2π/3", "π/6", "3π/5"], answer: "π/4", hint: "https://i.imgur.com/qvRuuid.png" },
    { title: "第11題", image: "https://i.imgur.com/aadEq9L.png", options: ["2", "4", "不存在", "0"], answer: "2", hint: "https://i.imgur.com/sriN9VW.png" },
    { title: "第12題", image: "https://i.imgur.com/jtCB45p.png", options: ["2", "-2", "不存在", "0"], answer: "0", hint: "https://i.imgur.com/syasSZD.png" },
    { title: "第13題", image: "https://i.imgur.com/6N45wL9.png", options: ["π", "2π", "不存在", "π/2"], answer: "π/2", hint: "https://i.imgur.com/tWu3FKq.png" },
    { title: "第14題", image: "https://i.imgur.com/5W6HjCu.png", options: ["2", "4", "-1", "1"], answer: "-1", hint: "https://i.imgur.com/u5jwz4n.png" },
    { title: "第15題", image: "https://i.imgur.com/V7p0knw.png", options: ["1", "不存在", "-1", "0"], answer: "不存在", hint: "https://i.imgur.com/Q86S60h.png" }
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