import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../public/OPTIMAL.png'
import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import ThreeD from '../components/ThreeD'
import Services from '../components/Services'
import About from '../components/About'
import Testimony from '../components/Testimony'
import Contact from '../components/Contact'


export default function Home() {
  return (
    <div className="relative mx-auto text-white w-full bg-black -z-10">
      <Navbar />
      <Hero />
      <ThreeD />
      <Services />
      <About />
      <Testimony />
      <Contact />
      <Footer />
    </div>
  )
}
