import * as React from 'react';
import './scss/footer.scss';
import map from './img/map.png';
import { TelephoneOutboundFill, EnvelopeFill, GeoAltFill, Facebook, Twitter } from 'react-bootstrap-icons';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='contact-container'>
        <img src={map} alt="map" width="60%" />
        <div className='container-icons-and-info'>
          <div className='container-icon-and-number'>
            <div className='container-icon'>
              <TelephoneOutboundFill fill='#9ac488' width='50%'></TelephoneOutboundFill>
            </div>
            <div className='container-info'>(+57) 000 0000</div>
          </div>
          <div className='container-icon-and-number'>
            <div className='container-icon'>
              <EnvelopeFill fill='#9ac488' width='50%'></EnvelopeFill>
            </div>
            <div className='container-info'>info@frankoamerica.com</div>
          </div>
          <div className='container-icon-and-number'>
            <div className='container-icon'>
              <GeoAltFill fill='#9ac488' width='50%'></GeoAltFill>
            </div>
            <div className='container-info'>Desagüe 12 vía Tenjo <br />
              La Punta, Vda. El Estanco<br />
              Lote san Vicente, Tenjo<br />
              Cundinamarca - Colombia<br />
            </div>
          </div>
        </div>
        <div className='container-social-networks'>
          <div className='our-social-networks-title'>Nuestras redes sociales</div>
          <div className='container-icons-networks'>
            <div className='container-icon'>
              <Facebook fill='#9ac488' width='50%'></Facebook>
            </div>
            <div className='container-icon'>
              <Twitter fill='#9ac488' width='50%'></Twitter>
            </div>
          </div>
        </div>
      </div>

      <div className='copyright-container'>
        <div className='copyright-text-container'>©2018 Marletti SAS</div>
        <div className='copyright-text-container'>Though by Code Labs</div>
      </div>
    </div>
  );
}

export default Footer;
