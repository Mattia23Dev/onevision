import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header";
import { friendspage } from "../../functions/reducers";
import { getFriendsPageInfos } from "../../functions/user";
import axios from "axios";
import Card from "./Card";
import "./style.css";
import CardAll from "./CardAll";
export default function Friends() {
  const { user } = useSelector((state) => ({ ...state }));
  const { type } = useParams();

  const [allUser , setAllUser] = useState([])

  const [{ loading, error, data }, dispatch] = useReducer(friendspage, {
    loading: false,
    data: {},
    error: "",
  });

  useEffect(() => {
    getData();
    getAllUsers();
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
 const getAllUsers = async () => {
    try {
     const allData = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllUsers`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      ).then(res => {
        setAllUser(res.data);
      });
    } catch (error) {
      return error.message;
    }
   };

  return (
    <>
      <Header page="friends" />
      <div className="friends">
        <div className="friends_left">
          <div className="friends_left_header">
            <h3>Collaboratori</h3>
            <div className="small_circle">
              <i className="settings_filled_icon"></i>
            </div>
          </div>
          <div className="friends_left_wrap">
            <Link
              to="/friends"
              className={`mmenu_item hover3 ${
                type === undefined && "active_friends"
              }`}
            >
              <div className="small_circle">
                <i className="friends_home_icon "></i>
              </div>
              <span>Home</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </Link>
            <Link
              to="/friends/requests"
              className={`mmenu_item hover3 ${
                type === "requests" && "active_friends"
              }`}
            >
              <div className="small_circle">
                <i className="friends_requests_icon"></i>
              </div>
              <span>Richieste ricevute</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </Link>
            <Link
              to="/friends/sent"
              className={`mmenu_item hover3 ${
                type === "sent" && "active_friends"
              }`}
            >
              <div className="small_circle">
                <i className="friends_requests_icon"></i>
              </div>
              <span>Richieste inviate</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </Link>
            <Link
              to="/friends/all"
              className={`mmenu_item hover3 ${
                type === "all" && "active_friends"
              }`}
            >
              <div className="small_circle">
                <i className="all_friends_icon"></i>
              </div>
              <span>Tutti i collaboratori</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </Link>
            <Link
                to="/friends/add"
                className={`mmenu_item hover3 ${
                type === "add" && "active_friends"
            }`}>
              <div className="small_circle">
                <i className="friends_suggestions_icon"></i>
              </div>
              <span>Aggiungi collaboratori</span>
              <div className="rArrow">
                <i className="right_icon"></i>
              </div>
            </Link>
          </div>
        </div>
        <div className="friends_right">
          {(type === undefined || type === "requests") && (
            <div className="friends_right_wrap">
              <div className="friends_left_header">
                <h3>Richieste ricevute</h3>
                {type === undefined && (
                  <Link to="/friends/requests" className="see_link hover3">
                    Guarda tutte
                  </Link>
                )}
              </div>
              <div className="flex_wrap">
                {data.requests &&
                  data.requests.map((user) => (
                    <Card
                      userr={user}
                      key={user._id}
                      type="request"
                      getData={getData}
                    />
                  ))}
              </div>
            </div>
          )}
          {(type === undefined || type === "sent") && (
            <div className="friends_right_wrap">
              <div className="friends_left_header">
                <h3>Richieste inviate</h3>
                {type === undefined && (
                  <Link to="/friends/sent" className="see_link hover3">
                    Guarda tutte
                  </Link>
                )}
              </div>
              <div className="flex_wrap">
                {data.sentRequests &&
                  data.sentRequests.map((user) => (
                    <Card
                      userr={user}
                      key={user._id}
                      type="sent"
                      getData={getData}
                    />
                  ))}
              </div>
            </div>
          )}
          {(type === undefined || type === "all") && (
            <div className="friends_right_wrap">
              <div className="friends_left_header">
                <h3>Collaboratori</h3>
                {type === undefined && (
                  <Link to="/friends/all" className="see_link hover3">
                    Guarda tutti
                  </Link>
                )}
              </div>
              <div className="flex_wrap">
                {data.friends &&
                  data.friends.map((user) => (
                    <Card
                      userr={user}
                      key={user._id}
                      type="friends"
                      getData={getData}
                    />
                  ))}
              </div>
            </div>
          )}
          {(type === undefined || type === "add") && (
            <div className="friends_right_wrap">
              <div className="friends_left_header">
                <h3>Aggiungi Collaboratori</h3>
                {type === undefined && (
                  <Link to="/friends/add" className="see_link hover3">
                    Guarda tutti
                  </Link>
                )}
              </div>
              <div className="flex_wrap">
                {allUser &&
                  allUser.map((user) => (
                    <CardAll 
                    userr={user}
                    key={user._id}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
