import express from 'express';
import process from 'process';
import console from 'console';

const app = express();
const port = process.env.PORT || 3000;

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
