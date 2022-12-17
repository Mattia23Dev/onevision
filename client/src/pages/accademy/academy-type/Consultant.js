import React, {useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import Header from '../../../components/header/index.js';
import LeftHome from '../../../components/home/left/index.js';
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
import { app } from '../../../Firebase.js';
import './style.css'

const Consultant = () => {
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
            <h2>ACADEMY CONSULTANT</h2>
            <p className='time'>Durata: 7H 26M 39S
            </p>
            <img src='https://i.vimeocdn.com/video/1435626611-1fec68a2640afb55d265920316588692f3fd2b5909f644fc60da1593c79669a6-d' className='webinar-img' />
        </div>
        {
          videos.map((val, index) => (
            <video width="320" height="240" controls key={index}>
              <source src={val}></source>
          </video>
          ))
        }
        </div>
     </div>
  )};
  
  export default Consultant