import { useRef } from "react";
import { left } from "../../data/home";
import useClickOutside from "../../helpers/clickOutside";
import { Link } from "react-router-dom";
import AllMenuItem from "./AllMenuItem";
export default function AllMenu() {
  return (
    <div className="all_menu">
      <div className="all_menu_header">Menu</div>
      <div className="all_menu_wrap scrollbar">
        <div className="all_left">
          <div className="all_menu_search">
            <i className="amm_s_ic"></i>
            <input type="text" placeholder="Search Menu" />
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Area Personale</div>
            {left.slice(0, 2).map((link, i) => (
              <AllMenuItem
                          key={i}
                          img={link.img}
                          text={link.text}
                          description={link.description}
                          url = {link.link}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Community</div>
            {left.slice(2, 4).map((link, i) => (
              <AllMenuItem
              key={i}
              img={link.img}
              text={link.text}
              description={link.description}
              url = {link.link}
              />
            ))}
          </div>
          <div className="all_menu_group">
            <div className="all_menu_group_header">Formazione</div>
            {left.slice(4, 10).map((link, i) => (
              <AllMenuItem
              key={i}
              img={link.img}
              text={link.text}
              url = {link.link}
              description={link.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
