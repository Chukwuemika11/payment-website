async function makePayment() {
  const amount = document.getElementById('amount').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const expiryDate = document.getElementById('expiryDate').value;
  const cvv = document.getElementById('cvv').value;

  const response = await fetch('/payment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ amount, cardNumber, expiryDate, cvv }),
  });

  const result = await response.json();
  displayPaymentResult(result.status);
}

function displayPaymentResult(status) {
  const paymentResultDiv = document.getElementById('paymentResult');
  paymentResultDiv.innerHTML = `<p>Payment Status: ${status}</p>`;
}
