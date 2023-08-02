// import React, { useState } from 'react';
// import { createClient } from '@supabase/supabase-js';


// const Login = ({ onSignup, onLogin }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = (event) => {
//     event.preventDefault();
//     // Perform login logic here (e.g., API call to authenticate the user)
//     console.log('Login form submitted');
//     // After successful login, call the onLogin function passed as a prop
//     onLogin();
//   };
//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         {/* Add your login form fields here */}
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
//         <button type="submit">Login</button>
//       </form>
//       {/* Add a button to switch to the Signup page */}
//       <button onClick={onSignup}>Signup</button>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';


const Login = ({ onSignup, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here (e.g., API call to authenticate the user)
    console.log('Login form submitted');
    // After successful login, call the onLogin function passed as a prop
    onLogin();
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {/* Add your login form fields here */}
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
        <button type="submit">Login</button>
      </form>
      {/* Add a button to switch to the Signup page */}
      <button onClick={onSignup}>Signup</button>
    </div>
  );
};

export default Login;
