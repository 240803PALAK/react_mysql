const express = require("express")
const mysql=require('mysql');
const cors = require("cors")

const app = express()
app.use(express.json());
app.use(cors())

const db=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"login-register"
})

app.post('/register', (req, res) => {
  const { name,email, password } = req.body;
  const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
  const values = [name, email, password]; 
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error(err); 
      return res.json({ message: 'Internal Server Error' }); 
    }
    return res.json({Status:"Success"});
  })
})

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const sql="SELECT * FROM users WHERE email=?";
  db.query(sql,[email],(err,data)=>{
    if(err)return res.json({Error:"Login error is server"});
    if(data.length>0){
      const storedPassword = data[0].password; 
      if (password === storedPassword) {
        return res.json({Status:"Success"});
      } else {
        return res.json({ message: 'Invalid email or password' }); 
      }
    }
  })
})
app.listen(3001, () => {
  console.log("Server is running")
})
