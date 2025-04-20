// LIBRARIES NEEDED
const express = require('express');
const app = express();
const mysql = require('mysql2');
const mongoose = require('mongoose');

// SQL CONNECTION
// 连接到 MySQL 数据库
const connection = mysql.createConnection({
  host: 'localhost',
  database: 'company_db',
  user: 'root',
  password: 'xxx' // #since i want to protect my password, i am not showing it here; 
  // but you can check the two screenshots(MySQL.png and MongoDB.jpg) in the repo to see the successful connection
});

// MySQL Connection Verification
function verifyMySQLConnection() {
    connection.connect(function(err) {
        if (err) {
            console.error('Error connecting to MySQL: ' + err.stack);
            return;
        }
        console.log('MySQL connected as id ' + connection.threadId);
    });
}

// MONGOOSE CONNECTION
// 连接到 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/companyDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).catch(err => console.error('Could not connect to MongoDB:', err));

// Mongoose Schema and Model
const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  budget: { type: Number, required: true }
});

const ProjectModel = mongoose.model('Project', ProjectSchema, 'projects');

// MongoDB Connection Verification 
mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// ENDPOINTS
// Endpoint to get all projects from MongoDB when you enter: http://localhost:3000/projects
app.get('/projects', async (req, res) => {
    try {
        const projects = await ProjectModel.find({});
        res.json(projects);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

// Endpoint to get all employees from MySQL when you enter: http://localhost:3000/employees
app.get('/employees', function (req, res) {
    connection.query('SELECT * FROM employees', function (error, results, fields) {
        if (error) throw error;
        res.json(results);
    });
});

// RUNNING THE SERVER
app.listen(3000, function () {
    console.log('Server is running on port 3000!');
    verifyMySQLConnection();
});
