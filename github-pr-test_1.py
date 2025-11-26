"""
GitHub PR Test File - Python Security Vulnerabilities
This file contains intentional security issues for testing CodeSlick GitHub App
Expected: 15+ security vulnerabilities across multiple categories
"""

import os
import pickle
import yaml
import sqlite3
import subprocess
from flask import Flask, request, jsonify

app = Flask(__name__)

# ============================================================================
# SQL INJECTION (3 vulnerabilities)
# ============================================================================

# Vulnerability 1: SQL injection in user query
@app.route('/user')
def get_user():
    user_id = request.args.get('id')
    query = f"SELECT * FROM users WHERE id = {user_id}"
    cursor.execute(query)
    return jsonify(cursor.fetchall())

# Vulnerability 2: SQL injection in search
def search_users(search_term):
    sql = "SELECT * FROM users WHERE name LIKE '%" + search_term + "%'"
    cursor.execute(sql)
    return cursor.fetchall()

# Vulnerability 3: SQL injection with format
def get_user_by_email(email):
    query = "SELECT * FROM users WHERE email = '%s'" % email
    cursor.execute(query)
    return cursor.fetchone()

# ============================================================================
# COMMAND INJECTION (3 vulnerabilities)
# ============================================================================

# Vulnerability 4: Command injection in file processing
@app.route('/backup', methods=['POST'])
def create_backup():
    filename = request.json.get('filename')
    os.system(f'tar -czf backup.tar.gz {filename}')
    return jsonify({'status': 'success'})

# Vulnerability 5: Command injection with subprocess
def process_image(image_path):
    subprocess.call('convert ' + image_path + ' output.jpg', shell=True)

# Vulnerability 6: Command injection with Popen
def run_command(user_input):
    subprocess.Popen('ls ' + user_input, shell=True)

# ============================================================================
# HARDCODED CREDENTIALS (3 vulnerabilities)
# ============================================================================

# Vulnerability 7: Hardcoded database password
DATABASE_CONFIG = {
    'host': 'localhost',
    'user': 'admin',
    'password': 'SuperSecret123!',
    'database': 'production'
}

# Vulnerability 8: Hardcoded API key
API_KEY = 'sk-1234567890abcdef'

# Vulnerability 9: Hardcoded secret key
app.secret_key = 'my-super-secret-flask-key'
