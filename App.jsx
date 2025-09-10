import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import NewsGrid from './components/NewsGrid'
import Navigation from './components/Navigation'

function App() {
  

  return (
    <>
     <div className="min-h-screen  bg-gray-50">
      <Header/>      
      <Navigation/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <HeroSection/>
     <NewsGrid/>
      </main>
      <Footer/>
     </div>
    </>
  )
}

export default App
