import React from 'react'

const CardEvent = ({date , desc , luogo_ora}) => {
  return (
    <div className='event-card'>
        <h5>{date}</h5>
        <h6>{desc}</h6>
        <h5>{luogo_ora}</h5>
    </div>
  )
}

export default CardEvent