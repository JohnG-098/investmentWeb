import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import MainLayout from '../layouts/MainLayout'

const Home = () => {
  return (
    <MainLayout>
      <Hero/>
      <About/>
    </MainLayout>
  )
}

export default Home
