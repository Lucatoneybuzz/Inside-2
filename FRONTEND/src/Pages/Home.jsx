import React from 'react'
import Hero from '../Components/Hero/Hero'
import More from '../Components/More/More'
import MainFacts from '../Components/MainFacts/MainFacts'
import Projects from '../Components/Projects/Projects'
import Offer from '../Components/Offer/Offer'
import InteriorImages from '../Components/Images/InteriorImages'
import AnimatedWelcomeSection from '../Components/Hero/AnimatedWelcomeSection'




const Home = () => {
  return (
    <div>
      <AnimatedWelcomeSection/>
      <Hero/>
      <More/>
      <MainFacts/>
      <Projects/>
      <Offer/>
      <InteriorImages/>
    </div>
  )
}

export default Home