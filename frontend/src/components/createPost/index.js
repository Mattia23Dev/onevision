import { Feeling, LiveVideo, Photo } from "../../svg";
import UserMenu from "../header/userMenu";
import "./style.css";
export default function CreatePost({ user, setVisible, profile }) {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={user?.picture} alt="" />
        <div
          className="open_post hover2"
          onClick={() => {
            setVisible(true);
          }}
        >
          Scrivi qualcosa, {user?.first_name}
        </div>
      </div>
      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <LiveVideo color="#f3425f" />
          Formazione
        </div>
        <div className="createPost_icon hover1">
          <Photo color="#4bbf67" />
          Foto/Video
        </div>
        {profile ? (
          <div className="createPost_icon hover1">
            <i className="lifeEvent_icon"></i>
            Nuovi Eventi
          </div>
        ) : (
          <div className="createPost_icon hover1">
            <Feeling color="#f7b928" />
            Consigli/Attività
          </div>
        )}
      </div>
    </div>
  );
}
