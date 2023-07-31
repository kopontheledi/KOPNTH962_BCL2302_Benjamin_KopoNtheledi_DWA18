import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import CardList from "./Services/CardList";
import Footer from "./Services/Footer";
import Signup from "./Services/Signup";
import Login from "./Services/LogIn";
import LandingPage from "./Components/LandingPage";
import "./Styles/App.css";

function App( ) {
  const [podcastData, setPodcastData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(9);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  // const handleSignupClick = () => {
  //   setShowSignup(true);
  //   setShowLogin(false);
  // };

  // const handleLoginClick = () => {
  //   setShowLogin(true);
  //   setShowSignup(false);
  // };
  
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

  // const handleSearchChange = (event) => {
  //   setSearchQuery(event.target.value);
  //   // Optionally, you can filter the data here based on the search query.
  //   // For simplicity, we will use this query as it is and handle filtering in the CardList component.
  // };

  // const handleSortChange = (event) => {
  //   setSortBy(event.target.value);
  //   // Optionally, you can sort the data here based on the selected value.
  //   // For simplicity, we will pass this value to the CardList component and handle sorting there.
  // };

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
    <Navbar />
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

// import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar from "./Components/Navbar";
// import CardList from "./Services/CardList";
// import Footer from "./Services/Footer";
// import Signup from "./Services/Signup";
// import Login from "./Services/LogIn";
// import LandingPage from "./Components/LandingPage";
// import ShowSeasons from "./Services/ShowSeasons";
// import "./Styles/App.css";

// function App( ) {
//   const [podcastData, setPodcastData] = useState([]);
//   const [itemsToShow, setItemsToShow] = useState(9);
//   const [showSignup, setShowSignup] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);
//   const [loggedIn, setLoggedIn] = useState(false);

//   // const handleSignupClick = () => {
//   //   setShowSignup(true);
//   //   setShowLogin(false);
//   // };

// //   // const handleLoginClick = () => {
// //   //   setShowLogin(true);
// //   //   setShowSignup(false);
// //   // };
  
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await fetch(`https://podcast-api.netlify.app/shows`);
// //         if (!response.ok) {
// //           throw new Error("Failed to fetch podcast data");
// //         }
// //         const data = await response.json();
// //         setPodcastData(data);
// //       } catch (error) {
// //         console.error("Error fetching podcast data:", error);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   const handleShowMore = () => {
// //     setItemsToShow((prevItemsToShow) => prevItemsToShow + 7);
// //   };

// //   // const handleSearchChange = (event) => {
// //   //   setSearchQuery(event.target.value);
// //   //   // Optionally, you can filter the data here based on the search query.
// //   //   // For simplicity, we will use this query as it is and handle filtering in the CardList component.
// //   // };

// //   // const handleSortChange = (event) => {
// //   //   setSortBy(event.target.value);
// //   //   // Optionally, you can sort the data here based on the selected value.
// //   //   // For simplicity, we will pass this value to the CardList component and handle sorting there.
// //   // };

// //   const scrollToTop = () => {
// //     window.scrollTo({ top: 0, behavior: "smooth" });
// //   };

// //   const handleSignupClick = () => {
// //     setShowSignup(true);
// //     setShowLogin(false);
// //   };

  
// //     const handleLoginClick = () => {
// //       setShowLogin(true);
// //       setShowSignup(false);
// //   };

// //   const handleSignup = () => {
// //     // ... (handle successful signup, e.g., set loggedIn state to true)
// //     setLoggedIn(true);
// //   };

// //   const handleLogin = () => {
// //     // ... (handle successful login, e.g., set loggedIn state to true)
// //     setLoggedIn(true);
// //   };


// // //   return (
// // //     <div>
// // //     <Navbar />
// // //     <div className="podCastSection">
// // //       {/* Conditionally render the appropriate component based on the state */}
// // //       {loggedIn ? (
// // //         <CardList
// // //           data={podcastData.slice(0, itemsToShow)}
        
// // //         />
// // //       ) : showSignup ? (
// // //         <Signup onLogin={handleLogin} onSignup={handleSignup} />
// // //       ) : showLogin ? (
// // //         <Login onSignup={handleSignup} onLogin={handleLogin} />
// // //       ) : (
// // //         <LandingPage
// // //           handleSignupClick={handleSignupClick}
// // //           handleLoginClick={handleLoginClick}
// // //         />
// // //       )}
// // //     </div>
// // //     {itemsToShow < podcastData.length && (
// // //       <>
// // //         <button onClick={handleShowMore}>More Podcast</button>
// // //         <button className="back-to-top" onClick={scrollToTop}>
// // //           Back To Top
// // //         </button>
// // //       </>
// // //     )}
// // //     <Footer />
// // //   </div>
// // // );
// // // }
// // // export default App;
// // return (
// //   <Router>
// //     <div>
// //       <Navbar />
// //       <div className="podCastSection">
// //         {/* Conditionally render the appropriate component based on the state */}
// //         <Switch>
// //           {/* Route for the CardList component */}
// //           <Route exact path="/">
// //             {loggedIn ? (
// //               <CardList data={podcastData.slice(0, itemsToShow)} />
// //             ) : (
// //               <LandingPage
// //                 handleSignupClick={handleSignupClick}
// //                 handleLoginClick={handleLoginClick}
// //               />
// //             )}
// //           </Route>

// //           <Route exact path="/show/:id/seasons">
// //             <ShowSeasons />
// //           </Route>
// //           </Switch>

// //           {/* Route for the Signup component */}
// //           <Route path="/signup">
// //             <Signup onLogin={handleLogin} onSignup={handleSignup} />
// //           </Route>
// //           {/* Route for the Login component */}
// //           <Route path="/login">
// //             <Login onSignup={handleSignup} onLogin={handleLogin} />
// //           </Route>
// //         </Switch>
// //       </div>
// //       {itemsToShow < podcastData.length && (
// //         <>
// //           <button onClick={handleShowMore}>More Podcast</button>
// //           <button className="back-to-top" onClick={scrollToTop}>
// //             Back To Top
// //           </button>
// //         </>
// //       )}
// //       <Footer />
// //     </div>
// //   </Router>
// // );
// // }

// // export default App;


