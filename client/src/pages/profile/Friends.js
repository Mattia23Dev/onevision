import { Link } from "react-router-dom";
export default function Friends({ friends }) {
  return (
    <div className="profile_card">
      <div className="profile_card_header">
        Collaboratori
        <div className="profile_header_link">
        {friends && (
        <div className="profile_card_count">
          {friends.length === 0
            ? ""
            : friends.length === 1
            ? "1 Collaboratore"
            : `${friends.length} Collaboratori`}
        </div>
      )}
        </div>
      </div>
            <br />
      <div className="profile_card_grid">
        {friends &&
          friends.slice(0, 9).map((friend, i) => (
            <Link
              to={`/profile/${friend.username}`}
              className="profile_photo_card"
              key={i}
            >
              <img src={friend.picture} alt="" />
              <span>
                {friend.first_name} {friend.last_name}
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}
