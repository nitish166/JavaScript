// const arr = [5, 1, 3, 2, 6];

// const { rejects } = require("assert");
// const { resolve } = require("path");

//const { resolve } = require("path");

//const { create } = require("domain");

// function findMax(arr){
//     let max = 0;
//     for(let i = 0; i<arr.length; i++){
//         if(arr[i]>max){
//             max = arr[i];
//         }
//     }
//     return max;
// }
//console.log(findMax(arr));

// const output = arr.reduce(function(acc, curr){
//     acc = acc + curr;
//     return acc;
// }, 0);

//console.log(output);

// const users = [
//     {firstName: "akshay", lastName: "saini", age: 26},
//     {firstName: "Nitish", lastName: "Kumar", age: 26},
//     {firstName: "Sunil", lastName: "Bhakar", age: 75},
// ];

// filter example
// const res = users.filter((x) => x.age<30).map((x) => x.firstName);
//console.log(res);

// const output1 = users.map((x) => x.firstName + " " + x.lastName);
//console.log(output1);

// const ans = users.reduce(function(acc, curr){

//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age];
//     }else{
//         acc[curr.age] = 1;
//     }
//     return acc;
// }, {});

//console.log(ans);

// callback

//1. call back hell
//2. inversion of control

// console.log("Namste");

// setTimeout(function (){
//     console.log("JavaScript");
// }, 5000)

// console.log("Season 2");

// const cart = ["shoes", "pant", "kurta"];

// example of callback hell

// api.createOrder(cart, function(){

//     api.proceedToPayment(function(){

//         api.showOrderSummary(function(){

//             api.updateWallet()

//         })
//     })
// })

// example of inversion of control

// api.createOrder(cart, function(){

//     api.proceedToPayment()
// })

// Promise

// use in async in javascript

// before promise
// after promise

// const cart1 = ["shoes", "pants", "kurta"];

// both api are asy and depended on each other
// call back function
// inversion and control and call hell issue

// 1. passed the callback function

// createOrder(cart1, function(orderId){
//     proceedToPayment(orderId);
// });

// 2. attached the callback function

// {data: undefined}  after sometime {data: orderDetails}
// promises gives us trust

// const promise = createOrder(cart);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// fetch() -- to use call api from the external world

// promise state - 3 : success, failure, fulfilled
// const fetch = require('node-fetch');

// const GITHUB_API = 'https://api.github.com/users'

// const user = fetch(GITHUB_API);
// console.log(user);

// user.then(function(data){
//     console.log(data);
// })

// What is promise in javascript

// Ans: promise is a place holder until we receive a set of value from asyc operation

// or, A container for the future value

// or, A promise is an object representing the eventual completion or failure of an asy operation

// promises gives us trust

// Note: inversion of control was major issue which is resolved by promise

// Note: Call back hell issue: code grow horizantally; also known as priyamid of doom

// const cart1 = ["shoes", "pants", "kurta"];

// createOrder(cart1, function(orderId){
//     proceedToPayment(orderId);
// });

// const promise = createOrder(cart1);

// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// So, how to handle call back hell issue - using promise chaning

// below both 1 and 2 are same

// 1.

// const promise = createOrder(cart1);
// promise.then(function(orderId){
//     proceedToPayment(orderId);
// });

// 2.

// createOrder(cart1).then(function(orderId){
//     proceedToPayment(orderId);
// });

// promise chain
// now code become lean
// always return the data when we are doing promise chain

// createOrder(cart1)
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })

// above code transfer to arrow function

// createOrder(cart1)
// .then((orderId) => proceedToPayment(orderId))
// .then((paymentInfo) => showOrderSummary(paymentInfo));

// 1. What is promse?
// 2. Why promses is important?

// E3. Create a Promse, Error Handling, Promse Chaning

// consumer

// const cart2 = ["shoes", "pant", "tshirt"];

//if there is big chain and if there are any issue in the big chain then catch will handle any issue in the chain

// this chaining will help you get rid of call back hell

// createOrder(cart2)
// .then(function(orderId){
//     console.log(orderId);
//     return orderId;
// })
// .catch(function(err){
//     console.log("Error", err.message);
// })
// .then(function(orderId){
//     return proceedToPayment(orderId);
// })
// .then(function(paymentInfo){
//     console.log(paymentInfo);
// })
// .catch(function(err){
//     console.log("Error", err.message);
// });
// .then(function(orderId){
//     console.log("No matter what happen, I will defetenly be called");
// })
// .catch(function(err){
//     console.log("Error", err.message);
// })

//Producer

// function createOrder(cart2){

//     const pr = new Promise(function(resolve, reject){

//         //createOrder
//         //ValidateCart
//         //orderId
//         if(!validateCart(cart2)){
//             const err = new Error("Cart is not valid");
//             reject(err);
//         }

//         // logic for create order
//         const orderId = 12345;
//         if(orderId){
//             resolve(orderId);
//         }
//     });

//     return pr;
// }

// function proceedToPayment(orderId){
//     return new Promise(function(resolve, reject){
//         resolve("Payment successful");
//     });
// }

// function validateCart(cart2){
//     return true;
// }

//E4: Promise APIs + InterView Questions

//1. Promise.all([p1, p2, p3])  ==> after 3 sec ->[val1, val2, val3] -> wait for all of them to finish
// (success case for all three promise)

// what if any of them get failed -> Promise.all([p1, p2, p3]) -> time -> [3sec, 1sec, 2sec] -> if
// p2 get rejected then Promse.all() will throw an error(this will be the same error whcih is rejected by p2).
// immediately as soon as error happen it will reject an error. (1sec). also, it did not wait all of them

// it will not wait for other promises

// 2. Promise.allSettled([p1, p2, p3]) and time take [3s, 1s, 2s] and value is [val1, val2, val3]

// 3. Promise.any();
// 4. Promise.race();

// const p1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         //resolve("P1 Success");
//         reject("P1 fail");
//     }, 10000)
// })

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve("P2 Success");
//         //reject("P2 Fail");
//     }, 3000)
// })

// const p3 = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         //resolve("P3 Success")
//         reject("P3 fail")
//     }, 4000)
// })

// Promise.all([p1, p2, p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err);
// })

// Promise.allSettled([p1, p2, p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err);
// })

// Promise.any([p1, p2, p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err);
// })

// Promise.race([p1, p2, p3]).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.error(err);
// })

// Ep: 04 - Asyc and Await

// What is async?
// What is await?
// How async await work behind the scenes?
// Example of using async and await?
// Error Handling?
// Interview
// Async await vs Promise.then/.catch

// This async function always return promise

// async function getData() {
//     return "Hello";
// }

// const dataPromise = getData();
//console.log(dataPromise);

// get the data from promise

// dataPromise.then((res) => console.log(res));

// const pr = new Promise(function(resolve, reject){
//     resolve("Promise Resolved Value");
// })

// async function getData1(){
//     return pr;
// }

// const data1Promise = getData1();

// data1Promise.then((res) => console.log(res));

// before async and await - handle promise

// const p = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Promise resolve Value");
//     }, 5000)
// });

// const p2 = new Promise((resolve, reject) =>{
//     setTimeout(() =>{
//         resolve("Promise resolve Value");
//     }, 10000)
// });

// function getData(){
//     // JS Engine will not wait for promise to be resolved
//     p.then((res) => console.log(res));
//     console.log("Namaste JavaScritp");
// }

// getData();

// using await with async function

// async and await combo are used to handle promise

// async function handlePromise(){
//     console.log("Hello World");
//     // JS Engine was waiting for promise to resolved
//     const val = await p;
//     console.log("Namaste JavaScript");
//     console.log(val);

//     const val2 = await p2;
//     console.log("Namaste JavaScript");
//     console.log(val2);

// }

// handlePromise();

// await - await is the keyward that is only use inside an async function

//await function () {}  - this will give the syntax error

// why async and await is special?
// Deep divine in async and await

//Real world of async/await example

// const api_url = "https://api.github.com/users/nitish166789";

// async function handlePromise() {
//   try {
//     // fetch give you promise
//     const data = await fetch(api_url);

//     // this is again a promise
//     const jsonValue = await data.json();
//     console.log(jsonValue);
//   } catch (err) {
//     console.log(err);
//   }



  // fetch() => Response.json() => jsonValue

  //fetch().then(res => res.json()).then(res => console.log());
// }

// handlePromise();

//handlePromise().catch((err) => console.log(err));

// Error Handling

// wrap inside in try and catch blog


// Interview Tips

// Async await vs Promise.then/.catch



// setTimeout + clouser interview question

// function x(){
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
// }

// x();



// function x(){
//     for(var i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);
//     }
//     console.log("Hello");
// }

// x();


// function x(){
//     for(let i=1; i<=5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);
//     }
//     console.log("Hello");
// }

// x();


// function x(){
   
//     for(var i=1; i<=5; i++){
//         function close(x){
//             setTimeout(function(){
//                 console.log(i);
//             }, x*1000);
//         }
//         close(i);
//     }
//     console.log("Hello");
// }

// x();



// E8: This Keyword  - It behave in all other sisutation


// 1. This - in global space
// 2. This - inside a function
// 3. This - in strict mode
// 4. This - value depend on this is called (window)
// 5. This - inside a global object method
// 6. Call apply bind methods (sharing method)
// 7. This - inside arrow function
// 8. This - inside nested arrow function
// 9. This - inside dom

// "use strict";

// 1. This in global space

//console.log(this) // global Object  === window (inside browser)  but in nodejs, it is global


// This inside a function

// function x(){
//     // The value depend on strict / non strict mode
//     console.log(this);  // output is - window (but it is diffrent than global space) - This is non strict mode

//     // console.log(this); - output is - undefine (in strict mode)
// }

// x();

// Note:- This keyword works diffrently in "Strict" mode and "Non Strict Mode".

// By default it is non strict mode


// 3. This - inside non strict mode - (this substitutaion)

// if the value of this keyword is undefine or null
// this keyword will be replaced with globalObject
// only in non strict mode

// 4. This - value depend on how the function is called (window)

// x();  // undefine

// window.x();  // window


// 5. This - inside a global object method

// const obj = {
//     a: 10,
//     x: function(){
//         console.log(this); // {a:10, x:f}
//         console.log(this.a); // 10 ==> obj.a
//     }
// }

// obj.x();


// 6. Call apply bind methods (sharing method)

// const student = {
//     name: "Akshay",
//     printName: function (){
//         console.log(this.name);
//     },
// };

// student.printName();

// const student2 = {
//     name: "Deepika",
// };

// student.printName.call(student2); // value of this = student2


// 7. This - inside arrow function

// const obj = {
//     a: 10,
//     x: () =>{
//         console.log(this);
//     },
// }

// obj.x();


// 8. This - inside nested arrow function

// const obj2 = {
//     a: 20,
//     x: function(){
//         // enclosing lexical context
//         const y = () =>{
//             console.log(this);
//         };
//         y();
//     },
// };

// obj2.x();


// 9. This - inside dom

// this inside dom elements => reference to html elements 

// 10. this inside class, constructor 

// notes



