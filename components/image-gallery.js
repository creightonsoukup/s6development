import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return {
      <div className='container fullpage'>
        <img src={image} />
      </div>
    }
  }
}

export default ImageGallery
