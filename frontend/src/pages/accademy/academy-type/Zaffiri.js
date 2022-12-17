import React, {useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import Header from '../../../components/header/index.js';
import LeftHome from '../../../components/home/left/index.js';
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
import { app } from '../../../Firebase.js';
import './style.css'

const Zaffiri = () => {
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
            <h2>ACADEMY ZAFFIRI</h2>
            <p className='time'>Durata: 8H 10M 8S
            </p>
            <img src='https://i.vimeocdn.com/video/1532291040-db164e4aa7b4a23a84ede2509267d84f27559ada993df5bad9719dbb105aafb1-d' className='webinar-img' />
        </div>
      </div>
     </div>
  )};
  
  export default Zaffiri