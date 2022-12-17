import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import './style.css'

export default function CardColl({ userr }) {
  const { user } = useSelector((state) => ({ ...state }));
  
  return (
    <div className="req_cardColl">
      <Link to={`/profile/${userr.username}`}>
        <img src={userr.picture} alt="" />
      </Link>
      <div className="req_nameColl">
        {userr.first_name} {userr.last_name}
      </div>
    </div>
  );
}
