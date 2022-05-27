import React from 'react';
import Banner from './Banner';
import CopyRight from './CopyRight';
import Footer from './Footer';
import Header from './Header';
import About from './Section/About';
import HandBook from './Section/Handbook';
import Medical from './Section/Medical';
import OutStandingDoctor from './Section/OutStandingDoctor';
import Specialist from './Section/Specialist';

const Home = () => {
   return (
      <>
         <Header></Header>
         <Banner></Banner>
         <Specialist />
         <Medical />
         <OutStandingDoctor />
         <HandBook />
         <About />
         <Footer />
         <CopyRight />
      </>
   );
};

export default Home;
