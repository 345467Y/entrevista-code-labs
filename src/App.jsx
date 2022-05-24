import * as React from 'react';
import Footer from './Footer';
import Intro from './Intro';
import OurPhilosophy from './OurPhilosophy';
import PublicationsAndEvents from './PublicationsAndEvents';
import SliderComp from './SliderComp';

function App() {
  return (
    <div>
      <Intro/>
      <SliderComp/>
      <OurPhilosophy/>
      <PublicationsAndEvents/>
      <Footer/>
    </div>
  );
}

export default App;
