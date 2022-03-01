import React from 'react'
import Footer from '../../components/Footer/Footer'
import HeaderSub from '../../components/Header/HeaderSub'
import Navbar from '../../components/Navbar/Navbar'
import Experience from '../../components/Section/Experience/Experience'

const index = () => {
  return (
    <>
        <Navbar bg={true}/>
        <HeaderSub/>
        <Experience/>
        <Footer/>
    </>
  )
}

export default index