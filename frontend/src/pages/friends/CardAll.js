import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CardAll({ userr }) {
  const { user } = useSelector((state) => ({ ...state }));
  
  return (
    <div className="req_cardAll">
      <Link to={`/profile/${userr.username}`}>
        <img src={userr.picture} alt="" />
      </Link>
      <div className="req_name">
        {userr.first_name} {userr.last_name}
      </div>
    </div>
  );
}