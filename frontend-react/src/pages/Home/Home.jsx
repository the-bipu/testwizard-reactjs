import React from 'react';

import { About, Footer, Header } from '../../container';
import { Navbar } from '../../components';

const Home = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Footer />
    </div>
  )
}

export default Home