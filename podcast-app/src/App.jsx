// import React, { useEffect, useState } from "react";
// import Navbar from "./Components/Navbar";
// import CardList from "./Services/CardList";
// import ShowDetail from "./Services/ShowDetail";
// import Footer from "./Services/Footer";
// import LandingPage from "./Components/LandingPage"; // Import the LandingPage component
// import supabase from './Services/Supabase'; // Import the supabase instance

// import "./Styles/App.css";

// function App() {
//   const [podcastData, setPodcastData] = useState([]);
//   const [itemsToShow, setItemsToShow] = useState(9);
//   const [selectedShow, setSelectedShow] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null); // State to hold the user's authentication status

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://podcast-api.netlify.app/shows`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch podcast data");
//         }
//         const data = await response.json();
//         setPodcastData(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching podcast data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Function to handle sign-in using email and password
//   const handleSignIn = async () => {
//     try {
//       const { user, error } = await supabase.auth.signIn({
//         email,
//         password,
//       });

//       if (error) {
//         throw error;
//       }

//       setUser(user); // Update the user state with the authenticated user
//       console.log('Logged in successfully!');
//       console.log('User:', user);
//     } catch (error) {
//       console.error('Error signing in:', error.message);
//     }
//   };

//   // Function to handle sign-up using email and password
//   const handleSignUp = async () => {
//     try {
//       const { user, error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error) {
//         throw error;
//       }

//       setUser(user); // Update the user state with the authenticated user
//       console.log('Signed up successfully!');
//       console.log('User:', user);
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//     }
//   };

//   // Function to handle log out
//   const handleLogout = async () => {
//     try {
//       const { error } = await supabase.auth.signOut();
//       if (error) {
//         throw error;
//       }
//       setUser(null); // Clear the user state on logout
//       console.log('Logged out successfully!');
//     } catch (error) {
//       console.error('Error signing out:', error.message);
//     }
//   };

//   const handleShowMore = () => {
//     setItemsToShow((prevItemsToShow) => prevItemsToShow + 7);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleShowClick = (show) => {
//     setSelectedShow(show);
//   };

//   const handleBackToAllShows = () => {
//     setSelectedShow(null);
//   };

//   return (
//     <div>
//       {user ? ( // If user is authenticated, render the main application page
//         <div>
//           <Navbar />
//           {isLoading ? (
//             <div>Loading...</div>
//           ) : selectedShow ? (
//             <ShowDetail show={selectedShow} onBack={handleBackToAllShows} />
//           ) : (
//             <div className="podCastSection">
//               <CardList
//                 data={podcastData.slice(0, itemsToShow)}
//                 onShowClick={handleShowClick}
//               />
//             </div>
//           )}
//           {itemsToShow < podcastData.length && !selectedShow && (
//             <>
//               <button onClick={handleShowMore}>More Podcast</button>
//               <button className="back-to-top" onClick={scrollToTop}>
//                 Back To Top
//               </button>
//             </>
//           )}
//           <Footer />
//         </div>
//       ) : ( // If user is not authenticated, render the landing page
//         <LandingPage
//           onSignIn={handleSignIn}
//           onSignUp={handleSignUp}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

// import React, { useEffect, useState } from "react";
// import Navbar from "./Components/Navbar";
// import CardList from "./Services/CardList";
// import ShowDetail from "./Services/ShowDetail";
// import Footer from "./Services/Footer";
// import LandingPage from "./Components/LandingPage"; // Import the LandingPage component
// import supabase from './Services/Supabase'; // Import the supabase instance

// import "./Styles/App.css";

// function App() {
//   const [podcastData, setPodcastData] = useState([]);
//   const [itemsToShow, setItemsToShow] = useState(9);
//   const [selectedShow, setSelectedShow] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [user, setUser] = useState(null); // State to hold the user's authentication status

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(`https://podcast-api.netlify.app/shows`);
//         if (!response.ok) {
//           throw new Error("Failed to fetch podcast data");
//         }
//         const data = await response.json();
//         setPodcastData(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching podcast data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // // Function to handle sign-in using email and password
//   // const handleSignIn = async () => {
//   //   try {
//   //     const { user, error } = await supabase.auth.signIn({
//   //       email,
//   //       password,
//   //     });

//   //     if (error) {
//   //       throw error;
//   //     }

//   //     setUser(user); // Update the user state with the authenticated user
//   //     console.log('Logged in successfully!');
//   //     console.log('User:', user);
//   //   } catch (error) {
//   //     console.error('Error signing in:', error.message);
//   //   }


//   // };

//   // Function to handle sign-up using email and password
//   const handleSignUp = async () => {
//     try {
//       const { user, error } = await supabase.auth.signUp({
//         email,
//         password,
//       });

//       if (error) {
//         throw error;
//       }

//       setUser(user); // Update the user state with the authenticated user
//       console.log('Signed up successfully!');
//       console.log('User:', user);
//     } catch (error) {
//       console.error('Error signing up:', error.message);
//     }
//   };

  

//   const handleShowMore = () => {
//     setItemsToShow((prevItemsToShow) => prevItemsToShow + 7);
//   };

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const handleShowClick = (show) => {
//     setSelectedShow(show);
//   };

//   const handleBackToAllShows = () => {
//     setSelectedShow(null);
//   };

//   return (
//     <div>
//       {user ? ( // If user is authenticated, render the main application page
//         <div>
//           <Navbar />
//           {isLoading ? (
//             <div>Loading...</div>
//           ) : selectedShow ? (
//             <ShowDetail show={selectedShow} onBack={handleBackToAllShows} />
//           ) : (
//             <div className="podCastSection">
//               <CardList
//                 data={podcastData.slice(0, itemsToShow)}
//                 onShowClick={handleShowClick}
//               />
//             </div>
//           )}
//           {itemsToShow < podcastData.length && !selectedShow && (
//             <>
//               <button onClick={handleShowMore}>More Podcast</button>
//               <button className="back-to-top" onClick={scrollToTop}>
//                 Back To Top
//               </button>
//             </>
//           )}
//           <Footer />
//         </div>
//       ) : ( // If user is not authenticated, render the landing page
//         <LandingPage
//         onSignUp={handleSignUp}
//         />
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import CardList from "./Services/CardList";
import ShowDetail from "./Services/ShowDetail";
import Footer from "./Services/Footer";

import "./Styles/App.css";

function App() {
  const [podcastData, setPodcastData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(9);
  const [selectedShow, setSelectedShow] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]); // State to hold the list of favorites
  const [sortOption, setSortOption] = useState(null); // State to hold the sort option

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/shows`);
        if (!response.ok) {
          throw new Error("Failed to fetch podcast data");
        }
        const data = await response.json();
        setPodcastData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching podcast data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Function to handle clicking on a show card
  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  // Function to handle sorting the favorites list
  const handleSortFavorites = (option) => {
    setSortOption(option);
    let sortedFavorites = [...favorites];
    switch (option) {
      case "az":
        sortedFavorites.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        sortedFavorites.sort((a, b) => b.title.localeCompare(a.title));
        break;
      case "asc":
        sortedFavorites.sort((a, b) => new Date(a.updated) - new Date(b.updated));
        break;
      case "desc":
        sortedFavorites.sort((a, b) => new Date(b.updated) - new Date(a.updated));
        break;
      default:
        break;
    }
    setFavorites(sortedFavorites);
  };

  const handleShowMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 7);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToAllShows = () => {
    setSelectedShow(null);
  };

  return (
    <div>
      <Navbar
        onSortFavorites={handleSortFavorites} // Pass the onSortFavorites function to the Navbar component
        user={user}
        onSignIn={() => setUser({ email: "user@example.com" })}
        onSignUp={() => setUser({ email: "user@example.com" })}
        onLogout={() => setUser(null)}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : selectedShow ? (
        <ShowDetail show={selectedShow} onBack={handleBackToAllShows} />
      ) : (
        <div className="podCastSection">
          <CardList
            data={podcastData.slice(0, itemsToShow)}
            onShowClick={handleShowClick}
          />
        </div>
      )}
      {itemsToShow < podcastData.length && !selectedShow && (
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
