import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/pages/Footer';
import Header from '../components/pages/Header';
import Numbers from '../components/pages/Numbers';
import Ourservices from '../components/pages/OurServices';
import OurStory from '../components/pages/OurStory';
import WhyPeopleChooseUs from '../components/pages/WhyPeopleChooseUs';
import Settings from '../components/Settings';
import Block from './style';

export const Root = () => {
  const [count, setCount] = useState(0);

  window.addEventListener('scroll', () => {
    setCount(window.scrollY);
  });

  console.log(count);

  return (
    <div>
      <Block>
        <Navbar />
      </Block>
      <Header />
      <OurStory />
      <Ourservices />
      <WhyPeopleChooseUs />
      <Numbers />
      <Settings />
      {/* <Footer/> */}
    </div>
  );
};
export default Root;
