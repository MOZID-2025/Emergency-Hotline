var heartCount = document.getElementById("heart-count");

var cardHearts = document.querySelectorAll("#heart i");

var count = 0;

for (var i = 0; i < cardHearts.length; i++) {
  cardHearts[i].addEventListener("click", function () {
    count++;
    heartCount.textContent = count;
  });
}

// call

let coinEl = document.getElementById("coin");
let coins = parseInt(coinEl.textContent);

const callHistoryList = document.querySelector(".call-history-list");

const callButtons = document.querySelectorAll(".call-button");

const clearHistoryBtn = document.querySelector(".clear-history");

callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".bg-white");
    const serviceName = card.querySelector("h2").textContent;
    const serviceNumber = card.querySelector("p.text-2xl").textContent;

    if (coins < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    coins -= 20;
    coinEl.textContent = coins;

    alert(`Calling ${serviceName} (${serviceNumber})`);

    const li = document.createElement("li");
    li.className = "bg-gray-100 p-2 rounded flex justify-between";
    li.innerHTML = `
      <div>
        <p>${serviceName}</p>
        <p class="text-gray-400 text-sm">${serviceNumber}</p>
      </div>
      <span class="text-gray-500 text-sm">${new Date().toLocaleTimeString()}</span>
    `;
    callHistoryList.appendChild(li);
  });
});

clearHistoryBtn.addEventListener("click", function () {
  callHistoryList.innerHTML = "";
});

const copyButtons = document.querySelectorAll("#copy-btn");
const copyCountElement = document.getElementById("copy");

copyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".bg-white");
    const phoneNumber = card.querySelector(".text-2xl").textContent;

    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert(`Copied: ${phoneNumber}`);

        let currentCount = parseInt(copyCountElement.textContent);
        copyCountElement.textContent = currentCount + 1;
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
});
