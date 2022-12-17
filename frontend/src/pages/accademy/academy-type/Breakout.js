import React, {useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import Header from '../../../components/header/index.js';
import LeftHome from '../../../components/home/left/index.js';
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
import { app } from '../../../Firebase.js';
import './style.css'

const Breakout = () => {
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
            <h2>BREAKOUT 2022</h2>
            <p className='time'>Durata: 12H 19M 34S
            </p>
            <img src='https://i.vimeocdn.com/video/1518401263-87b8639657c36d505d6a0b6511cf673fbae8fb705113cd8828de8735ee5c4d38-d' className='webinar-img' />
        </div>
      </div>
     </div>
  )};
  
  export default Breakout