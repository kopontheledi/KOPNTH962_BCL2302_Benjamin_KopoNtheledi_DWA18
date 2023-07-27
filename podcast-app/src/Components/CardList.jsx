import Card from "./Card.jsx";
import '../Styles/CardList.css'


const CardList = ({ data }) => {
  return (
    <div className="cardlist">
      {data.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          seasons={item.seasons}
          image={item.image}
          genres={item.genres}
          updated={item.updated}
        />
      ))}
    </div>
  );
};

export default CardList;
