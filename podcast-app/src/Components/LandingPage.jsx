import React, { useState } from 'react'; 
import supabase from '../Services/Supabase';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = async () => {
    try {
      const { user, error } = await supabase.auth.signIn({ email, password });

      if (error) {
        throw error;
      }

      console.log('Logged in successfully!');
      console.log('User:', user);

      // Handle successful login here, such as redirecting to the main application page.
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const signUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({ email, password });

      if (error) {
        throw error;
      }

      console.log('Signed up successfully!');
      console.log('User:', user);

      // Handle successful sign-up here, such as redirecting to the main application page.
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <div>
      <h1>Welcome to our Podcast App</h1>
      <p>Please log in or sign up to access the podcasts.</p>

      {/* Email input */}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />

      {/* Password input */}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />

      {/* Login button */}
      <button onClick={signIn}>Log in</button>

      {/* Sign-up button */}
      <button onClick={signUp}>Sign up</button>
    </div>
  );
};

export default LandingPage;