// GitHub PR Test File - JavaScript Security Vulnerabilities
// This file contains intentional security issues for testing CodeSlick GitHub App
// Expected: 15+ security vulnerabilities across multiple categories

const express = require('express');
const mysql = require('mysql');
const app = express();

// ============================================================================
// SQL INJECTION (3 vulnerabilities)
// ============================================================================

// Vulnerability 1: SQL injection in user query
app.get('/user', (req, res) => {
  const userId = req.query.id;
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  db.query(query, (err, results) => {
    res.json(results);
  });
});

// Vulnerability 2: SQL injection in search
function searchUsers(searchTerm) {
  const sql = "SELECT * FROM users WHERE name LIKE '%" + searchTerm + "%'";
  return db.query(sql);
}

// Vulnerability 3: SQL injection with template literal
async function getUserData(userId) {
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  return await db.query(query);
}

// ============================================================================
// XSS (Cross-Site Scripting) - 3 vulnerabilities
// ============================================================================

// Vulnerability 4: innerHTML with user input
function displayComment(comment) {
  document.getElementById('comments').innerHTML = comment;
}

// Vulnerability 5: eval() with user input
app.post('/calculate', (req, res) => {
  const expression = req.body.expression;
  const result = eval(expression);
  res.json({ result });
});

// Vulnerability 6: Unsafe href attribute
function ExternalLink({ url }) {
  return `<a href="${url}">Click here</a>`;
}

// ============================================================================
// HARDCODED CREDENTIALS (3 vulnerabilities)
// ============================================================================

// Vulnerability 7: Hardcoded database password
const dbConfig = {
  host: 'localhost',
  user: 'admin',
  password: 'SuperSecret123!',
  database: 'production'
};

// Vulnerability 8: Hardcoded API key
const API_KEY = 'sk-1234567890abcdef';

// Vulnerability 9: Hardcoded JWT secret
const jwtSecret = 'my-super-secret-jwt-key';

// ============================================================================
// COMMAND INJECTION (2 vulnerabilities)
// ============================================================================

// Vulnerability 10: Command injection in file processing
const { exec } = require('child_process');

app.post('/backup', (req, res) => {
  const filename = req.body.filename;
  exec(`tar -czf backup.tar.gz ${filename}`, (error, stdout) => {
    res.send('Backup created');
  });
});

// Vulnerability 11: Command injection in image processing
function processImage(imagePath) {
  exec('convert ' + imagePath + ' output.jpg');
}

// ============================================================================
// PROTOTYPE POLLUTION (2 vulnerabilities)
// ============================================================================

// Vulnerability 12: Object.assign with user input
app.post('/settings', (req, res) => {
  const settings = {};
  Object.assign(settings, req.body);
  res.json(settings);
});

// Vulnerability 13: Bracket notation assignment
function updateConfig(params) {
  const config = {};
  Object.keys(params).forEach(key => {
    config[key] = params[key];
  });
  return config;
}

// ============================================================================
// INSECURE RANDOMNESS (1 vulnerability)
// ============================================================================

// Vulnerability 14: Math.random() for security token
function generatePasswordResetToken() {
  return Math.random().toString(36).substring(2);
}

// ============================================================================
// MISSING REACT KEYS (1 vulnerability)
// ============================================================================

// Vulnerability 15: Missing key prop in React list
function UserList({ users }) {
  return users.map(user => <div>{user.name}</div>);
}

// ============================================================================
// EXPECTED RESULTS
// ============================================================================
// CodeSlick should detect 15 vulnerabilities:
// - 3 SQL injection
// - 3 XSS
// - 3 Hardcoded credentials
// - 2 Command injection
// - 2 Prototype pollution
// - 1 Insecure randomness
// - 1 Missing React key
