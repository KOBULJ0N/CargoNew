import React from 'react';
import {
  AboutUs,
  Amazon,
  Card,
  // CaruItem,
  Container,
  Down,
  Employee,
  Fedex,
  Hubgroup,
  Hunt,
  Landstar,
  Partner,
  Partner2,
  Pepsi,
  Silchuk,
  Story,
  Truck,
} from './style';

import CountUp from 'react-countup';


const Settings = () => {
  return (
    <Container>
      {/* <Container.Curved> */}
      <Card.Wrapper>
        <Card>
          <CountUp start={0} end={300} delay={0}>
            {({ countUpRef }) => (
              <Card.Title>
                <span ref={countUpRef} />+
              </Card.Title>
            )}
          </CountUp>
          <Truck />
          <Card.Text>TRUCKS ON THE ROAD</Card.Text>
        </Card>
        <Card>
          <CountUp start={0} end={15} delay={0}>
            {({ countUpRef }) => (
              <Card.Title>
                <span ref={countUpRef} />+
              </Card.Title>
            )}
          </CountUp>
          <Story />
          <Card.Text>YEARS ON MARKET</Card.Text>
        </Card>
        <Card>
          <CountUp start={0} end={400} delay={0}>
            {({ countUpRef }) => (
              <Card.Title>
                <span ref={countUpRef} />+
              </Card.Title>
            )}
          </CountUp>
          <Employee />
          <Card.Text>EMPLOYEES</Card.Text>
        </Card>
      </Card.Wrapper>
      <Down.Wrap to='/map'>
        <Down />
      </Down.Wrap>
      {/* </Container.Curved> */}
      <Partner>
        <Partner.Title>PARTNERS WHO WORKS WITH US</Partner.Title>
        <Partner.Icons>
          <Partner.Icon>
            <Amazon />
          </Partner.Icon>
          <Partner.Icon>
            <Partner2 />
          </Partner.Icon>
          <Partner.Icon>
            <Fedex />
          </Partner.Icon>
          <Partner.Icon>
            <Silchuk />
          </Partner.Icon>
        </Partner.Icons>
        <Partner.Icons>
          <Partner.Icon>
            <Pepsi />
          </Partner.Icon>
          <Partner.Icon>
            <Landstar />
          </Partner.Icon>
          <Partner.Icon>
            <Hubgroup />
          </Partner.Icon>
        </Partner.Icons>
        <Partner.Icons>
          <Partner.Icon>
            <Hunt />
          </Partner.Icon>
        </Partner.Icons>
      </Partner>
      {/* <AboutUs> */}
        {/* <AboutUs.Title>WHAT PEOPLE THINK ABOUT US</AboutUs.Title> */}

        {/* <Carousel slides={slides}/> */}
        {/* <AboutUs.Carousel>
          <Carousel slides={slides} autoplay={true} interval={2000} />
        </AboutUs.Carousel> */}

        {/* <CaruItem></CaruItem> */}
        
      {/* </AboutUs> */}
    </Container>
  );
};

export default Settings;
