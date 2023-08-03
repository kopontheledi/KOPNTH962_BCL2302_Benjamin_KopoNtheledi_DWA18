import './Styles/App.css';
// import NavBar from './Components/Navbar';
import CardList from './Services/CardList';

import Footer from './Services/Footer';
export default function App() {
  return (
    <>
   
    {/* <button onClick={() => window.location.href = "/favorites"}>Go to Favorite Podcasts</button> */}
        <CardList/>
        <Footer />
    </>
  );
}