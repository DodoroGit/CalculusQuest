const questions = [
    { title: "第1題", image: "https://i.imgur.com/W45QSBa.png", options: ["存在", "不存在"], answer: "不存在", hint: "https://i.imgur.com/sriN9VW.png" },
    { title: "第2題", image: "https://i.imgur.com/2GUsh80.png", options: ["1", "0", "16", "7"], answer: "1", hint: "https://i.imgur.com/EzUisMS.png" },
    { title: "第3題", image: "https://i.imgur.com/CSTKVUt.png", options: ["0", "4", "3", "7"], answer: "7", hint: "https://i.imgur.com/E3wbpcQ.png" },
    { title: "第4題", image: "https://i.imgur.com/gOhv7zQ.png", options: ["不存在", "無限", "1", "0"], answer: "0", hint: "https://i.imgur.com/sriN9VW.png" },
    { title: "第5題", image: "https://i.imgur.com/3s9crGh.png", options: ["6/5", "2/3", "0", "不存在"], answer: "6/5", hint: "https://i.imgur.com/qvRuuid.png" },
    { title: "第6題", image: "https://i.imgur.com/M3vm7gE.png", options: ["不存在", "0", "5", "12"], answer: "12", hint: "https://i.imgur.com/syasSZD.png" },
    { title: "第7題", image: "https://i.imgur.com/l1pBUMD.png", options: ["不存在", "0", "3x^2", "x^2+1"], answer: "3x^2", hint: "https://i.imgur.com/syasSZD.png" },
    { title: "第8題", image: "https://i.imgur.com/Ez2Pifa.png", options: ["不存在", "-1/9", "0", "1/3"], answer: "-1/9", hint: "https://i.imgur.com/syasSZD.png" },
    { title: "第9題", image: "https://i.imgur.com/7lSdj3w.png", options: ["不存在", "0", "10", "2/3"], answer: "2/3", hint: "https://i.imgur.com/u5jwz4n.png" },
    { title: "第10題", image: "https://i.imgur.com/YLhuwO4.png", options: ["不存在", "-1/2", "13", "-1/5"], answer: "-1/2", hint: "https://i.imgur.com/tWu3FKq.png" },
    { title: "第11題", image: "https://i.imgur.com/Mf5Wmzz.png", options: ["-4/5", "2/3", "0", "-1"], answer: "-4/5", hint: "https://i.imgur.com/tWu3FKq.png" },
    { title: "第12題", image: "https://i.imgur.com/FYcGBYA.png", options: ["7", "0", "16", "3"], answer: "7", hint: "https://i.imgur.com/yaSu1zq.png" },
    { title: "第13題", image: "https://i.imgur.com/SL2UNAz.png", options: ["不存在", "1/4", "0", "9"], answer: "0", hint: "https://i.imgur.com/yaSu1zq.png" },
    { title: "第14題", image: "https://i.imgur.com/L1OKuIY.png", options: ["不存在", "7", "0", "3"], answer: "0", hint: "https://i.imgur.com/yaSu1zq.png" }
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