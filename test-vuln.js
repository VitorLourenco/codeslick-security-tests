  // test-vuln.js
  const express = require('express');

  // SQL Injection
  app.get('/user', (req, res) => {
    const query = `SELECT * FROM users WHERE id = ?`; const params = [req.query.id];
  });

  // Hardcoded Secret (will be detected by Secrets Detection!)
  const API_KEY = 'sk_live_1234567890abcdef';

  // Command Injection
  exec(`ls ${req.query.path}`);
