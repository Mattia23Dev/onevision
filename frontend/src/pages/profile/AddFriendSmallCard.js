import { Link } from "react-router-dom";
export default function AddFriendSmallCard({ userr }) {
  return (
    <div className="addfriendCard">
      <Link to={`/profile/${userr.username}`}>
      <div className="addfriend_imgsmall">
        <img src={userr.picture} alt="foto-utenti" />
        <div className="addfriend_infos">
          <div className="addfriend_name">
            {userr.first_name + userr.last_name > 11
              ? `${userr.first_name + userr.last_name.substring(0, 11)}...`
              : userr.first_name + userr.last_name}
          </div>
          <div className="light_blue_btn">
            <img
              src="../../../icons/addFriend.png"
              alt=""
              className="filter_blue"
            />
            vai al profilo
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
}
