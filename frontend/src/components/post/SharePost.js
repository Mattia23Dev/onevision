import React from 'react';
import {WhatsappShareButton , InstapaperShareButton , TwitterShareButton , FacebookShareButton} from 'react-share';

const SharePost = () => {
  return (
    <div className='card-share'>
      <FacebookShareButton
      url='https://youtu.be/0xqSujRgVXI'
      quote='Condividi su Facebook'>
        <i className="share_icon"></i>
      </FacebookShareButton>
      <WhatsappShareButton
      url='https://youtu.be/0xqSujRgVXI'
      title='condividendo'>
        <i className="share_icon"></i>
      </WhatsappShareButton>
    </div>
  )
}

export default SharePost