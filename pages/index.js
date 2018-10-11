import Layout from '../components/layout'
import ImageGallery from '../components/image-gallery'
import React from 'react';

export default class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      image: 1
    }

    this.changeImage = this.changeImage.bind(this)
  }

  componentDidMount() {
    setInterval(this.changeImage, 2000);
  }

  changeImage() {
    const current = this.state.image
    if (this.state.image == 4) {
      this.setState({image: 1})
      return
    }
    const newImage = current + 1
    this.setState({image: newImage})
  }

  render() {
    return (
        <Layout title={'S6 Development'}>
          <ImageGallery image={`/static/image${this.state.image}.png`}/>
          <h1>Building Affordable, Attainable Housing Solutions</h1>
          <h2>Full Site Coming Soon</h2>
          <style jsx>{`
            h1 {
              font-size: 2.5rem;
              text-align: center;
              padding: 20px;
            }
            h2 {
              font-size: 1.5rem;
              text-align: center;
              padding: 20px;
            }
          `}
          </style>
        </Layout>
    )
  }
}
