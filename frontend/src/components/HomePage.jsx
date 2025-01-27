import React from 'react'
import HeroSection from './Hero'
import SmBanner from './banner/SmBanner'
import ProductSection from './Product'
import MiddleBanner from './banner/MiddleBanner'
import AdvertisementBanner from './banner/AdBanner'

function HomePage() {
  return (
    <>
        <HeroSection/>
        <SmBanner />
        <ProductSection/>
        <MiddleBanner/>
        <AdvertisementBanner/>
    </>
  )
}

export default HomePage