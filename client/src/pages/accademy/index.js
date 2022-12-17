import React, {useEffect, useState} from 'react'
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import './style.css';
import { ref, listAll, getDownloadURL, getStorage } from "firebase/storage";
import { app } from '../../Firebase.js';
import { Link } from 'react-router-dom';
import academyImage from '../../svg/accademy-image.png';
import academyWebinar from '../../svg/accademy-webinar.png';

const Accademy = () => {
    const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className='accademy'>
    <Header page="accademy" />
    <LeftHome user={user} />
    <div className='container-accademy'>
      <div className='accademyIntro'>
        <h2>Academy</h2>
        <p>L'accademy è la spalla destra del networker che vuole diventare un professionista
          , più di 30 video su consigli del settore
        </p>
      </div>
      <div className='video-cont'>
        <Link to='/accademy/video'>
        <div className='AccademyList1'>
          <img src={academyImage} />
          <h3>ACADEMY</h3>
        </div>
        </Link>
        <Link to='/accademy/webinar'>
        <div className='AccademyList1'>
          <img src={academyWebinar} />
          <h3>WEBINAR</h3>
        </div>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default Accademy