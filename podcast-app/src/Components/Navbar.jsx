// import React from "react";
// import "../Styles/Navbar.css";
// import HomeIcon from '@mui/icons-material/Home';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import IconButton from '@mui/material/IconButton';

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">
//         <img src="./Images/itunes.png" alt="logo" width="100px" />
//         <h1 className="navbar-brand">KopoStream</h1>
//       </div>

//       <div className="collapse" >
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <IconButton className="nav-link" aria-label="home">
//               <HomeIcon />
//               <span>Home</span>
//             </IconButton>
//           </li>

//           <li className="nav-item">
//             <IconButton className="nav-link" aria-label="favorites">
//               <FavoriteIcon />
//               <span>Liked Podcasts</span>
//             </IconButton>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


//number2
// import React from "react";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import "../Styles/Navbar.css";
// import HomeIcon from "@mui/icons-material/Home";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import IconButton from "@mui/material/IconButton";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="nav-left">
//         {/* Use Link component for "Home" link */}
//         <Link to="/" className="nav-link">
//           <IconButton aria-label="home">
//             <HomeIcon />
//             <span>Home</span>
//           </IconButton>
//         </Link>

//         {/* Use Link component for "Liked Podcasts" link */}
//         <Link to="/favorites" className="nav-link">
//           <IconButton aria-label="favorites">
//             <FavoriteIcon />
//             <span>Liked Podcasts</span>
//           </IconButton>
//         </Link>
//       </div>

//       <div className="nav-center">
//         <img src="./Images/itunes.png" alt="logo" width="100px" />
//         <h1 className="navbar-brand">KopoStream</h1>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

//number 3 favorites

import React from "react";
import "../Styles/Navbar.css";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";

const Navbar = ({onToggleView}) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <IconButton aria-label="home" onClick={onToggleView}>
          <HomeIcon />
          <span>Home</span>
        </IconButton>

        {/* Use Link component for "Liked Podcasts" link */}
        <IconButton aria-label="favorites" onClick={onToggleView}>
          <FavoriteIcon />
          <span>Liked Podcasts</span>
        </IconButton>
      </div>

      <div className="nav-center">
        <img src="./Images/itunes.png" alt="logo" width="100px" />
        <h1 className="navbar-brand">KopoStream</h1>
      </div>
    </nav>
  );
};

export default Navbar;