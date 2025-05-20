import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailid, setEmailid] = useState('');
  const [gender, setGender] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobilenumber, setMobilenumber] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Password and Confirm Password do not match');
      return;
    }
    setError('');
    register({ username, password, emailid, gender, firstname, lastname, mobilenumber });
    alert('Registered successfully!');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmailid('');
    setGender('');
    setFirstname('');
    setLastname('');
    setMobilenumber('');
  };

  return (
    <div className="page register">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          Confirm Password:
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          Email ID:
          <input
            type="email"
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br/>
        <label>
          First Name:
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          Last Name:
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
        </label>
        <br/>
        <label>
          Mobile Number:
          <input
            type="tel"
            value={mobilenumber}
            onChange={(e) => setMobilenumber(e.target.value)}
            required
          />
        </label>
        <br/>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
