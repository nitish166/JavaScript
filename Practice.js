// const express = require('express');
// const app = express();

// middleware

// app.use(function(req, res, next){
//     next();
// })

// ejs template

// app.set("view engine", "ejs");
// app.use(express.static('./public'));

// app.get('/endgame', function(req, res){
//     res.render("end");
// })

// app.get('/',function(req, res){
//     res.render("index", {age: 12});
// })

// app.use(function errorHandler (err, req, res, next) {
//     if (res.headersSent) {
//       return next(err)
//     }
//     res.status(500)
//     res.render('error', { error: err })
//   })

// app.get('/profile', function(req, res){
//     res.send('Hello from profile');
// })

// app.get('/profile/:username', function(req, res){
//     res.send(`Hello from ${req.params.username}`);
// })

// app.listen(3000);

// console.log("hello");

// const { rejects } = require("assert");
// How can you create a simple HTTP server in Node.js?

// const http = require('http');
// const server = http.createServer((req, res) =>{
//   res.writeHead(200, {'Content-Type': 'text/plan'});
//   res.end('Hello, world');
// });

// server.listen(3000, ()=>{
//   console.log('Server is running on http://localhost:3000')
// })

// const express = require('express');
// const app = express();

// app.get('/', function(req, res){
//   req.send('Hello world')
// })

//Explain middleware in Express.js.

// const express = require('express');
// const app = express();

// app.use((req, res, next) =>{
//   console.log("Request URL", req.url);
//   next();
// })

// app.get('/', (req, res) =>{
//   res.send('Hello, world!');
// });

// app.listen(3000, ()=>{
//   console.log('Server is running on http://localhost:3000');
// });

// How do you handle routing in Express.js?

// const express = require('express');
// const app = express();

// Handling get request
// app.get('/', (req, res) =>{
//   res.send('Get request received');
// })

// Handling post request
// app.post('/', (req, res)=>{
//   req.send('Post request received');
// })

// app.listen(300, ()=>{
//   console.log('Server is running on http://localhost:3000');
// })

//  transfer data from one stream to another efficiently in node js

// const fs = require('fs');
// const readableStream = fs.createReadStream('example.txt');

// readableStream.on('data', chunk => {
//   console.log(chunk);
// });

// readableStream.on('end', ()=>{
//   console.log('End of file reached');
// });

// readableStream.on('error', err=> {
//   console.error(err)
// })

// How do you handle errors in Node.js?

// createdOrder()
// .then(data =>{
//   console.log(data);
// })
// .catch(err =>{
//   console.error(err);
// })

//What is asynchronous programming in Node.js?


// const fs = require("fs");

// function readFile(filePath) {
//   return new Promise((resolve, rejects) => {
//     fs.readFile(filePath, "utf8", (err, data) => {
//       if (err) rejects(err);
//       else resolve(data);
//     });
//   });
// }

// Promise.all([
//   readFile("file1.txt"),
//   readFile("file2.txt"),
//   readFile("file3.txt"),
// ])
//   .then((data) => {
//     console.log("Content of file1 :", data[0]);
//     console.log("Content of file2 :", data[1]);
//     console.log("Content of file3 :", data[2]);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// What is the purpose of the package.json "scripts" field?

//  The "scripts" field in package.json is used to define custom scripts that can be executed using npm. 
//  For example, defining a script to start the server:

// "scripts": {
//   "start": "node index.js"
// }


// How do you debug Node.js applications?

//node --inspect index.js

// What is the purpose of the "buffer" module in Node.js?

// The "buffer" module in Node.js provides a way to work with binary data directly

// const buffer = Buffer.from('Hello');
// console.log(buffer);

// How can you handle file uploads in Node.js?

// File uploads in Node.js can be handled using middleware like multer


// const express = require('express');
// const multer = require('multer');
// const upload =  multer({dest: 'uploads/'})
// const app = express();

// app.post('/upload', upload.single('file'), (req, res) => {
//   console.log(req.file);
//   res.send('File uploaded successfully');
// });


// app.listen(3000, () =>{
//   console.log('Server is running on http://localhost:3000');
// })



// How can you handle CORS in Node.js?

// Example: CORS (Cross-Origin Resource Sharing) can be handled using middleware 
// like cors. For example, enabling CORS in an Express.js application:

const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

app.get('api/data', (req, res) =>{
  res.json({message: 'Data from server'});
});


app.listen(3000, () =>{
  console.log('Server is running on http://localhost:3000');
});





