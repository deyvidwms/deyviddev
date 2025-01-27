import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface ComponentProps {
  children: React.ReactNode;
}

const Layout: React.FC<ComponentProps> = ({ children }) => {
  return (
    <div className='w-full bg-gray-900 flex flex-col'>
      <Header />
        {children}
      <Footer />
    </div>
  );
}

export default Layout;