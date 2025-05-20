import React, { useState } from 'react';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setPaymentSuccess(true);
  };

  return (
    <div className="page payment">
      <h1>Payment</h1>
      {paymentSuccess ? (
        <p>Payment successful! Thank you for your purchase.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Cardholder Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br/>
          <label>
            Card Number:
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              maxLength="16"
            />
          </label>
          <br/>
          <label>
            Expiry Date (MM/YY):
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
              maxLength="5"
            />
          </label>
          <br/>
          <label>
            CVV:
            <input
              type="password"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
              maxLength="3"
            />
          </label>
          <br/>
          <button type="submit">Pay Now</button>
        </form>
      )}
    </div>
  );
};

export default Payment;
