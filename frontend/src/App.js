import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import LoggedInRoutes from "./routes/LoggedInRoutes";
import NotLoggedInRoutes from "./routes/NotLoggedInRoutes";
import { useSelector } from "react-redux";
import Activate from "./pages/home/activate";
import Reset from "./pages/reset";
import CreatePostPopup from "./components/createPostPopup";
import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { postsReducer } from "./functions/reducers";
import Friends from "./pages/friends";
import Dashboard from "./pages/dashboard/Dashboard";
import Marketing from "./pages/dashboard/Marketing";
import Accademy from "./pages/accademy";
import EventsTeam from "./pages/EventsTeam";
import GroupCommunity from "./pages/GroupCommunity/index";
import Book from "./pages/book/Book";
import Trading from './pages/trading/Trading';
import Inviti from './pages/inviti/Inviti';
import Privacy from "./pages/Privacy";
import Termini from "./pages/Termini";
import AccademyVideo from "./pages/accademy/Academy";
import Webinar from "./pages/accademy/Webinar";
import Accornero from "./pages/accademy/webinar/Accornero";
import Plaisant from "./pages/accademy/webinar/Plaisant";
import Consultant from "./pages/accademy/academy-type/Consultant";
import Acad1 from "./pages/accademy/academy-type/Acad1";
import Zaffiri from "./pages/accademy/academy-type/Zaffiri";
import ZoomTraining from "./pages/accademy/academy-type/ZoomTraining";
import Breakout from "./pages/accademy/academy-type/Breakout";

function App() {
  const [visible, setVisible] = useState(false);
  const { user, darkTheme } = useSelector((state) => ({ ...state }));
  const [{ loading, error, posts }, dispatch] = useReducer(postsReducer, {
    loading: false,
    posts: [],
    error: "",
  });
  useEffect(() => {
    getAllPosts();
  }, []);
  const getAllPosts = async () => {
    try {
      dispatch({
        type: "POSTS_REQUEST",
      });
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/getAllposts`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      dispatch({
        type: "POSTS_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "POSTS_ERROR",
        payload: error.response.data.message,
      });
    }
  };
  return (
    <div className={darkTheme && "dark"}>
      {visible && (
        <CreatePostPopup
          user={user}
          setVisible={setVisible}
          posts={posts}
          dispatch={dispatch}
        />
      )}
      <Routes>
        <Route element={<LoggedInRoutes />}>
          <Route
            path="/profile"
            element={
              <Profile setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/profile/:username"
            element={
              <Profile setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/friends"
            element={
              <Friends setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/friends/:type"
            element={
              <Friends setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
          <Route
            path="/"
            element={
              <Home
                setVisible={setVisible}
                posts={posts}
                loading={loading}
                getAllPosts={getAllPosts}
              />
            }
            exact
          />
          <Route path="/activate/:token" element={<Activate />} exact />
          <Route path="/dashboard" element={
          <Dashboard setVisible={setVisible} getAllPosts={getAllPosts}/>
          } exact
          />
          <Route path="/marketing" element={
            <Marketing setVisible={setVisible} getAllPosts={getAllPosts}/>
          } exact
          />
          <Route path="/accademy" element={
            <Accademy setVisible={setVisible} getAllPosts={getAllPosts}/>
          } exact
          />
          <Route path="/accademy/video" element={
            <AccademyVideo setVisible={setVisible} />
          } exact
          />
          <Route path="/accademy/webinar" element={
            <Webinar setVisible={setVisible} />
          } exact
          /> 
          <Route path="/accademy/webinar/accornero" element={
            <Accornero setVisible={setVisible} />
          } exact
          />  
          <Route path="/accademy/webinar/plaisant" element={
            <Plaisant setVisible={setVisible} />
          } exact
          />  
          <Route path="/accademy/video/academy-consultant" element={
            <Consultant setVisible={setVisible} />
          } exact
          />   
          <Route path="/accademy/video/academy1" element={
            <Acad1 setVisible={setVisible} />
          } exact
          />    
          <Route path="/accademy/video/academy-zaffiri" element={
            <Zaffiri setVisible={setVisible} />
          } exact
          />   
          <Route path="/accademy/video/zoom-training" element={
            <ZoomTraining setVisible={setVisible} />
          } exact
          /> 
          <Route path="/accademy/video/breakout" element={
            <Breakout setVisible={setVisible} />
          } exact
          />  
          <Route path="/groupCommunity" element={
            <GroupCommunity setVisible={setVisible} getAllPosts={getAllPosts}/>
          } exact
          />
          <Route path="/events" element={
            <EventsTeam setVisible={setVisible} getAllPosts={getAllPosts}/>
          } exact
          />
          <Route
            path="/book"
            element={
              <Book setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
           <Route
            path="/percorso-informativo"
            element={
              <Inviti setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
           <Route
            path="/trading"
            element={
              <Trading setVisible={setVisible} getAllPosts={getAllPosts} />
            }
            exact
          />
        </Route>
        <Route element={<NotLoggedInRoutes />}>
          <Route path="/login" element={<Login />} exact />
        </Route>
        <Route path="/reset" element={<Reset />} />
        <Route path="/privacy" element={ <Privacy /> }
          />
        <Route path="/terms" element={ <Termini /> }
          />
      </Routes>
    </div>
  );
}

export default App;
