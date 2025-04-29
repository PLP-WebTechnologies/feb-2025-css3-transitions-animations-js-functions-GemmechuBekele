// Load saved background preference on page load
window.onload = function () {
  const savedBg = localStorage.getItem("backgroundColor");
  if (savedBg) {
    document.body.style.backgroundColor = savedBg;
  }
};

// Function to store preference in localStorage
function savePreference() {
  const colorInput = document.getElementById("bgColor").value;
  document.body.style.backgroundColor = colorInput;
  localStorage.setItem("backgroundColor", colorInput);
}

// Function to trigger bounce animation
function triggerBounce() {
  const box = document.getElementById("animateBtn");

  // Add bounce class
  box.classList.add("bounce");

  // Remove bounce class after animation completes
  setTimeout(() => {
    box.classList.remove("bounce");
  }, 500);
}
