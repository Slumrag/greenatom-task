import React, { FC } from 'react';
import './styles.css';
import pngLogo from './images/logo.png';
import svgLogo from './images/react-2.svg';
const App: FC = () => {
  return (
    <div>
      <h1>app</h1>
      <div className=''>
        <img src={pngLogo} alt='png' width={70} />
        <img src={svgLogo} alt='svg' width={70} />
      </div>
    </div>
  );
};

export default App;
