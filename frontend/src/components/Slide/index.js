/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Fade } from 'react-slideshow-image';
import './styles.css';

import img1 from '../../assets/img/background.png';
import img2 from '../../assets/img/background.png';
import img3 from '../../assets/img/background.png';
import img4 from '../../assets/img/background.png';

const fadeImages = [
  img1,
  img2,
  img3,
  img4,
];

const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
}

const App = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        {fadeImages.map((image, index) => (
          <div className="each-fade">
            <div className="image-container">
              <img src={fadeImages[index]} />
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
};

export default App;
