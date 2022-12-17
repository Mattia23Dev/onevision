import { ArrowRight, Plus } from "../../../svg";
import "./style.css";
import { stories } from "../../../data/home";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
export default function Stories() {
  const query1175px = useMediaQuery({
    query: "(max-width: 1175px)",
  });
  const query1030px = useMediaQuery({
    query: "(max-width: 1030px)",
  });
  const query960px = useMediaQuery({
    query: "(max-width: 960px)",
  });
  const query885px = useMediaQuery({
    query: "(max-width: 885px)",
  });
  const max = query885px
    ? 5
    : query960px
    ? 4
    : query1030px
    ? 5
    : query1175px
    ? 4
    : stories.length;
  return (
    <div className="stories">
      <Link to='/accademy/webinar'>
        <img src="https://i.vimeocdn.com/video/1435629079-b1679b15a8f6dfc6cf1f3298c3efe6acc6a467b5151cf40bdb19d371c54b6bd3-d" alt='webinar-intro-one-vision' className="img-home" />
      </Link>
      <Link to='/accademy/video'>
        <img src='https://i.vimeocdn.com/video/1435626478-8b70f04737f61a37e6b110f41b39fdabd96c2f2cd66b00e306a58451fe3b29d8-d' alt='accademy-intro-one-vision' className="img-home sec-img" />
      </Link>
      <Link to='/accademy'>
      <div className="white_circle">
        <ArrowRight color="#65676b" />
      </div>
      </Link>
    </div>
  );
}
