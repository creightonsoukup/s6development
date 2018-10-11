import React from 'react';

const ImageGallery = (props) => (
    <div className=''>
      <img className='' src={props.image} />
      <style jsx>{`
    img {
      overflow: hidden;
      display: block;
      margin: auto;
      max-width: 1800px;
      min-height: 40vh;
      max-height: 80vh;
      width: 100%;
    }

    .padding {
      padding: 5vw;
      box-sizing: border-box;
    }

  `}</style>
    </div>
)

export default ImageGallery
