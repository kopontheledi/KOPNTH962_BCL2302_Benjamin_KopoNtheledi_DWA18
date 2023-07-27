import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import CardList from "./Services/CardList";
import "./Styles/App.css";

function App() {
  const [podcastData, setPodcastData] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(12);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    // Optionally, you can filter the data here based on the search query.
    // For simplicity, we will use this query as it is and handle filtering in the CardList component.
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
    // Optionally, you can sort the data here based on the selected value.
    // For simplicity, we will pass this value to the CardList component and handle sorting there.
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <div className="podCastSection">
        <CardList
          data={podcastData.slice(0, itemsToShow)}
          searchQuery={searchQuery}
          sortBy={sortBy}
        />
      </div>
      {itemsToShow < podcastData.length && (
        <>
          <button onClick={handleShowMore}>More Podcast</button>
          <button className="back-to-top" onClick={scrollToTop}>
            Back To Top
          </button>
        </>
      )}
    </div>
  );
}

export default App;
