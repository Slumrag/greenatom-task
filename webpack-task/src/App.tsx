import React, { FC } from 'react';
import './styles/styles.css';
// import pngLogo from './images/logo.png';
// import svgLogo from './images/react-2.svg';
import { Button } from '@ui/Button';

const App: FC = () => {
  return (
    <div>
      <h1>app</h1>
      <div className=''>
        <img src={'./assets/images/logo.png'} alt='png' width={70} />
        <img src={'./assets/images/react-2.svg'} alt='svg' width={70} />
      </div>
      <p>
        {process.env.NODE_ENV == 'development' && 'We are in dev environment'}
        {process.env.NODE_ENV == 'production' && 'We are in prod environment'}
      </p>
      <p>NODE_ENV={process.env.NODE_ENV}</p>

      <p>EXAMPLE={process.env.EXAMPLE}</p>
      <p>EXAMPLE_MODE_DEPENDANT={process.env.EXAMPLE_MODE_DEPENDANT}</p>
      <Button></Button>
    </div>
  );
};

export default App;
