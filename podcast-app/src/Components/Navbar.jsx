import React from "react";
 import "../Styles/Navbar.css";

 const Navbar = () => {
   return (
     <nav className="navbar">
       <div className="logo">
         <img src="./Images/itunes.png" alt="logo" width="100px" />

         <h1 className="navbar-brand">KopoStream</h1>
       </div>

       <div className="collapse" id="navbarNav">
         <ul className="navbar-nav ">
           <li className="nav-item">
             <button className="nav-link">Home</button>
           </li>
           <li className="nav-item">
             <img src="./Images/search-engine.png" alt="search" width="50px" />
           </li>
           <li className="nav-item">
             <button className="nav-link">Favorites</button>
           </li>

         </ul>
       </div>
     </nav>
   );
 };

 export default Navbar;

// // import React, { useState } from "react";
// // import GenreComponent from "../Services/Genres";
// // import "../Styles/Navbar.css";

// // const Navbar = ({ onSearchInputChange, onSortChange, onGenreClick }) => {
// //   const [selectedSortingOption, setSelectedSortingOption] = useState("title");

// //   const handleSortingChange = (event) => {
// //     setSelectedSortingOption(event.target.value);
// //     onSortChange(event.target.value);
// //   };

// //   const handleSearchInputChange = (event) => {
// //     onSearchInputChange(event.target.value);
// //   };

// //   const handleGenreClick = (genre) => {
// //     onGenreClick(genre); // Pass the selected genre to the parent component (App)
// //   };

// //   return (
// //     <nav className="navbar">
// //        <div className="logo">
// //         <img src="./Images/itunes.png" alt="logo" width="100px" />

// //         <h1 className="navbar-brand">KopoStream</h1>
// //       </div>

// //       <div className="collapse" id="navbarNav">
// //         <ul className="navbar-nav ">
// //           <li className="nav-item">
// //             <button className="nav-link">Home</button>
// //           </li>
// //           <li className="nav-item">
// //             <img src="./Images/search-engine.png" alt="search" width="50px" />
// //           </li>
// //           <li className="nav-item">
// //             <button className="nav-link">Favorites</button>
// //           </li>

// //         </ul>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // // import React, { useState } from "react";
// // // import { GenreComponent, genresData} from "../Services/Genres";
// // // import "../Styles/Navbar.css";

// // // const Navbar = ({ onSearchInputChange, onSortChange, onGenreClick }) => {
// // //   const [selectedSortingOption, setSelectedSortingOption] = useState("title");

// // //   const handleSortingChange = (event) => {
// // //     setSelectedSortingOption(event.target.value);
// // //     onSortChange(event.target.value);
// // //   };

// // //   const handleSearchInputChange = (event) => {
// // //     onSearchInputChange(event.target.value);
// // //   };

// // //   // const handleGenreClick = (genre) => {
// // //   //   onGenreClick(genre);
// // //   // };

// // //   return (
// // //     <nav className="navbar">
// // //       <div className="logo">
// // //         <img src="./Images/itunes.png" alt="logo" width="100px" />
// // //         <h1 className="navbar-brand">KopoStream</h1>
// // //       </div>

// // //       <div className="collapse" id="navbarNav">
// // //         <ul className="navbar-nav ">
// // //           <li className="nav-item">
// // //             <button className="nav-link">Home</button>
// // //           </li>
// // //           <li className="nav-item">
// // //             <img src="./Images/search-engine.png" alt="search" width="50px" />
// // //           </li>
// // //           <li className="nav-item">
// // //             <button className="nav-link">Favorites</button>
// // //           </li>
// // //         </ul>
// // //       </div>

// // //       {/* Sorting dropdown */}
// // //       <div className="nav-item">
// // //         <select
// // //           value={selectedSortingOption}
// // //           onChange={handleSortingChange}
// // //           className="nav-link"
// // //         >
// // //           <option value="title">Sort by Title</option>
// // //           <option value="updated">Sort by Date Updated</option>
// // //         </select>
// // //       </div>

// // //       {/* Search input */}
// // //       <div className="nav-item">
// // //         <input
// // //           type="text"
// // //           placeholder="Search by title"
// // //           onChange={handleSearchInputChange}
// // //         />
// // //       </div>

// // //       {/* Genre filter */}
// // //       <div className="nav-item">
// // //         <ul className="navbar-nav">
// // //           {/* Pass the genreNames array to the GenreComponent */}
// // //           <GenreComponent genreIds={genreNames} />
// // //         </ul>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// // import React, { useEffect, useState } from 'react';

// // import Fuse from 'fuse.js';


// // const genresData = [
// //   { id: 1, title: 'Personal Growth' },
// //   { id: 2, title: 'True Crime and Investigative Journalism' },
// //   { id: 3, title: 'History' },
// //   { id: 4, title: 'Comedy' },
// //   { id: 5, title: 'Entertainment' },
// //   { id: 6, title: 'Business' },
// //   { id: 7, title: 'Fiction' },
// //   { id: 8, title: 'News' },
// //   { id: 9, title: 'Kids and Family' },
// // ];

// // const Navbar = () => {
// //   const [podcastData, setPodcastData] = useState([]);
// //   const [filteredPodcasts, setFilteredPodcasts] = useState([]);
// //   const [favorites, setFavorites] = useState([]);
// //   const [sortOption, setSortOption] = useState('az');
// //   const [filterText, setFilterText] = useState('');
// //   const [showFavorites, setShowFavorites] = useState(false);
// //   const [isLoading, setIsLoading] = useState(true);

// //  // Use useEffect to fetch the podcast data and handle initial load
// //  useEffect(() => {
// //   const fetchData = async () => {
// //     try {
// //       const response = await fetch('https://podcast-api.netlify.app/shows');
// //       if (!response.ok) {
// //         throw new Error('Failed to fetch podcast data');
// //       }
// //       const data = await response.json();
// //       setPodcastData(data);
// //       setIsLoading(false);
// //     } catch (error) {
// //       console.error('Error fetching podcast data:', error);
// //       setIsLoading(false);
// //     }
// //   };

// //   fetchData();
// // }, []);

// // // Filter podcasts based on the search text
// // useEffect(() => {
// //   if (!filterText) {
// //     setFilteredPodcasts(podcastData);
// //   } else {
// //     const options = {
// //       keys: ['title', 'description', 'genres'],
// //     };
// //     const fuse = new Fuse(podcastData, options);
// //     const result = fuse.search(filterText);
// //     setFilteredPodcasts(result.map((item) => item.item));
// //   }
// // }, [filterText, podcastData]);


// // // Sort the filtered podcasts based on the selected option
// // useEffect(() => {
// //   let sortedPodcasts = [...filteredPodcasts];
// //   switch (sortOption) {
// //     case 'az':
// //       sortedPodcasts.sort((a, b) => a.title.localeCompare(b.title));
// //       break;
// //     case 'za':
// //       sortedPodcasts.sort((a, b) => b.title.localeCompare(a.title));
// //       break;
// //     case 'asc':
// //       sortedPodcasts.sort((a, b) => new Date(a.updated) - new Date(b.updated));
// //       break;
// //     case 'desc':
// //       sortedPodcasts.sort((a, b) => new Date(b.updated) - new Date(a.updated));
// //       break;
// //     default:
// //       break;
// //   }
// //   setFilteredPodcasts(sortedPodcasts);
// // }, [sortOption, filteredPodcasts]);

// //   // Function to handle toggling favorites
// //   const favoriteToggleHandler = (podcastId) => {
// //     setFavorites((prevFavorites) =>
// //       prevFavorites.includes(podcastId)
// //         ? prevFavorites.filter((id) => id !== podcastId)
// //         : [...prevFavorites, podcastId]
// //     );
// //   };

// //   // Separate useEffect to update filteredPodcasts when favorites change
// //   useEffect(() => {
// //     const updatedFilteredPodcasts = filteredPodcasts.map((podcast) =>
// //       favorites.includes(podcast.id) ? { ...podcast, isFavorite: true } : podcast
// //     );
// //     setFilteredPodcasts(updatedFilteredPodcasts);
// //   }, [favorites]);


// //   return (
// //     <div>
// //       {/* Your NavBar component content */}
// //       <div className="sort-buttons">
// //         <button onClick={() => setSortOption('az')}>Sort A-Z</button>
// //         <button onClick={() => setSortOption('za')}>Sort Z-A</button>
// //         <button onClick={() => setSortOption('asc')}>Sort Ascending</button>
// //         <button onClick={() => setSortOption('desc')}>Sort Descending</button>
// //       </div>
// //       <div className="search-box">
// //         <input
// //           type="text"
// //           value={filterText}
// //           onChange={(e) => setFilterText(e.target.value)}
// //           placeholder="Filter by title or genre..."
// //         />
// //       </div>
// //       <div className="grid-container">
// //         {isLoading ? (
// //           <p>Loading...</p>
// //         ) : (
// //           filteredPodcasts.map((podcast) => (
// //             <Poster
// //               key={podcast.id}
// //               id={podcast.id}
// //               titles={podcast.title}
// //               descriptions={podcast.description}
// //               season={podcast.seasons}
// //               images={podcast.image}
// //               genre={podcast.genres.map((id) => genresData.find((genre) => genre.id === id).title).join(', ') || 'unknown'}
// //               updates={formatDate(podcast.updated)}
// //               isExpanded={expandedPosterId === podcast.id}
// //               onExpandClick={() => toggleExpand(podcast.id)}
// //               isFavorite={favorites.includes(podcast.id)}
// //               onFavoriteClick={() => favoriteToggleHandler(podcast.id)}
// //             />
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Navbar;


// // const Navbar = ({
// //   user,
// //   onSortFavorites,
// //   onGenreFilter,
// //   onFuzzySearch,
// // }) => {
// //   return (
// //     <nav>
// //       <div className="navbar-container">
// //         <div className="navbar-title">
// //           <h1>PodcastApp</h1>
// //         </div>
// //         <div className="navbar-actions">
// //           {user ? (
// //             <div className="navbar-user-info">
// //               <span>Welcome, {user.email}</span>
// //             </div>
// //           ) : (
// //             <div className="navbar-auth-buttons">
// //               <button onClick={onSignIn}>Log in</button>
// //               <button onClick={onSignUp}>Sign up</button>
// //             </div>
// //           )}
// //           <div className="navbar-favorites">
// //             <button>My Favorites</button>
// //           </div>
// //           <div className="navbar-sort">
// //             <select onChange={(e) => onSortFavorites(e.target.value)}>
// //               <option value="titleAZ">Sort by Title (A-Z)</option>
// //               <option value="titleZA">Sort by Title (Z-A)</option>
// //               <option value="dateAsc">Sort by Date Updated (Ascending)</option>
// //               <option value="dateDesc">
// //                 Sort by Date Updated (Descending)
// //               </option>
// //             </select>
// //           </div>
// //           <div className="navbar-filter">
// //             <input
// //               type="text"
// //               placeholder="Filter by Title"
// //               onChange={(e) => onFuzzySearch(e.target.value)} // Call the onFuzzySearch function here
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;



