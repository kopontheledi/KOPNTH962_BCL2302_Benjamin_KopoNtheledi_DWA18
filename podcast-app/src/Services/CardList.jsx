import Card from "../Components/Card.jsx";
import GenreComponent from "./Genres.jsx";

import "../Styles/CardList.css";

const CardList = ({ data }) => {
  return (
    
     
    <div className="cardlist">
      {data.map((item) => (
        <Card
        key={item.id}
          title={item.title}
          description={item.description}
          seasons={item.seasons}
          image={item.image}
          genres={<GenreComponent genreIds={item.genres} />}
          // isFavorite={favorites.includes(item.id)}
          // onFavoriteClick={() => handleFavoriteClick(item.id)}
          // updated={item.updated}
          
        />
      ))}
    </div>
    
  );
};

export default CardList;