// import React from "react";
// import "../Styles/Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="./Images/itunes.png" alt="logo" width="100px" />

//         <h1 className="navbar-brand">KopoStream</h1>
//       </div>

//       <div className="collapse" id="navbarNav">
//         <ul className="navbar-nav ">
//           <li className="nav-item">
//             <button className="nav-link">Home</button>
//           </li>
//           <li className="nav-item">
//             <img src="./Images/search-engine.png" alt="search" width="50px" />
//           </li>
//           <li className="nav-item">
//             <button className="nav-link">Favorites</button>
//           </li>
          
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import GenreComponent from "../Services/Genres";
import "../Styles/Navbar.css";

const Navbar = ({ onSearchInputChange, onSortChange, onGenreClick }) => {
  const [selectedSortingOption, setSelectedSortingOption] = useState("title");

  const handleSortingChange = (event) => {
    setSelectedSortingOption(event.target.value);
    onSortChange(event.target.value);
  };

  const handleSearchInputChange = (event) => {
    onSearchInputChange(event.target.value);
  };

  const handleGenreClick = (genre) => {
    onGenreClick(genre); // Pass the selected genre to the parent component (App)
  };

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

// import React, { useState } from "react";
// import { GenreComponent, genresData} from "../Services/Genres";
// import "../Styles/Navbar.css";

// const Navbar = ({ onSearchInputChange, onSortChange, onGenreClick }) => {
//   const [selectedSortingOption, setSelectedSortingOption] = useState("title");

//   const handleSortingChange = (event) => {
//     setSelectedSortingOption(event.target.value);
//     onSortChange(event.target.value);
//   };

//   const handleSearchInputChange = (event) => {
//     onSearchInputChange(event.target.value);
//   };

//   // const handleGenreClick = (genre) => {
//   //   onGenreClick(genre);
//   // };

//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="./Images/itunes.png" alt="logo" width="100px" />
//         <h1 className="navbar-brand">KopoStream</h1>
//       </div>

//       <div className="collapse" id="navbarNav">
//         <ul className="navbar-nav ">
//           <li className="nav-item">
//             <button className="nav-link">Home</button>
//           </li>
//           <li className="nav-item">
//             <img src="./Images/search-engine.png" alt="search" width="50px" />
//           </li>
//           <li className="nav-item">
//             <button className="nav-link">Favorites</button>
//           </li>
//         </ul>
//       </div>

//       {/* Sorting dropdown */}
//       <div className="nav-item">
//         <select
//           value={selectedSortingOption}
//           onChange={handleSortingChange}
//           className="nav-link"
//         >
//           <option value="title">Sort by Title</option>
//           <option value="updated">Sort by Date Updated</option>
//         </select>
//       </div>

//       {/* Search input */}
//       <div className="nav-item">
//         <input
//           type="text"
//           placeholder="Search by title"
//           onChange={handleSearchInputChange}
//         />
//       </div>

//       {/* Genre filter */}
//       <div className="nav-item">
//         <ul className="navbar-nav">
//           {/* Pass the genreNames array to the GenreComponent */}
//           <GenreComponent genreIds={genreNames} />
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
