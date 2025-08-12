import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import Counter from '../layouts/Counter'
import Service from '../layouts/Service'
import Contact from '../layouts/Contact'
import Pcompany from '../layouts/Pcompany'
import Portfolio from '../layouts/Portfolio'

const Home = () => {
  return (
    <>
      
      <Banner/>
      <Counter/>
      <Service/>
      <Contact/>
      <Pcompany/>
      <Portfolio/>
    </>
  )
}

export default Home
