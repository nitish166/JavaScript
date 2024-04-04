// Interview - 1  (Node js Backend Role)

// 1. Introduce yourself?
// 2. What is input/output blocking? Can you explain with example. Also, how node js help to overcome input output blocking. Give me an example
// 3. As a Node.js backend developer, you may need to transfer data from one stream to another efficiently. How would you accomplish this task, and can you provide an example?
// 4. Given an input string containing space-separated numbers: "103 4444 99 123 2000 100 10", how can you rearrange the numbers to achieve the following output: "100 10 2000 103 123 444 99" using JavaScript?
// 5. What is services in angular?


// 2. What is input/output blocking? Can you explain with example. Also, how node js help to overcome input output blocking. Give me an example

// Ans

/** 
Input/output (I/O) blocking occurs when a program waits for an I/O operation to complete before moving on to the next task. This can happen in traditional synchronous programming models, where the program execution halts until the I/O operation finishes. As a result, the program may become unresponsive, especially when dealing with multiple I/O operations concurrently.

Here's an example of I/O blocking in JavaScript:


// Synchronous file reading example
const fs = require('fs');

// Reading a file synchronously
const data = fs.readFileSync('example.txt', 'utf8');
console.log(data);
console.log("File read operation completed.");

In this example, the program will wait until the file reading operation is completed before moving on to the next line of code. If the file is large or the reading process takes a significant amount of time, the program will be blocked, and no other operations can be performed until the file reading is finished.

Node.js helps overcome input/output blocking through its non-blocking, event-driven architecture. Here's an example of asynchronous file reading in Node.js:


// Asynchronous file reading example
const fs = require('fs');

// Reading a file asynchronously
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

console.log("File read operation started.");

In this example, the readFile function initiates the file reading operation asynchronously. Instead of waiting for the operation to complete, the program continues executing the next line of code. When the file reading operation finishes, the provided callback function is invoked, and the data is processed. Meanwhile, the program remains responsive and can handle other tasks concurrently.

Node.js utilizes event-driven I/O and asynchronous programming patterns to handle I/O operations efficiently without blocking the execution flow. This enables Node.js applications to handle numerous concurrent connections and performant I/O operations effectively.

*/

// 3. As a Node.js backend developer, you may need to transfer data from one stream to another efficiently. How would you accomplish this task, and can you provide an example?


/**
 In Node.js, transferring data from one stream to another can be achieved using the pipe() method, which is available on readable streams. The pipe() method allows you to connect the output of one stream to the input of another stream, facilitating the seamless transfer of data between them. Here's an example demonstrating how to transfer data from one stream to another:

const fs = require('fs');

// Create a readable stream from a file
const readableStream = fs.createReadStream('input.txt');

// Create a writable stream to another file
const writableStream = fs.createWriteStream('output.txt');

// Pipe the readable stream to the writable stream
readableStream.pipe(writableStream);

// Handle events to monitor the transfer process
readableStream.on('end', () => {
  console.log('Data transfer completed.');
});

readableStream.on('error', (err) => {
  console.error('Error reading data:', err);
});

writableStream.on('finish', () => {
  console.log('Data writing completed.');
});

writableStream.on('error', (err) => {
  console.error('Error writing data:', err);
});

In this example:

We create a readable stream (readableStream) from a file named input.txt.
We create a writable stream (writableStream) to another file named output.txt.
We pipe the output of readableStream to the input of writableStream using the pipe() method.
We handle events to monitor the transfer process:
When the readable stream ends ('end' event), we log a message indicating that the data transfer is completed.
When an error occurs during reading ('error' event) or writing ('error' event), we log the error message.
When the writable stream finishes writing ('finish' event), we log a message indicating that the data writing is completed.
By using the pipe() method, Node.js handles the transfer of data efficiently, taking care of backpressure and memory management, which makes it a convenient and effective way to transfer data between streams.

 */

// 4. Given an input string containing space-separated numbers: "103 4444 99 123 2000 100 10", how can you rearrange the numbers to achieve the following output: "100 10 2000 103 123 444 99" using JavaScript?

// Input string
let input = "103 4444 99 123 2000 100 10";

// Step 1: Split the input string into an array of numbers
let numbers = input.split(" ").map(Number);

// Step 2: Sort the array in ascending order using a custom sorting function
numbers.sort((a, b) => {
  // Step 3: Implement custom sorting logic based on the number of digits
  if (String(a).length !== String(b).length) {
    return String(a).length - String(b).length; // Sort by number of digits
  } else {
    return a - b; // Sort numbers with the same number of digits in ascending order
  }
});

// Step 4: Join the sorted array into a string with spaces between numbers
let output = numbers.join(" ");

console.log(output); // Output the sorted numbers
