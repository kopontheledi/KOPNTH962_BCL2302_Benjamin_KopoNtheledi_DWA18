import React from "react";
import Card from "../Components/Card";
import GenreComponent from "./Genres";
import Fuse from "fuse.js";
import "../Styles/CardList.css";

const CardList = ({ data, onShowClick, searchTerm }) => {
  // Create a new instance of Fuse with the data and search options
  const fuse = new Fuse(data, { keys: ["title"], includeScore: true });
  
  // Perform the search based on the searchTerm
  const searchResults = searchTerm ? fuse.search(searchTerm).map(result => result.item) : data;

  return (
    <div className="cardlist">
      {searchResults.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          description={item.description}
          seasons={item.seasons}
          image={item.image}
          genres={<GenreComponent genreIds={item.genres} />}
          onShowClick={() => onShowClick(item)}
        />
      ))}
    </div>
  );
};

export default CardList;
