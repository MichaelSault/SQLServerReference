const { response } = require('express');
const express = require('express'),
    Employee = require('./dbFiles/employee'),
    dbOperation = require('./dbFiles/dbOperation'),
    cors = require('cors');

const API_PORT = process.env.PORT || 5000; 
const app = express(); //starts the server

//define variables for mongoDB
let client;
let session;
app.use(express.json());
app.use(express.urlencoded());

app.use(cors()); 

app.post('/api', async(req,res) => { 
    console.log('Called');
    const result = await dbOperation.getEmployees(req.body.name);
    res.send(result.recordset[0]) //sending objects are easier on the front end
}) 

app.post('/quit', function(req,res) { 
    console.log('Called it quits');
    res.send({result:'Au Revoir'})
})

let Rebecca = new Employee(1002, 'Rebecca', 'Welton', 45, 'Female');

// dbOperation.createEmployee(Rebecca);



app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));