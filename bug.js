const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello');
  }).catch(err => {
    // Error handling missing here! 
  });
});
app.listen(3000, () => console.log('Server started on port 3000'));