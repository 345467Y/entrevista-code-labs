import * as React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import './scss/slider.scss';

function SliderComp() {
  return (
    <div className='container-carousel'>
      <p className='font-face-timesi'>Conoce nuestras variedades</p>
      <Carousel className='slider-flowers' controls={false} indicators={true}>
        <Carousel.Item interval={2000}>
          <div className='container-images'>
            <div className='container-image'>
              <img className="d-block"
                height="auto"
                width="200px"
                src="https://res.cloudinary.com/academia-yineth/image/upload/v1653355033/code-labs/r004_avztlp.png"
                alt="1st slide"
              />
            </div>
            <div className='container-image'>
              <img className="d-block"
                height="auto"
                width="200px"
                src="https://res.cloudinary.com/academia-yineth/image/upload/v1653355033/code-labs/r001_lw2tjd.png"
                alt="1st slide"
              />
            </div>

            <br />
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='container-images'>
            <div className='container-image'>
              <img className="d-block"
                height="auto"
                width="200px"
                src="https://res.cloudinary.com/academia-yineth/image/upload/v1653355033/code-labs/r002_vdnpp5.png"
                alt="2nd slide"
              />
            </div>
            <div className='container-image'>
              <img className="d-block"
                height="auto"
                width="200px"
                src="https://res.cloudinary.com/academia-yineth/image/upload/v1653355033/code-labs/r003_evkzii.png"
                alt="2nd slide f"
              />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default SliderComp;
