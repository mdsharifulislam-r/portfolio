import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import AboutMe from '../AboutME/AboutMe'
import Services from '../Services/Services'
import MySkills from '../Myskills/MySkills'
import MyWorks from '../MyWorks/MyWorks'
import Plan from '../Plan/Plan'
import ContactMe from '../ContactME/ContactMe'

export default function Home() {
  return (
    <div className=''>
      <HeroSection />
      <AboutMe />
 
      <MySkills />
      <MyWorks />
    <ContactMe/>
    </div>
  )
}
