// Change heading color when clicked
const heading = document.querySelector("h2");

heading.addEventListener("click", () => {
  heading.style.color = "#0066cc";
});

// Alert when link is clicked
const courseLink = document.querySelector("a");

courseLink.addEventListener("click", () => {
  alert("You are about to visit an external course website!");
});

// Automatically update footer year
const footerText = document.querySelector("footer h5");
const currentYear = new Date().getFullYear();

footerText.textContent = `© Mallory Matravers | ${currentYear}`;

// Create a button using JavaScript
const toggleButton = document.createElement("button");
toggleButton.textContent = "Enable Focus Mode";
document.body.insertBefore(toggleButton, document.body.firstChild);

// Style the button with JavaScript
toggleButton.style.display = "block";
toggleButton.style.margin = "20px auto";
toggleButton.style.padding = "10px 20px";
toggleButton.style.fontSize = "16px";
toggleButton.style.cursor = "pointer";

// Track mode state
let focusMode = false;

// Button click interaction
toggleButton.addEventListener("click", () => {
  focusMode = !focusMode;

  if (focusMode) {
    document.body.style.backgroundColor = "#1e1e1e";
    document.body.style.color = "#f4f6f8";
    toggleButton.textContent = "Disable Focus Mode";
  } else {
    document.body.style.backgroundColor = "#f4f6f8";
    document.body.style.color = "#333";
    toggleButton.textContent = "Enable Focus Mode";
  }
});
