const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/payment', (req, res) => {
  // Handle payment processing logic here
  const { amount, cardNumber, expiryDate, cvv } = req.body;

  // Simulate a successful payment for demonstration purposes
  const paymentStatus = 'success';
  
  res.json({ status: paymentStatus });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
