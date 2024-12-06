// Function to show the initial alert message
function showAlert() {
  alert("Hello, world!");
}

// Function to make text larger
function makeTextBigger() {
  const textArea = document.getElementById("userText");
  textArea.style.fontSize = "24pt";
}

// Function to apply fancy or boring styles based on the selected radio button
function applyStyle() {
  const textArea = document.getElementById("userText");
  const isFancy = document.getElementById("fancyShmancy").checked;

  if (isFancy) {
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

// Function to transform text to uppercase and add "-Moo" suffix
function mooifyText() {
  const textArea = document.getElementById("userText");
  const sentences = textArea.value.toUpperCase().split(".");
  textArea.value = sentences.map(sentence => sentence.trim() + "-Moo").join(". ");
}
