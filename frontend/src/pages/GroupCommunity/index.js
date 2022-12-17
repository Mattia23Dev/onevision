import React from 'react'
import Header from "../../components/header";
import LeftHome from "../../components/home/left";
import { useSelector } from "react-redux";
import './style.css'
import RightHome from '../../components/home/right';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardGroup from './CardGroup';
import { groupWhats } from '../../data/group';

const GroupCommunity = () => {
    const { user } = useSelector((state) => ({ ...state }));
  return (
    <div className='groupCommunity'>
    <Header page="group" />
    <LeftHome user={user} />
    <div className='container-group'>
      <div className='groupIntro'>
        <h2>Community</h2>
        <p>La community è la parte più importante della nostra attività, ti consiglio di entrare
          in ogni gruppo!
        </p>
      </div>
      <div className='cont-group'>
          <Tabs
          defaultActiveKey="telegram"
          id="justify-tab-example"
          justify
          >
          <Tab eventKey="whatsapp" title="Whatsapp">
            <div className='item-group'>
            {groupWhats && groupWhats.map((group) =>(
              <CardGroup
              icon={group.icon}
              team={group.team}
              desc_group={group.desc_group} 
              />
            ))}
            </div>
          </Tab>
          <Tab eventKey="telegram" title="Telegram">
            <div className='item-group'>
            {groupWhats && groupWhats.map((group) =>(
              <CardGroup
              icon={group.icon}
              team={group.team}
              desc_group={group.desc_group} 
              />
            ))}
            </div>
          </Tab>
          <Tab eventKey="linktree" title="Linktree">
            <div className='item-group'>
            {groupWhats && groupWhats.map((group) =>(
              <CardGroup
              icon={group.icon}
              team={group.team}
              desc_group={group.desc_group} 
              />
            ))}
            </div>
          </Tab>
          <Tab eventKey="contact" title="contact">
            <div className='item-group'>
            {groupWhats && groupWhats.map((group) =>(
              <CardGroup
              icon={group.icon}
              team={group.team}
              desc_group={group.desc_group} 
              />
            ))}
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
    <RightHome user={user} />
    </div>
  )
}

export default GroupCommunity