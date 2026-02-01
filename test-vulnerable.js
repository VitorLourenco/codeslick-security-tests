 // SQL Injection Vulnerability - DO NOT USE IN PRODUCTION                                                                                                      
  const express = require('express');                                                                                                                            
  const mysql = require('mysql');                                                                                                                                
                                                                                                                                                                 
  const app = express();                                                                                                                                         
  const db = mysql.createConnection({                                                                                                                            
    host: 'localhost',                                                                                                                                           
    user: 'root',                                                                                                                                                
    password: 'password',                                                                                                                                        
    database: 'testdb'                                                                                                                                           
  });                                                                                                                                                            
                                                                                                                                                                 
  // VULNERABLE: Direct string concatenation in SQL query                                                                                                        
  app.get('/user', (req, res) => {                                                                                                                               
    const username = req.query.username;                                                                                                                         
    const password = req.query.password;                                                                                                                         
                                                                                                                                                                 
    // SQL Injection vulnerability here                                                                                                                          
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;                                                             
                                                                                                                                                                 
    db.query(query, (err, results) => {                                                                                                                          
      if (err) throw err;                                                                                                                                        
      res.json(results);                                                                                                                                         
    });                                                                                                                                                          
  });                                                                                                                                                            
                                                                                                                                                                 
  app.listen(3000); 
