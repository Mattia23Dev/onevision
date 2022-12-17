import React, {useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import Header from '../../../components/header/index.js';
import LeftHome from '../../../components/home/left/index.js';
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
import { app } from '../../../Firebase.js';
import './style.css'

const ZoomTraining = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [videos, setVideos] = useState([]);
  const storage = getStorage(app);

    const listRef = ref(storage, 'video/');

    useEffect(() => {
      listAll(listRef)
    .then((res) => {
    res.items.forEach((item) => {
      const getUrl = getDownloadURL(item).then(res => {
          setVideos(arr => [...arr, res]);
      });
      // All the items under listRef.
    });
  }).catch((error) => {
    // Uh-oh, an error occurred!
    console.log(error);
  });
    }, [])

  return (
    <div className='academy-type-page'>
      <Header />
      <LeftHome user={user} />
      <div className='container-accademy'>
        <div className='accademyIntro'>
            <h2>ZOOM TRAINING</h2>
            <p className='time'>Durata: 9H 34M 30S
            </p>
            <img src='https://i.vimeocdn.com/video/1532318074-767371fc739f669de7ba915184065a5ada3cf794331df3efb4fb85b9dc29dc33-d' className='webinar-img' />
        </div>
      </div>
     </div>
  )};
  
  export default ZoomTraining