import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import CardList from "./Services/CardList";
import Footer from "./Services/Footer";
import Signup from "./Services/Signup";
import Login from "./Services/LogIn";
import LandingPage from "./Components/LandingPage";

import "./Styles/App.css";



function App() {
  const [podcastData, setPodcastData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(9);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/shows`);
        if (!response.ok) {
          throw new Error("Failed to fetch podcast data");
        }
        const data = await response.json();
        setPodcastData(data);
      } catch (error) {
        console.error("Error fetching podcast data:", error);
      }
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 7);
  };

 
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
  };

  const handleSignup = () => {
    // ... (handle successful signup, e.g., set loggedIn state to true)
    setShowSignup(true);
  };

  const handleLogin = () => {
    // ... (handle successful login, e.g., set loggedIn state to true)
    setLoggedIn(true);
  };

  return (
    <div>
      {/* Pass the necessary props to the Navbar component */}
      <Navbar/>
      <div className="podCastSection">
        {/* Conditionally render the appropriate component based on the state */}
        {loggedIn ? (
          <CardList
            data={podcastData.slice(0, itemsToShow)}

          />
        ) : showSignup ? (
          <Signup onLogin={handleLogin} onSignup={handleSignup} />
        ) : showLogin ? (
          <Login onSignup={handleSignup} onLogin={handleLogin} />
        ) : (
          <LandingPage
            handleSignupClick={handleSignupClick}
            handleLoginClick={handleLoginClick}
          />
        )}
      </div>
      {itemsToShow < podcastData.length && (
        <>
          <button onClick={handleShowMore}>More Podcast</button>
          <button className="back-to-top" onClick={scrollToTop}>
            Back To Top
          </button>
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
