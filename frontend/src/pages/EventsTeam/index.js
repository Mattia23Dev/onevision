import React from 'react'
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import './style.css';
import RightHome from '../../components/home/right';
import Accordion from 'react-bootstrap/Accordion';
import { 
  eventRoma , 
  eventMilano , 
  eventNapoli,
  eventCagliari,
  eventFirenze } from '../../data/events';
import CardEvent from './CardEvent';

const EventsTeam = () => {
    const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className='events'>
    <Header />
    <LeftHome user={user} />
    <div className='container-events'>
      <div className='eventsIntro'>
        <h2>Eventi Aziendali</h2>
        <p>Organizziamo eventi tutti i mesi, sia di formazione che di presentazione. <br />
        Ci vediamo al prossimo evento, potrai conoscere tanti nuovi collaboratori!
        </p>
      </div>
      <div className='cont-event'>
         <Accordion defaultActiveKey="0" flush>
         <Accordion.Item eventKey="0">
           <Accordion.Header>Roma</Accordion.Header>
           <Accordion.Body>
            <div className='item-event'>
             {eventRoma && eventRoma.map((event) => (
                <CardEvent 
                date={event.date}
                desc={event.desc}
                luogo_ora={event.luogo_ora}
                />
             ))}
             </div>
           </Accordion.Body>
         </Accordion.Item>
         </Accordion>
      </div>
      <div className='cont-event'>
         <Accordion defaultActiveKey="0" flush>
         <Accordion.Item eventKey="0">
           <Accordion.Header>Milano</Accordion.Header>
           <Accordion.Body>
            <div className='item-event'>
             {eventMilano && eventMilano.map((event) => (
                <CardEvent 
                date={event.date}
                desc={event.desc}
                luogo_ora={event.luogo_ora}
                />
             ))}
             </div>
           </Accordion.Body>
         </Accordion.Item>
         </Accordion>
      </div>
      <div className='cont-event'>
         <Accordion defaultActiveKey="0" flush>
         <Accordion.Item eventKey="0">
           <Accordion.Header>Napoli</Accordion.Header>
           <Accordion.Body>
            <div className='item-event'>
             {eventNapoli && eventNapoli.map((event) => (
                <CardEvent 
                date={event.date}
                desc={event.desc}
                luogo_ora={event.luogo_ora}
                />
             ))}
             </div>
           </Accordion.Body>
         </Accordion.Item>
         </Accordion>
      </div>
      <div className='cont-event'>
         <Accordion defaultActiveKey="0" flush>
         <Accordion.Item eventKey="0">
           <Accordion.Header>Cagliari</Accordion.Header>
           <Accordion.Body>
            <div className='item-event'>
             {eventCagliari && eventCagliari.map((event) => (
                <CardEvent 
                date={event.date}
                desc={event.desc}
                luogo_ora={event.luogo_ora}
                />
             ))}
             </div>
           </Accordion.Body>
         </Accordion.Item>
         </Accordion>
      </div>
      <div className='cont-event'>
         <Accordion defaultActiveKey="0" flush>
         <Accordion.Item eventKey="0">
           <Accordion.Header>Firenze</Accordion.Header>
           <Accordion.Body>
            <div className='item-event'>
             {eventFirenze && eventFirenze.map((event) => (
                <CardEvent 
                date={event.date}
                desc={event.desc}
                luogo_ora={event.luogo_ora}
                />
             ))}
             </div>
           </Accordion.Body>
         </Accordion.Item>
         </Accordion>
      </div>
    </div>
    <RightHome user={user} />
    </div>
  )
}

export default EventsTeam