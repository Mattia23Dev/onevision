import { FriendsActive } from "../../../svg";
import { useEffect, useReducer } from "react";
import CardColl from "./CardColl";
import { friendspage } from "../../../functions/reducers";
import { getFriendsPageInfos } from "../../../functions/user";
import "./style.css";
export default function RightHome({ user }) {
  const [{ loading, error, data }, dispatch] = useReducer(friendspage, {
    loading: false,
    data: {},
    error: "",
  });
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    dispatch({ type: "FRIENDS_REQUEST" });
    const data = await getFriendsPageInfos(user.token);
    if (data.status === "ok") {
      dispatch({ type: "FRIENDS_SUCCESS", payload: data.data });
    } else {
      dispatch({ type: "FRIENDS_ERROR", payload: data.data });
    }
  };
  const color = "#65676b";
  return (
    <div className="right_home">
      <div className="heading">200+ persone utilizzano questa piattaforma</div>
      <div className="splitter1"></div>
      <div className="contacts_wrap">
        <div className="contacts_header">
          <div className="contacts_header_left">Collaboratori</div>
          <div className="contacts_header_right">
            <div className="contact_circle hover1">
              <FriendsActive color={color} />
            </div>
          </div>
        </div>
        <div className="contacts_list">
        {data.friends &&
            data.friends.map((user) => (
            <CardColl
            userr={user}
            key={user._id}
            type="friends"
            getData={getData}
            />
            ))}
        </div>
      </div>
    </div>
  );
}
