import React from 'react';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <div className='container flex justify-center items-center p-5 self-center z-50'>
      <h1>© {new Date().getFullYear()} <strong>DeyvidDev</strong> by Deyvid William | All rights reserved</h1>
    </div>
  );
}

export default Footer;