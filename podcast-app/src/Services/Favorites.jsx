
import React, { useState, useEffect } from "react";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://lmayjliyulorcummcvae.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

function FavoriteCard(props) {
  const { id, title, description, seasons, image, genres, updated } = props;
  const [genreNames, setGenreNames] = useState([]);
  const [showFullDescription, setShowFullDescription] = useState(false);

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

  const formatUpdatedDate = (dateString) => {
    const date = new Date(dateString);
    return date.toDateString();
  };

  // Function to add the podcast as a favorite
  const addToFavorites = async () => {
    try {
      const { data, error } = await supabase
        .from("favorites")
        .insert([
          {
            id,
            title,
            description,
            seasons,
            image,
            genres,
            updated,
          },
        ]);
      if (error) {
        throw new Error("Failed to add to favorites");
      }
      console.log("Added to favorites:", data);
    } catch (error) {
      console.error("Error adding to favorites:", error);
    }
  };

  return (
    <div>
      <div className="cards">
        <h2>{title}</h2>

        <img
          src={image}
          alt={title}
          style={{ maxWidth: "80%" }}
          className="card--images"
        />

        <p>Seasons: {seasons}</p>
        <p>Genre: {Array.isArray(genres) ? genres.join(", ") : genres}</p>
        <p>Updated: {formatUpdatedDate(updated)}</p>
        <p>Description: {getDescription()}</p>
        {description.length > 100 && (
          <button onClick={toggleDescription}>
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
        )}

        {/* Add a button to add the podcast to favorites */}
        <button onClick={addToFavorites}> Add to Favorites</button>
      </div>
    </div>
  );
}

export default FavoriteCard;
