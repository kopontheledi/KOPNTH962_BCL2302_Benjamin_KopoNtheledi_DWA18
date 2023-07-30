import React, { useState } from 'react';

const Signup = ({ onLogin, onSignup}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();
    // Add your signup logic here (e.g., API call to register the user)
    console.log('Signup form submitted');
  };
   // After successful signup, call the onSignup function passed as a prop
   onSignup()

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        {/* Add your signup form fields here */}
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Signup</button>
      </form>
      {/* Add a button to switch to the Login page */}
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default Signup;
