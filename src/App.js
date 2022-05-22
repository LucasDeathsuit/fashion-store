import React from 'react'
import styled from 'styled-components';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Promo from './components/Promo';
import Stories from './components/Stories';
import CommentSection from './components/CommentSection';



const HeroWrapper = styled.div`
  height: calc(100vh - 85px);
  display: flex;
  justify-content: center;
  align-items: center;
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
  padding: 50px;
  background-color: #f0f6fa;
  background: rgb(255,228,252);
  background: linear-gradient(90deg, #8ec5fc 0%, #E0c3fc 100%);

  
  @media (max-width: 800px) {
      padding: 10px 0;
    }
`

const NavbarWrapper = styled.div`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #F6728050;
  z-index: 5;
`

const CommentSectionWrapper = styled.div`
  position: relative;
  box-shadow: 0px 0px 8px 0px;
  background-image: url('images/Prancheta 3.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  display: flex;
  justify-content: space-evenly;
  padding: 80px;
  gap: 20px;

  @media (max-width: 800px) {
    flex-wrap: wrap;
    gap: 55px;
  }
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

      <CommentSectionWrapper>
        <CommentSection/>
        <CommentSection/>
        <CommentSection/>
      </CommentSectionWrapper>

      
      <PromoWrapper>
        <Promo>
        </Promo>
      </PromoWrapper>
    </>
  );
}
