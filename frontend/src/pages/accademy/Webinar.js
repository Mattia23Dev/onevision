import React from 'react'
import LeftHome from '../../components/home/left'
import Header from '../../components/header';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './style.css'

const Webinar = () => {
    const { user } = useSelector((state) => ({ ...state }));

  return (
    <div className='academy-webinar-page'>
        <Header />
        <LeftHome user={user} />
        <div className='container-accademy'>
            <div className='accademyIntro'>
                <h2>Webinar</h2>
                <p className='time'>Durata: 1h 1m 21s</p>
                <img className='webinar-img' src='https://i.vimeocdn.com/video/1435629079-b1679b15a8f6dfc6cf1f3298c3efe6acc6a467b5151cf40bdb19d371c54b6bd3-d' alt='webinar-intro-one-vision' />
            </div>
            <div>

            </div>
            <div className='webinar-list'>
            <Link to='/accademy/webinar/plaisant'>
                <div className='webinar-item'>
                    <p>WEBINAR LORENZO PLAISANT</p>
                    <span>30M 44S</span>
                    <img src='https://i.vimeocdn.com/video/1435629079-b1679b15a8f6dfc6cf1f3298c3efe6acc6a467b5151cf40bdb19d371c54b6bd3-d' alt='webinar-intro-one-vision' />   
                </div>
                </Link> 
                <Link to='/accademy/webinar/accornero'>
                <div className='webinar-item'>
                    <p>WEBINAR DAVIDE ACCORNERO</p>
                    <span>30M 37S</span>
                    <img src='https://i.vimeocdn.com/video/1435629079-b1679b15a8f6dfc6cf1f3298c3efe6acc6a467b5151cf40bdb19d371c54b6bd3-d' alt='webinar-intro-one-vision' />
                </div>  
                </Link>             
            </div>
        </div>    
    </div>
  )
}

export default Webinar