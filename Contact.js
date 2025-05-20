import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending message
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="page contact">
      <h1>Contact Us</h1>
      {submitted ? (
        <p>Thank you for your message. We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <br/>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <br/>
          <label>
            Message:
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </label>
          <br/>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
