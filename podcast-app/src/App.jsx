
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import CardList from "./Components/CardList";



function App() {
  const [podcastData, setPodcastData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(12);

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

  if (podcastData.length === 0) {
    return <p>Loading...</p>;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
 
    return (
      <div>
        <Navbar />
        <div className="podCastSection">
        <CardList  data={podcastData.slice(0, itemsToShow)} />
        </div>
        {itemsToShow < podcastData.length && (
          <><button onClick={handleShowMore}>More Podcast</button>
          <button className="back-to-top" onClick={scrollToTop}>Back To Top</button></>
        )}
      </div>
    );
}



export default App;
