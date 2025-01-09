const startBtn = document.getElementById('startBtn');
const retryBtn = document.getElementById('retryBtn');
const languageSelect = document.getElementById('language');
const durationSelect = document.getElementById('duration');
const testArea = document.getElementById('testArea');
const codeSnippet = document.getElementById('codeSnippet');
const inputBox = document.getElementById('inputBox');
const timeLeft = document.getElementById('timeLeft');
const wordsTyped = document.getElementById('wordsTyped');
const accuracy = document.getElementById('accuracy');
const result = document.getElementById('result');
const wpm = document.getElementById('wpm');
const finalAccuracy = document.getElementById('finalAccuracy');

// Code snippets for C, C#, and Python
const codeSnippets = {
  C: `#include <stdio.h>\n\nint main() {\n    printf("Hello, World!");\n    return 0;\n}`,
  CSharp: `using System;\n\nclass Program {\n    static void Main() {\n        Console.WriteLine("Hello, World!");\n    }\n}`,
  Python: `print("Hello, World!")`
};

let timer, totalTime, typedWords, errors, selectedLanguage, textToType;

function startTest() {
  testArea.classList.remove('hidden');
  result.classList.add('hidden');
  inputBox.value = '';
  inputBox.disabled = false;
  inputBox.focus();

  // Get the selected language and duration
  selectedLanguage = languageSelect.value;
  totalTime = parseInt(durationSelect.value);
  timeLeft.textContent = totalTime;
  typedWords = 0;
  errors = 0;

  // Get the code snippet for the selected language
  textToType = codeSnippets[selectedLanguage];
  codeSnippet.textContent = textToType;  // This will display the code in the #codeSnippet element

  inputBox.addEventListener('input', calculateStats);
  timer = setInterval(updateTimer, 1000);
}

function calculateStats() {
  const typedText = inputBox.value;
  const typedLength = typedText.length;

  let correctChars = 0;
  for (let i = 0; i < typedLength; i++) {
    if (typedText[i] === textToType[i]) {
      correctChars++;
    }
  }

  errors = typedLength - correctChars;
  const correctWords = typedText.split(/\s+/).filter(word => word === textToType.split(/\s+/)[0]).length;
  typedWords = correctWords;

  wordsTyped.textContent = typedWords;
  accuracy.textContent = ((correctChars / typedLength) * 100 || 0).toFixed(2);
}

function updateTimer() {
  totalTime--;
  timeLeft.textContent = totalTime;

  if (totalTime === 0) {
    clearInterval(timer);
    inputBox.disabled = true;
    showResults();
  }
}

function showResults() {
  const typedText = inputBox.value;
  const wordsCount = typedText.split(/\s+/).length;

  wpm.textContent = ((wordsCount / parseInt(durationSelect.value)) * 60).toFixed(2);
  finalAccuracy.textContent = accuracy.textContent;

  testArea.classList.add('hidden');
  result.classList.remove('hidden');
}

startBtn.addEventListener('click', startTest);
retryBtn.addEventListener('click', () => {
  testArea.classList.add('hidden');
  result.classList.add('hidden');
});
