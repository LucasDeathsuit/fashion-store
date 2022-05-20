import React from 'react'
import styled from 'styled-components';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Promo from './components/Promo';
import Stories from './components/Stories';



const HeroWrapper = styled.div`
  height: calc(100vh - 85px);
  min-height: 450px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding-top: 85px;
  background-image: url('images/hero-background.jpg');
`

const StoriesWrapper = styled.div`
  background-color: #355c7d;
  box-shadow: inset 0px 0px 20px 3px rgba(0, 0, 0, 0.8);
`

const PromoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  background-color: #f0f6fa;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background: rgb(255,228,252);
  background: linear-gradient(90deg, #8ec5fc 0%, #E0c3fc 100%);
`

const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #F6728050;
  z-index: 5;
`

export default function App() {
  return (
    <>
      <NavbarWrapper>
        <Navbar />
      </NavbarWrapper>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <StoriesWrapper>
        <Stories />
      </StoriesWrapper>
      
      <PromoWrapper>
        <Promo>
        </Promo>
      </PromoWrapper>
    
      
      <StoriesWrapper>
        <Stories />
      </StoriesWrapper>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      
      <StoriesWrapper>
        <Stories />
      </StoriesWrapper>
    </>
  );
}
