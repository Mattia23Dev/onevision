import React, {useState , useEffect} from 'react'
import { useSelector } from 'react-redux';
import LeftHome from '../../components/home/left'
import Header from '../../components/header';
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
import { app } from '../../Firebase.js';
import { ArrowRight } from '../../svg';
import { Link } from 'react-router-dom';
import './style.css'

const AccademyVideo = () => {
  const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className='academy-video-page'>
      <Header />
      <LeftHome user={user} />
      <div className='container-accademy'>
        <div className='accademyIntro'>
          <h2>Accademy</h2>
          <p className='time'>Durata: 1G 18H 16M 25S
          </p>
          <img src='https://i.vimeocdn.com/video/1435625815-211a9a3cb1ab6c4da0d89e37cc6672dc4cf674f5755ce57d5dff9d4b287eb761-d' className='webinar-img' />
        </div>
        <div className='accademy-type'>
            <Link to='/accademy/video/academy1'>
            <div className='accademy-item'>
              <p>ACADEMY 1</p>
              <span>4H 36M 18S</span>
              <img src='https://i.vimeocdn.com/video/1435626478-8b70f04737f61a37e6b110f41b39fdabd96c2f2cd66b00e306a58451fe3b29d8-d' />
            </div>
            </Link>
            <Link to='/accademy/video/academy-consultant'>
            <div className='accademy-item'>
              <p>ACADEMY <br/> CONSULTANT</p>
              <span>7H 26M 39S</span>
              <img src='https://i.vimeocdn.com/video/1435626611-1fec68a2640afb55d265920316588692f3fd2b5909f644fc60da1593c79669a6-d' />
            </div>
            </Link>
            <Link to='/accademy/video/academy-zaffiri'>
            <div className='accademy-item'>
              <p>ACADEMY ZAFFIRI</p>
              <span>8H 10M 8S</span>
              <img src='https://i.vimeocdn.com/video/1532291040-db164e4aa7b4a23a84ede2509267d84f27559ada993df5bad9719dbb105aafb1-d' />
            </div>
            </Link>
            <Link to='/accademy/video/zoom-training'>
            <div className='accademy-item'>
              <p>ZOOM TRAINING</p>
              <span>9H 34M 30S</span>
              <img src='https://i.vimeocdn.com/video/1532318074-767371fc739f669de7ba915184065a5ada3cf794331df3efb4fb85b9dc29dc33-d' />
            </div>
            </Link>
            <Link to='/accademy/video/breakout'>
            <div className='accademy-item'>
              <p>BREAKOUT 2022</p>
              <span>12H 19M 34S</span>
              <img src='https://i.vimeocdn.com/video/1518401263-87b8639657c36d505d6a0b6511cf673fbae8fb705113cd8828de8735ee5c4d38-d' />
            </div>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default AccademyVideo