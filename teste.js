// Node.js/Express Comprehensive Security Test Suite
// Phase 6 Week 1 Day 2: Node.js/Express Framework Security
// Tests 5 Node.js-specific security checks (all CRITICAL/HIGH/MEDIUM)
// Created: 2025-11-19

const express = require('express');
const { exec, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();

// ============================================================================
// CHECK #1: Missing helmet() middleware - MEDIUM
// Risk: Missing security headers (CSP, HSTS, X-Frame-Options, etc.)
// ============================================================================

// VULNERABLE: Express app without helmet()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/users', (req, res) => {
  // SECURITY: No helmet() middleware configured
  // Missing: Content-Security-Policy, Strict-Transport-Security, X-Frame-Options
  res.json({ users: getUserList() });
});

// SECURE EXAMPLE (commented):
// const helmet = require('helmet');
// app.use(helmet());  // Adds all security headers

// ============================================================================
// CHECK #2: Code Injection via require() - CRITICAL
// Risk: Arbitrary code execution via malicious module loading
// ============================================================================

// VULNERABLE: Dynamic require() with user input
app.get('/load-plugin', (req, res) => {
  const pluginName = req.query.plugin;

  // SECURITY: User input directly in require() - arbitrary code execution
  const plugin = require(pluginName);

  res.json({ loaded: plugin.name });
});

// VULNERABLE: Constructed module path with user input
function loadUserModule(userId, moduleName) {
  // SECURITY: User-controlled module loading
  const userPlugin = require('./plugins/users/' + userId + '/' + moduleName);
  return userPlugin.execute();
}
