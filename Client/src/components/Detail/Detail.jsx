import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearDetails, getDetails } from "../../redux/action";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.charDetails);

  useEffect(() => {
    dispatch(getDetails(id));
    return () => dispatch(clearDetails())
  }, []);

  return (
    <div>
      <img src={detail.image && detail.image} alt="" />
      <h1>{detail.name && detail.name}</h1>
      {/* <h1>{detail.status && detail.status}</h1>
      <h1>{detail.species && detail.species}</h1>
      <h1>{detail.gender && detail.gender}</h1>
      <h1>{detail.origin?.name && detail.origin?.name}</h1>*/}
      <Link to="/home">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Detail;
