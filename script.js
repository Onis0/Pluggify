// Hämta XP från localStorage eller sätt 0 om inte finns
let xp = Number(localStorage.getItem("xp")) || 0;

const xpValue = document.getElementById("xp-value");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");

// Visa XP på sidan
function updateDisplay() {
  xpValue.textContent = xp;
}

// Spara XP i localStorage
function saveXP() {
  localStorage.setItem("xp", xp);
}

increaseBtn.addEventListener("click", () => {
  xp++;
  saveXP();
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  if (xp > 0) {
    xp--;
    saveXP();
    updateDisplay();
  }
});

// Visa XP vid start
updateDisplay();
