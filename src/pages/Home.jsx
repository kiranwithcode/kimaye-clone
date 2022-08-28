import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import JazzSlider from '../homecomponents/jazzslider/JazzSlider'
import PastLooking from '../homecomponents/PastLooking'
import Recommeded from '../homecomponents/Recommeded'
import SecretSlider from '../homecomponents/secreteslider/SecretSlider'
import Slider from '../homecomponents/slideshow/Slider'



const Home = () => {
  return (
    <>
        <Navbar />
        <Slider />
        <Recommeded />
        <SecretSlider />
        <JazzSlider />
        <PastLooking />
        <Footer />
    </>
  )
}

export default Home