// import React, { useState } from 'react';



// const Signup = ({ onLogin, onSignup}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


//   const handleSignup = (event) => {
//     event.preventDefault();
//     // Add your signup logic here (e.g., API call to register the user)
//     console.log('Signup form submitted');
//   };
//    // After successful signup, call the onSignup function passed as a prop
//    onSignup()

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSignup}>
//         {/* Add your signup form fields here */}
//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           id="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Signup</button>
//       </form>
//       {/* Add a button to switch to the Login page */}
//       <button onClick={onLogin}>Login</button>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';


// Initialize the Supabase client
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');

const Signup = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      // Register the user using Supabase
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) {
        console.error('Signup failed:', error.message);
      } else {
        console.log('Signup successful');
        // After successful signup, call the onLogin function passed as a prop
        onLogin();
      }
    } catch (error) {
      console.error('Signup failed:', error.message);
    }
  };

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