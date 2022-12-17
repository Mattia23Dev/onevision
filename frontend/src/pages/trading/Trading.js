import React from 'react'
import { useSelector } from 'react-redux';
import './style.css'
import Header from '../../components/header';
import LeftHome from '../../components/home/left';
import RightHome from '../../components/home/right';

const Trading = () => {
    const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className='trading'>
        <Header />
        <LeftHome user={user} />
        <div className='container-trading'>
            <div className='tradingIntro'>
              <h2>Trading</h2>
              <p>scopri il percorso informativo del trading
              </p>
            </div>
            <div className='cont-trading'>
              <div className='trading-item'>
                <h3>Fase 1</h3>
                <p>La prima fase consiste nel guardare tutti i video di shift per capire
                  le basi del forex e degli indici
                </p>
              </div>
              <div className='trading-item'>
                <h3>Fase 1</h3>
                <p>La prima fase consiste nel guardare tutti i video di shift per capire
                  le basi del forex e degli indici
                </p>
              </div>
              <div className='trading-item'>
                <h3>Fase 1</h3>
                <p>La prima fase consiste nel guardare tutti i video di shift per capire
                  le basi del forex e degli indici
                </p>
              </div>
              <div className='trading-item'>
                <h3>Fase 1</h3>
                <p>La prima fase consiste nel guardare tutti i video di shift per capire
                  le basi del forex e degli indici
                </p>
              </div>
            </div>

        </div>
        <RightHome user={user} />
    </div>
  )
}

export default Trading