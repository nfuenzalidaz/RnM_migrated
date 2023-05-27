import { useSelector } from "react-redux";
import Card from "../Card/Card";
import "./Cards.css"

const Cards = () => {
  const { characters } = useSelector((state) => state);

  return (
    <div class="container">
      {characters.map(
        ({ id, name, species, gender, origin, status, image }) => {
          return (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              gender={gender}
              origin={origin.name}
              status={status}
              image={image}
            />
          );
        }
      )}
    </div>
  );
};

export default Cards;
