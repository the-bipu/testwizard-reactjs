import React from 'react';

import { About, Footer, Hero, Header } from '../../container';
import { Navbar } from '../../components';

const Home = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  )
}

export default Home