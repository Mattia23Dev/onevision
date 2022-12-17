import React from 'react'
import { useSelector } from 'react-redux';
import './style.css'
import Header from '../../components/header';
import LeftHome from '../../components/home/left';
import RightHome from '../../components/home/right';

const Book = () => {
    const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className='book'>
        <Header page="group" />
        <LeftHome user={user} />
        <div className='container-book'>
            <div className='bookIntro'>
              <h2>Libri consigliati</h2>
              <p>Leggere è una delle parti fondamentali per avere successo nell'attività, ti permette di 
                apprendere rapidamente nozioni importanti!
              </p>
            </div>
            <div className='cont-book'>
              <div className='book-item'>
                <h4>Nome</h4>
                <p>Descrizione</p>
              </div>
              <div className='book-item'>
                <h4>Nome</h4>
                <p>Descrizione</p>
              </div>
              <div className='book-item'>
                <h4>Nome</h4>
                <p>Descrizione</p>
              </div>
              <div className='book-item'>
                <h4>Nome</h4>
                <p>Descrizione</p>
              </div>
            </div>

        </div>
        <RightHome user={user} />
    </div>
  )
}

export default Book