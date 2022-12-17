import { Dots } from "../../svg";
import { stories } from "../../data/home";
import AddFriendSmallCard from "./AddFriendSmallCard";
import axios from "axios";
import {useState , useEffect} from 'react'
import { useSelector } from "react-redux";
export default function PplYouMayKnow() {
  const { user } = useSelector((state) => ({ ...state }));
  const [allUser , setAllUser] = useState([])

  useEffect(() => {
    getAllUsers();
  }, []);
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
    <div className="pplumayknow">
      <div className="pplumayknow_header">
        Persone che puoi conoscere
        <div className="post_header_right ppl_circle hover1">
          <Dots />
        </div>
      </div>
      <div className="pplumayknow_list">
        {allUser.slice(5, 10).map((user) => (
          <AddFriendSmallCard 
          userr={user} 
          key={user._id} 
          />
        ))}
      </div>
    </div>
  );
}
