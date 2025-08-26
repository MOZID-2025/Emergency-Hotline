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

// Get the coin element
let coinEl = document.getElementById("coin");
let coins = parseInt(coinEl.textContent);

// Call history container
const callHistoryList = document.querySelector(".call-history-list");

// Update HTML to include a class for all call buttons
const callButtons = document.querySelectorAll(".call-button");

// Clear history button
const clearHistoryBtn = document.querySelector(".clear-history");

// Loop through all call buttons
callButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const card = button.closest(".bg-white"); // get parent card
    const serviceName = card.querySelector("h2").textContent;
    const serviceNumber = card.querySelector("p.text-2xl").textContent;

    // Check if enough coins
    if (coins < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    // Deduct coins
    coins -= 20;
    coinEl.textContent = coins;

    // Show alert
    alert(`Calling ${serviceName} (${serviceNumber})`);

    // Add to call history
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

// Clear history functionality
clearHistoryBtn.addEventListener("click", function () {
  callHistoryList.innerHTML = "";
});

// copy button
const copyButtons = document.querySelectorAll("#copy-btn");
const copyCountElement = document.getElementById("copy");

copyButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Find the phone number in the same card
    const card = button.closest(".bg-white"); // closest parent card
    const phoneNumber = card.querySelector(".text-2xl").textContent;

    // Copy to clipboard
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        // Show alert
        alert(`Copied: ${phoneNumber}`);

        // Increase copy count
        let currentCount = parseInt(copyCountElement.textContent);
        copyCountElement.textContent = currentCount + 1;
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
});
