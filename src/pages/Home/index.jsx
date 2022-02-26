import React from 'react'
import Header from '../../components/Header/Header';
import Navbar from './../../components/Navbar/Navbar';
import Footer from './../../components/Footer/Footer';
import Section from '../../components/Section/HomeSection/Section';
const Home = () => {
  return (
      <>
        <Navbar/>
        <Header/>
        <Section/>
        <Footer/>
      </>
  )
}

export default Home