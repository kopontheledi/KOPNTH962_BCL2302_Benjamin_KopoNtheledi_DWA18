import React from 'react';

const LandingPage = ({ handleSignupClick, handleLoginClick }) => {
  return (
    <div>
      <h2>Welcome to Our Landing Page</h2>
      {/* Add any other content you want to display on the landing page */}
      <button onClick={handleSignupClick}>Signup</button>
      <button onClick={handleLoginClick}>Login</button>
    </div>
  );
};

export default LandingPage;
