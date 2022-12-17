import React from 'react'
import { useSelector } from 'react-redux';
import './style.css'
import Header from '../../components/header';
import LeftHome from '../../components/home/left';
import RightHome from '../../components/home/right';

const Inviti = () => {
    const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className='inviti'>
        <Header />
        <LeftHome user={user} />
        <div className='container-inviti'>
            <div className='invitiIntro'>
              <h2>Percorso Informativo</h2>
              <p>Aspettiamo Don zedda 
              </p>
            </div>
            <div className='cont-inviti'>

            </div>

        </div>
        <RightHome user={user}/>
    </div>
  )
}

export default Inviti