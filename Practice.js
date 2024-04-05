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

// const express = require('express');
// const cors = require('cors');
// const app = express();


// app.use(cors());

// app.get('api/data', (req, res) =>{
//   res.json({message: 'Data from server'});
// });


// app.listen(3000, () =>{
//   console.log('Server is running on http://localhost:3000');
// });


//How can you handle environment variables in Node.js?

// A: Environment variables in Node.js can be accessed using the process.env object

// console.log(process.env.NODE_ENV);


// What is the purpose of the "fs" module in Node.js?

// A: The "fs" module in Node.js provides file system-related functionality. For example, reading a file:

// const fs = require('fs');

// fs.readFile('example.txt', 'utf8', (req, res)=>{
//   if(err){
//     throw err;
//   }
//   console.log(data);
// })


// How can you perform unit testing in Node.js?

// A:  Unit testing in Node.js can be performed using testing frameworks like Mocha and assertion libraries like Chai.
// For example, writing a simple test case using Mocha and Chai:

// const assert =  require('chai').assert;
// const add = require('./add');

// describe('add', ()=>{
//   it('should return the sum of two number', ()=>{
//     assert.equal(add(2, 3), 5);
//   });
// });

//How can you perform database operations in Node.js?

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'username',
//     password: 'password',
//     database: 'database_name'
// })

// connection.connect((err)=>{
//   if(err){
//     console.error('Error connecting to mysql database', err.stack);
//     return;
//   }
//   console.log('Connected to mysql database as ID', connection.threadId);
// })

// connection.query('select * from employee', (err, rows) =>{
//   if(err){
//     console.error('Error executing query:', err);
//     return;
//   }

//   console.log('Data reterived from MYSQL');
//   console.log(rows);
// })

// close the connection when done

// connection.end((err) =>{
//   if(err){
//     console.error('Error closing MYSQL connection: ', err.stack);
//     return;
//   }
//   console.log('Connection to mysql database closed successfully');
// });


// What is the purpose of the "os" module in Node.js?

// A: The "os" module in Node.js provides operating system-related functionality. 
//For example, getting information about the current user:



// How can you handle authentication in Node.js?

// A: Authentication in Node.js can be implemented using middleware like Passport.js. 
//For example, implementing local authentication with Passport.js:

// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;

// passport.use(new LocalStrategy(
//   (username, password, done) => {
     // Validate username and password
//     if (username === 'admin' && password === 'password') {
//       return done(null, { id: 1, username: 'admin' });
//     } else {
//       return done(null, false);
//     }
//   }
// ));

// Authenticate user
// app.post('/login', passport.authenticate('local'), (req, res) => {
//   res.send('Logged in successfully');
// });


// What is the purpose of the "http" module in Node.js?

// A : The "http" module in Node.js provides functionality for creating HTTP servers and making HTTP requests.
// For example, creating an HTTP server:

// const http = require('http');

// const server = http.createServer((req, res) =>{
//   res.writeHead(200, {'Content-type': 'text/plain'});
//   res.end('Hello, world');
// });

// server.listen(3000, ()=> {
//   console.log('Server is running on http://localhost:3000');
// });



// Rest Client - Rest client allow you to send http request and view the response in visual studio code directly


// const express = require('express');
// const app = express();

// app.use(express.json());

// const users = [{name: 'nitish'}];

// app.get('/users', (req, res)=>{
//   res.json(users);
// });


// app.post('/users', (req, res) => {
//   const user = {name: req.body.name, password: req.body.password};
//   users.push(user);
//   res.status(201).send();
// })

// app.listen(3000, ()=>{
//   console.log('Server is running on http://localhost:3000');
// });

// app.listen(3000);

// How can you interact with the file system in Node.js?

// A: Interacting with the file system in Node.js can be done using the "fs" module. For example, creating a new file:

// const fs = require('fs');

// fs.writeFile('example.txt', 'Hello, world', 'utf8', (err)=>{
//   if(err) throw err;
//   console.log('File created successfully');
// });



// What is the purpose of the "assert" module in Node.js?

// A: The "assert" module in Node.js provides a way to write tests in Node.js.

// const assert = require('assert');
// assert.equal(1+1, 2);


// How can you handle file uploads in Node.js?

// A: File uploads in Node.js can be handled using middleware like multer. For example, handling file uploads using multer:

// const express = require('express');
// const multer = require('multer');
// const upload = multer({dest: 'uploads/'});
// const app = express();

// app.post('/upload', upload.single('file'), (req, res) =>{
//   console.log(req.file);
//   res.send('File upload Successfully');
// });


// app.listen(3000, () =>{
//   console.log('Server is running on http://localhost:3000')
// })


// How can you handle cookies in Node.js?

// A:  Cookies in Node.js can be handled using middleware like cookie-parser. For example, using cookie-parser middleware in an Express.js application:

// const express = require('express');
// const cookieParser = require('cookie-parser');

// const app = express();

// app.use(cookieParser);
// app.get('/', (req, res)=>{
//   res.cookie('name', 'value').send('Cookie set');
// });

// app.listen(3000, ()=>{
//   console.log('Server is running on http://localhost:3000');
// });


// How can you handle file downloads in Node.js?

// A: File downloads in Node.js can be handled by sending a file as a response to an HTTP request.

// const express = require('express');
// const app = express();

// app.get('/download', (req, res)=>{
//   const filePath =  'path/to/file';
//   res.download(filePath);
// });

// app.listen(3000, ()=>{
//   console.log('Server is running on http://localhost:3000');
// });



// Problem solving in node js aka javascript for handson practice. 

/** 
1. Reverse a string in Node.js.
2. Implement a function to check if a given string is a palindrome.
3. Find the maximum number in an array using Node.js.
4. Implement a function to find the factorial of a number recursively.
5. Write a program to check if a number is prime or not.
6. Create a function to find the nth Fibonacci number.
7. Implement a function to sort an array of integers in ascending order.
8  Write a program to calculate the sum of digits of a given number.
9. Create a function to remove duplicate elements from an array.
10. Implement a stack data structure using arrays in Node.js.
11. Write a program to reverse a linked list.
12. Implement a queue data structure using linked lists in Node.js.
13. Create a function to merge two sorted arrays into a single sorted array.
14. Write a program to find the intersection of two arrays.
15  Implement a binary search algorithm in Node.js.
16. Write a function to generate all permutations of a given string.
17. Implement a function to validate an email address using regular expressions.
18. Create a program to fetch data from a remote API using HTTP requests in Node.js.
19. Write a function to read a file asynchronously in Node.js.
20. Implement a basic CRUD (Create, Read, Update, Delete) API using Express.js and MongoDB.
21. Write a program to handle file uploads in Node.js.
22. Create a function to generate a random password of a specified length.
23. Implement a function to validate a credit card number using Luhn's algorithm.
24. Write a program to find the longest word in a sentence.
25. Create a function to check if two strings are anagrams of each other.
26. Implement a function to reverse words in a sentence.
27. Write a program to find the first non-repeating character in a string.
28. Create a function to calculate the area of a circle given its radius.
29. Implement a function to convert a given string to title case.
30. Write a program to find the largest contiguous sum in an array.
31. Create a function to flatten a nested array.
32. Implement a function to find the missing number in an array of integers.
33. Write a program to remove all white spaces from a string.
34. Create a function to generate a random array of integers within a specified range.
35. Implement a function to rotate an array to the left by a given number of positions.
36. Write a program to calculate the frequency of characters in a string.
37. Create a function to check if a given year is a leap year.
38. Implement a function to convert a decimal number to binary.
39. Write a program to find the second largest number in an array.
40. Create a function to calculate the factorial of a number iteratively.
41. Implement a function to reverse the order of words in a sentence.
42. Write a program to find the sum of all elements in an array recursively.
43. Create a function to calculate the power of a number using recursion.
44. Implement a function to remove all occurrences of a specified value from an array.
45. Write a program to find the maximum depth of a nested array.
46. Create a function to convert a given string to lowercase.
47. Implement a function to remove all vowels from a string.
48. Write a program to find the GCD (Greatest Common Divisor) of two numbers.
49. Create a function to check if a given string contains only digits.
50. Implement a function to generate all subsets of a given set.

*/

//1. Reverse a string in Node.js.

// function reverseString(str){
  
//   let ans ="";
//   for(let i = str.length-1; i>=0; i--){
//     ans +=str[i];
//   }
 
//   return ans;
// }

// let str = "hello";
// console.log(reverseString(str));


//2. Implement a function to check if a given string is a palindrome.

function checkPallidrome(str){
  let rever = str.split('').reverse().join('');
  if(rever==str){
    return 1;
  }
  return 0;
}

let bool = checkPallidrome("abab");
if(bool==1){
  console.log("Given string is a Pallidrome");
}else{
  console.log("Given string is not a Pallidrome");
}

