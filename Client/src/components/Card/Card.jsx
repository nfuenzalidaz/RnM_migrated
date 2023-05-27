import { Link } from "react-router-dom";
import { closeCharacter } from "../../redux/action";
import { useDispatch } from "react-redux";
import "./Card.css";

const Card = ({ id, image, name, status, species, gender, origin }) => {
  const dispatch = useDispatch();

  const handleClick = (event) => {
    dispatch(closeCharacter(id));
  };

  return (
    <div class="card">
      <div class="content">
        <div class="back">
          <div class="back-content">
            <div class="img_holder">
              <img src={image} alt="" />
            </div>
            <div class="img_name">
              <strong>{name}</strong>
            </div>
          </div>
        </div>
        <div class="front">
          <div class="img">
            <div class="circle"></div>
            <div class="circle" id="right"></div>
            <div class="circle" id="bottom"></div>
          </div>

          <div class="front-content ">
            <div>
              {/* <div class="description"> */}
              <Link to={`/detail/${id}`}>
                <p>Name: {name} </p>
              </Link>
              <p class="desc">Status: {status}</p>
              <p class="desc">Species: {species}</p>
              <p class="desc">Gender: {gender}</p>
              <p class="desc">Origin: {origin}</p>
              <button onClick={handleClick}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
