import React from 'react'
import styled from 'styled-components';
import Hero from './components/Hero';
import Promo from './components/Promo';

const HeroWrapper = styled.div`
  height: 100vh;
  background-image: url(images/header-image.png);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const PromoWrapper = styled.div`
  height: 100vh;
  background-color: #f0f6fa;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

export default function App() {
  return (
    <>
      <HeroWrapper>
        <Hero />
      </HeroWrapper>
      <PromoWrapper>
        <Promo>
        </Promo>
      </PromoWrapper>
    </>
  );
}
