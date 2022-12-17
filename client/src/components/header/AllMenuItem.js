import { Link } from "react-router-dom";
export default function AllMenuItem({ text, description, img, url }) {
  return (
    <Link to={`${url}`}>
    <div className="all_menu_item hover1">
      <img src={`../../left/${img}.png`} alt="" />
      <div className="all_menu_col">
        <span>{text}</span>
        <span>{description}</span>
      </div>
    </div>
    </Link>
  );
}
