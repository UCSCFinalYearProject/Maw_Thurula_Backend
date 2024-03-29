// require express library
const express = require('express');
const bodyParser = require('body-parser');

// require route

const student_route = require('./route/student_route'); // this for student route
const admin_route = require('./route/Admin/admin_routs'); // this for admin route
const student_todos_route = require('./route/student_todos');
const al_route = require('./route/Astrologer/al_routs');
const np_route = require('./route/Name-Provider/np_routs');
const mother_register_route = require('./route/Mother/mother_route');
const pt_route = require('./route/Pediatrician/pt_routs');


//Y
const mobile_mother_route = require('./route/Mobile-Mother/mobile_mother_routs');


// require JWT auth Service
const auth = require('./service/auth_service');

// require error handler
const errorHandler = require('./utils/errorHandler');

// create instance of an express, then assign to app variable
const app = express();
app.use(express.static("./public"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// require cors package
const cors = require('cors');
const register_route = require("./route/register_route");


// use cors middleware to enable CORS with various options
app.use(cors({ origin: "*"}))

//use express.json() middleware to parses incoming requests with JSON payloads
//and is based on body-parser
app.use(express.json());

// if request come from "localhost:3000/student", then it gose to student_route
app.use("/login" , register_route);


// if request come from "localhost:3000/admin", then it goes to admin_route
app.use("/admin" , admin_route);

// if request come from "localhost:3000/todos", then it goes to student_todos_route
app.use("/todos" , auth,  student_todos_route);

// if request come from "localhost:3000/Astrologer", then it goes to astrologer_route
app.use("/al" ,  al_route);

// if request come from "localhost:3000/np/new_request", then it goes to name_provider_route
app.use("/np" ,  np_route);

// if request come from "localhost:3000/pt", then it goes to pediatrician_route
app.use("/pt" ,  pt_route);

// Y if request come from "localhost:3000/Mobile-Mother", then it goes to mobile_mother_route
app.use("/mobile_mother" ,  mobile_mother_route);

app.use("/reg",register_route)

// if request come from "localhost:3000/pt", then it goes to pediatrician_route
app.use("/mother" ,  mother_register_route);
// app.use("/mother" ,  mother_register_route);


// use errorhandler middleware to handle errors
app.use( errorHandler )

// this is the prot that server is running on
const PORT = 3000;

// finally start the server on 3000 prot
app.listen(PORT, () => {
    console.log(` server is running on port ${PORT} ...`);
})
