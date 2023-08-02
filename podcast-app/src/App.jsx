// App.js
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

  const handleShowMore = () => {
    setItemsToShow((prevItemsToShow) => prevItemsToShow + 7);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleShowClick = (show) => {
    setSelectedShow(show);
  };

  const handleBackToAllShows = () => {
    setSelectedShow(null);
  };

  return (
    <div>
      <Navbar />
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