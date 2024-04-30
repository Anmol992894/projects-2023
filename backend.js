// Installing Modules
const express=require('express')
const cors=require('cors')
var app=express()
app.use(express.json());
const mysql=require('mysql2');

app.use(cors())

// Creating Mysql Connection
const conn=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"mummypapa9719",
    database:"bank"
})
// Connecting to the MySQL Database
conn.connect(function(err){
    if (err){
        throw err;
    }
    console.log("Connected Yes");
})
// Running query to clear all the data from the database
conn.query(`TRUNCATE TABLE todo`,function(err){
    if (err){
        console.log(err);
    }
    console.log("Cleared");
})

// Get Request to print all the database from the database
app.get('/task', async(req,res)=>{
    conn.query(`select * from todo`,(err,data)=>{
        if(err){
            return res.send(err);
        }
        res.send(data);
    })
    res.send(await storage.values())
})

// Adding data to the database using POST request
app.post('/task',(req, res)=>{
    const {task_id, task_name}=req.body;
    conn.query(`INSERT INTO todo VALUES ("${task_id}","${task_name}")`,function(err){
        if (err){
            console.log(err);
        }
        else{
            console.log("added Successfully!");
        }
    });
    res.send('Successfully Added task!')
})

// Deleting data from the Database using DELETE
app.delete('/cut',async(req,res)=>{
    console.log(req.body);
    let task=req.body.t;
    console.log(task);
    // console.log(item);
    conn.query(`DELETE FROM todo WHERE Task="${task}"`,function(err){
        if (err){
            console.log(err);
        }
        console.log("Deleted");
    })
})

// Runnig backend using the below code
app.listen(5000, ()=>{
    console.log('Server Started');
})