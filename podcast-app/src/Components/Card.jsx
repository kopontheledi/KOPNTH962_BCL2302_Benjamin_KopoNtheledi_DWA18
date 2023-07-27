import React, { useState, useEffect } from "react";

function Card(props) {
  const { id, title, description, seasons, image, genres, updated } = props;
  const [genreNames, setGenreNames] = useState([]);

  const [showFullDescription, setShowFullDescription] = useState(false);

  const [rating, setRating] = useState(0); // State to keep track of selected rating

  const handleStarClick = (selectedRating) => {
    setRating(selectedRating);
  };

  const renderStars = () => {
    const stars = [];
    const maxRating = 5;

    for (let i = 1; i <= maxRating; i++) {
      const starClassName = i <= rating ? "star selected" : "star";

      stars.push(
        <span
          key={i}
          className={starClassName}
          onClick={() => handleStarClick(i)}
        >
          ★
        </span>
      );
    }

    return stars;
  };

  useEffect(() => {
    const fetchGenreNames = async () => {
      try {
        const response = await fetch(`https://podcast-api.netlify.app/shows`);
        if (!response.ok) {
          throw new Error("Failed to fetch genre names");
        }
        const data = await response.json();
        // Assuming that the fetched data contains an array of genre names
        setGenreNames(data.genres);
      } catch (error) {
        console.error("Error fetching genre names:", error);
      }
    };

    fetchGenreNames();
  }, []); // Empty dependency array to run the effect only once on mount

  const toggleDescription = () => {
    setShowFullDescription((prevState) => !prevState);
  };

  const getDescription = () => {
    if (showFullDescription || description.length <= 100) {
      return description;
    } else {
      return description.slice(0, 100) + "...";
    }
  };

  return (
    <div>
      <div className="cards">
        <h2>{title}</h2>
        <p>ID: {id}</p>
        <img
          src={image}
          alt={title}
          style={{ maxWidth: "200px" }}
          className="card--images"
        />
        <p>Seasons: {seasons}</p>
        <p>Genres: {Array.isArray(genres) ? genres.join(", ") : genres}</p>
        <p>Updated: {updated}</p>
        <p>Description: {getDescription()}</p>
        {description.length > 100 && (
          <button onClick={toggleDescription}>
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
