import LeftLink from "./LeftLink";
import "./style.css";
import { left } from "../../../data/home";
import { Link } from "react-router-dom";
import { useState } from "react";
import Shortcut from "./Shortcut";
export default function LeftHome({ user }) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="left_home scrollbar">
      <Link to="/profile" className="left_link hover2">
        <img src={user?.picture} alt="" />
        <span>
          {user?.first_name} {user.last_name}
        </span>
      </Link>
      {left.slice(0, 9).map((link, i) => (
        <LeftLink
          key={i}
          img={link.img}
          text={link.text}
          notification={link.notification}
          link={link.link}
        />
      ))}
      <div className="splitter"></div>
      <div className="shortcut">
        <div className="heading">Shortcuts</div>
      </div>
      <div className="shortcut_list">
        <Shortcut
          link="https://www.instagram.com/weareonevision/"
          img="../../images/insta.png"
          name="One Vision"
        />

        <Shortcut
          link="https://www.bebackoffice.com/login?ReturnUrl=%2F"
          img="../../images/logo-be.png"
          name="Dashboard BE"
        />
      </div>
      <div className={`fb_copyright ${visible && "relative_fb_copyright"}`}>
        <Link to="/privacy">Privacy </Link>
        <span>. </span>
        <Link to="/terms">Termini </Link>
        <span>. </span> <br />
        One Vision © 2022
      </div>
    </div>
  );
}
