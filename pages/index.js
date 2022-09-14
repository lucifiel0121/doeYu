import Head from 'next/head'
import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Subscript from '../components/Subscript'
import GoodFoods from '../components/GoodFoods'
import TravelSpots from '../components/TravelSpots'
import Stacks from '../components/Stacks'
import Slides from '../components/Slides'


export default function Home() {

  return (
    <div className="container">
      <Head>
        <title>林宇軒的島遊</title>
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <NavBar />
      <Slides />
      <Stacks />
      <TravelSpots />
      <GoodFoods />
      <Subscript />
      <Footer />

    </div >
  )
}
