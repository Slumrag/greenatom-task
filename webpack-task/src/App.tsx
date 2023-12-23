import React, { FC } from 'react';
import './styles/styles.css';
import pngLogo from './images/logo.png';
import svgLogo from './images/react-2.svg';
import { Button } from '@ui/Button';

const App: FC = () => {
  return (
    <div>
      <h1>app</h1>
      <div className=''>
        <img src={pngLogo} alt='png' width={70} />
        <img src={svgLogo} alt='svg' width={70} />
      </div>
      <p>
        {process.env.NODE_ENV == 'development' && 'We are in dev environment'}
        {process.env.NODE_ENV == 'production' && 'We are in prod environment'}
      </p>
      <p>NODE_ENV={process.env.NODE_ENV}</p>
      <Button></Button>
    </div>
  );
};

export default App;
