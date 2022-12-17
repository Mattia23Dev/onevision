import React, {useState , useEffect} from 'react'
import Header from '../../../components/header/index.js';
import LeftHome from '../../../components/home/left/index.js';
import { useSelector } from 'react-redux';
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
import { app } from '../../../Firebase.js';
import { Link } from 'react-router-dom';

const Accornero = () => {
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
    <div className='academy-webinar-page'>
        <Header />
        <LeftHome user={user} />
        <div className='container-accademy'>
            <div className='accademyIntro'>
                <h2>Webinar Davide Accornero</h2>
                <p className='time'>Durata: 30m 37s</p>
                <img className='webinar-img' src='https://i.vimeocdn.com/video/1435629079-b1679b15a8f6dfc6cf1f3298c3efe6acc6a467b5151cf40bdb19d371c54b6bd3-d' alt='webinar-intro-one-vision' />
            </div>
            <div>
                    {
                videos.map((val, index) => (
                    <video width="320" height="240" controls key={index}>
                    <source src={val}></source>
                </video>
                ))
                }
            </div>
        </div>    
    </div>
  )
}

export default Accornero