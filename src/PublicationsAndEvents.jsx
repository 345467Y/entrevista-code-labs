import * as React from 'react';
import './scss/publications-and-events.scss';
import Carousel from 'react-bootstrap/Carousel';

function PublicationsAndEvents() {
  return (
    <div className='container-publications-and-events'>
      <p className='font-face-timesi'>Publicaciones y eventos</p>

      <Carousel className='' controls={false} indicators={true}>
        <Carousel.Item interval={2000}>
          <div className='div-image'></div>
          <div className='subtitle-publications-and-events'>LOREM IPSUM DOLORE SIT AMET</div>
          <div className='description-publications-and-events'>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </div>
          <div className='button-publications-and-events'>
            LEER MÁS
          </div>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <div className='div-image'></div>
          <div className='subtitle-publications-and-events'>LOREM IPSUM DOLORE SIT AMET</div>
          <div className='description-publications-and-events'>Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </div>
          <div className='button-publications-and-events'>
            LEER MÁS
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default PublicationsAndEvents;
