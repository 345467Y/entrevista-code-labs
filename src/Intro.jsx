import * as React from 'react';
import './scss/intro.scss';
import logoMarletti from './img/cropimg55.png';

function Intro() {
  return (
    <div className='container-intro'>
      <div className='title-intro'>
        <img src={logoMarletti} alt="" />
        MARLETTI
      </div>
      <div className='subtitle-intro'>
        Semillas que son <br /> el del horizonte del futuro.
      </div>
    </div>
  );
}

export default Intro;
