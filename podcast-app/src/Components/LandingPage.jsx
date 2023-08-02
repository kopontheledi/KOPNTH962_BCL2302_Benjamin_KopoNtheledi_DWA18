import React, { useState } from 'react';
import supabase from '../Servises/Supabase'; 

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Function to handle sign-in using email and password
//   const signingIn = async () => {
//     try {
//       const { user, error } = await supabase.auth.signIn({
//         email,
//         password,
//       });

//       if (error) {
//         throw error;
//       }

//       // Handle successful sign-in here, such as redirecting to the main application page.
//       console.log('Logged in successfully!');
//       console.log('User:', user);
//     } catch (error) {
//       console.error('Error signing in:', error.message);
//     }
//   };

  // Function to handle sign-up using email and password
  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      // Handle successful sign-up here, such as redirecting to the main application page.
      console.log('Signed up successfully!');
      console.log('User:', user);
    } catch (error) {
      console.error('Error signing up:', error.message);
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
      <button onClick={handleSignUp}>Log in</button>

      {/* Sign-up button */}
      <button onClick={handleSignUp}>Sign up</button>
    </div>
  );
};

export default LandingPage;
