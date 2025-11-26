
import os
import pickle
import yaml
import sqlite3
import subprocess
from flask import Flask, request, jsonify

app = Flask(__name__)

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
