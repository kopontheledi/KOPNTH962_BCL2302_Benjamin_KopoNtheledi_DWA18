import Card from "../Components/Card.jsx";
import GenreComponent from "./Genres.jsx";
import FavoriteCard from "./Favorites.jsx";

import "../Styles/CardList.css";

const CardList = ({ data }) => {
  return (
    
     
    <div className="cardlist">
      {data.map((item) => (
        <Card
          title={item.title}
          description={item.description}
          seasons={item.seasons}
          image={item.image}
          genres={<GenreComponent genreIds={item.genres} />}
          updated={item.updated}
          
        />
      ))}
      <FavoriteCard
            title={item.title}
            description={item.description}
            seasons={<Seasons seasons={item.seasons} />}
            image={item.image}
            genres={<GenreComponent genreIds={item.genres} />}
            updated={item.updated}
          />
    </div>
    
  );
};

export default CardList;
