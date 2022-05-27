import React from 'react'
import styled from 'styled-components';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Promo from './components/Promo';
import Stories from './components/Stories';
import Comment from './components/Comment';
import CommentSection from './components/CommentSection';
import Footer from './Footer';



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
  background-color: #F6728090;
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
  padding: 80px;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 750px) {
    flex-direction: column;
    gap: 55px;
  }
`

const FooterWrapper = styled.div`
    background-color: #355c7d;
    padding-top: 40px;
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
        <CommentSection quantity={3} />
      </CommentSectionWrapper>

      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </>
  );
}
