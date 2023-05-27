import { useState } from "react";
import { useDispatch } from "react-redux";
import { getCharacter } from "../../redux/action";

const SearchBar = () => {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleClick = (event) => {
    dispatch(getCharacter(id));
  };

  return (
    <div>
      <input type="search" onChange={handleChange} />
      <button onClick={handleClick}>Agregar</button>
    </div>
  );
};

export default SearchBar;
