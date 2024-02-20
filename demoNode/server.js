const express = require('express');
const bodyParser = require('body-parser');
const mySql = require('mysql');
const server = express();
const cors = require('cors')

server.use(cors())

server.use(bodyParser.json());

const db = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbmsschool"
});

db.connect(function (error) {
    if (error) {
        console.log("error connecting to db");
    } else {
        console.log("connected successfully");
    }
});



server.post("/api/student/add", (req, res) => {
    console.log("data", req.body)
    var details = {
        stname: req.body.stname,
        course: req.body.course,
        fee: req.body.fee,
    };


    let sql = "INSERT INTO STUDENT SET ?";


    db.query(sql, details, (error) => {
        if (error) {
            res.send({ status: false, message: "student creation failed" });
        } else {
            res.send({ status: true, message: "student creation successfully" });
        }
    });
});
server.get('/api/student', (req, res) => {
    var sql = "select * from student";
    db.query(sql, function (error, result) {
        if (error) {
            console.log("error connecting to db");
        }
        else {
            res.send({ status: true, data: result });
        }
    });
});
server.get('/api/student/:id', (req, res) => {
    var studentid = req.params.id;
    var sql = "SELECT * FROM STUDENT WHERE  id =" + studentid;
    db.query(sql, function (error, result) {
        if (error) {
            console.log("error connecting to db");
        }
        else {
            res.send({ status: true, data: result });
        }
    });
});
server.put("/api/student/update/:id", (req, res) => {
    let sql = "UPDATE student SET stname='" + req.body.stname + "', course='" + req.body.course + "', fee=" + req.body.fee + " WHERE id=" + req.params.id;
    let query = db.query(sql, (error, result) => {
        if (error) {
            res.send({ status: false, message: "student updation failed" });
        } else {
            res.send({ status: true, message: "student updated successfully" });
        }
    });
});
server.delete("/api/student/delete/:id",(req,res)=>{
    let sql ="delete from student where id="+req.params.id;
    let query=db.query(sql,(error)=>{
        if (error) {
            res.send({ status: false, message: "student deletion failed" });
        } else {
            res.send({ status: true, message: "student deleted successfully" });
        }
    })
})


server.listen(8085, function check(error) {
    if (error) {
        console.log("Error")
    } else {
        console.log("started");
    }
});