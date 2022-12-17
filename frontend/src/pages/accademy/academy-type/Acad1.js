import React, {useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import Header from '../../../components/header/index.js';
import LeftHome from '../../../components/home/left/index.js';
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
import { app } from '../../../Firebase.js';
import './style.css'

const Acad1 = () => {
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
            <h2>ACADEMY 1</h2>
            <p className='time'>Durata: 4H 36M 18S
            </p>
            <img src='https://i.vimeocdn.com/video/1435626478-8b70f04737f61a37e6b110f41b39fdabd96c2f2cd66b00e306a58451fe3b29d8-d' className='webinar-img' />
        </div>
      </div>
     </div>
  )};
  
  export default Acad1