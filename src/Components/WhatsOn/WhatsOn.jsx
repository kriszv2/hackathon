import React from 'react'
import GenInfo2 from '../Home/GenInfo/GenInfo2';
import NowShowingCarousel from './NowShowingCar/NowShowingCarousel';
import "./WhatsOn.css";
import WhatsOnSec3 from './WhatsOnSec3';

export default function WhatsOn() {
  return (
    <main>
      <NowShowingCarousel />
      <GenInfo2 />
      <WhatsOnSec3/>
    </main>
    
  )
}
