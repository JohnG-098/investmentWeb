import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import MainLayout from '../layouts/MainLayout'
import InvestPlan from '../components/InvestPlan'
import WhyUs from '../components/WhyUs'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <InvestPlan/>
      <WhyUs/>
    </>
  )
}

export default Home
