const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    console.error('Error during asynchronous operation:', err);
    res.status(500).send('Server Error');
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));

// Simulate an asynchronous operation
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulate an error (uncomment to reproduce) 
    //reject(new Error('Simulated asynchronous error')); 
    setTimeout(resolve, 100);
  });
}