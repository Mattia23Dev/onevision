import React from 'react'

const CardGroup = ({icon , team , desc_group}) => {
  return (
    <div className='group-card'>
        <h5>{icon}</h5>
        <h6>{team}</h6>
        <h5>{desc_group}</h5>
    </div>
  )
}

export default CardGroup