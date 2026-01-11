
// File: test-sarif.js
// This file contains intentional vulnerabilities for SARIF testing

const password = "hardcoded_password_123"; // ← Secrets Detection

function processData(userInput) {
  eval(userInput); // ← Code Injection (CRITICAL)

  const html = `<div>${userInput}</div>`; // ← XSS vulnerability
  document.innerHTML = html;

  // AI-generated code hallucination
  const items = [];
  items.append('test'); // ← Wrong method (.push() not .append())
}

module.exports = { processData };
