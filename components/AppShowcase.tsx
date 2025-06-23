
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function AppShowcase() {
  const [currentSlide, setCurrentSlide] = useState(2) // Start with center image (gif)

  const showcaseItems = [
    {
      type: 'image',
      src: '/showcase/home.webp',
      alt: 'GymRNK Leaderboard View'
    },
    {
      type: 'image',
      src: '/showcase/workout.webp',
      alt: 'GymRNK Workout Logging'
    },
    {
      type: 'gif',
      src: '/showcase/ranking-demo.gif',
      alt: 'GymRNK Live Rankings Demo'
    },
    {
      type: 'image',
      src: '/showcase/profile.webp',
      alt: 'GymRNK Profile Stats'
    },
    {
      type: 'image',
      src: '/showcase/competition.webp',
      alt: 'GymRNK Weekly Competition'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length)
  }

  return (
    <>
      {/* Desktop View - Curved Gallery */}
      <div className="hidden md:block mt-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gym-blue/20 to-purple-500/20 blur-3xl" />
        
        <div className="relative">
          {/* 3D Curved Container */}
          <div className="flex items-center justify-center perspective-1000">
            <div className="flex items-center gap-4 transform-style-3d">
              
              {/* Left Images */}
              <div className="transform -rotate-y-25 translate-z-[-100px] opacity-80 hover:opacity-100 transition-all duration-300">
                <div className="relative w-56 h-[480px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={showcaseItems[0].src}
                    alt={showcaseItems[0].alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="transform -rotate-y-15 translate-z-[-50px] opacity-90 hover:opacity-100 transition-all duration-300">
                <div className="relative w-64 h-[550px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={showcaseItems[1].src}
                    alt={showcaseItems[1].alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              {/* Center GIF */}
              <div className="transform translate-z-0 scale-110 z-10">
                <div className="relative w-[300px]">
                  {/* iPhone Frame */}
                  <div className="relative">
                    {/* Phone Frame */}
                    <div className="absolute inset-0 bg-black rounded-[3rem] shadow-2xl"></div>
                    {/* Screen Bezel */}
                    <div className="absolute inset-[3px] bg-gray-900 rounded-[2.8rem]"></div>
                    {/* Dynamic Island */}
                    <div className="absolute top-[20px] left-1/2 transform -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-20"></div>
                    {/* Screen Area */}
                    <div className="relative bg-white rounded-[2.5rem] p-[14px] shadow-inner">
                      <div className="relative w-full h-[640px] rounded-[2.2rem] overflow-hidden bg-gray-100">
                        <Image
                          src={showcaseItems[2].src}
                          alt={showcaseItems[2].alt}
                          fill
                          className="object-cover object-center"
                          unoptimized={showcaseItems[2].type === 'gif'}
                        />
                      </div>
                    </div>
                    {/* Side Buttons */}
                    <div className="absolute right-[-2px] top-[120px] w-[3px] h-[60px] bg-gray-800 rounded-l-sm"></div>
                    <div className="absolute left-[-2px] top-[100px] w-[3px] h-[30px] bg-gray-800 rounded-r-sm"></div>
                    <div className="absolute left-[-2px] top-[140px] w-[3px] h-[50px] bg-gray-800 rounded-r-sm"></div>
                    <div className="absolute left-[-2px] top-[200px] w-[3px] h-[50px] bg-gray-800 rounded-r-sm"></div>
                  </div>
                </div>
              </div>
              
              {/* Right Images */}
              <div className="transform rotate-y-15 translate-z-[-50px] opacity-90 hover:opacity-100 transition-all duration-300">
                <div className="relative w-64 h-[550px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={showcaseItems[3].src}
                    alt={showcaseItems[3].alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div className="transform rotate-y-25 translate-z-[-100px] opacity-80 hover:opacity-100 transition-all duration-300">
                <div className="relative w-56 h-[480px] rounded-xl overflow-hidden shadow-2xl">
                  <Image
                    src={showcaseItems[4].src}
                    alt={showcaseItems[4].alt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Caption */}
          <p className="text-center mt-8 text-gym-gray-600">
            Experience real-time rankings and compete with friends
          </p>
        </div>
      </div>

      {/* Mobile View - Swipeable Carousel */}
      <div className="md:hidden mt-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gym-blue/20 to-purple-500/20 blur-3xl" />
        
        <div className="relative">
          {/* Mobile Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-300 ease-in-out"
                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {showcaseItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-8">
                  <div className="relative w-[240px] mx-auto">
                    <div className="relative">
                      {/* Phone Frame */}
                      <div className="absolute inset-0 bg-black rounded-[2.5rem] shadow-2xl"></div>
                      {/* Screen Bezel */}
                      <div className="absolute inset-[2.5px] bg-gray-900 rounded-[2.3rem]"></div>
                      {/* Dynamic Island */}
                      <div className="absolute top-[15px] left-1/2 transform -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20"></div>
                      {/* Screen Area */}
                      <div className="relative bg-white rounded-[2.1rem] p-[11px] shadow-inner">
                        <div className="relative w-full h-[480px] rounded-[1.9rem] overflow-hidden bg-white">
                          <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover object-center"
                            unoptimized={item.type === 'gif'}
                            quality={100}
                          />
                        </div>
                      </div>
                      {/* Side Buttons */}
                      <div className="absolute right-[-2px] top-[100px] w-[3px] h-[50px] bg-gray-800 rounded-l-sm"></div>
                      <div className="absolute left-[-2px] top-[80px] w-[3px] h-[25px] bg-gray-800 rounded-r-sm"></div>
                      <div className="absolute left-[-2px] top-[115px] w-[3px] h-[40px] bg-gray-800 rounded-r-sm"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-gym-gray-100 hover:bg-gym-gray-200 transition-colors"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentSlide === index ? 'bg-gym-black w-6' : 'bg-gym-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gym-gray-100 hover:bg-gym-gray-200 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Caption */}
          <p className="text-center mt-4 text-sm text-gym-gray-600 px-8">
            Swipe to explore GymRNK features
          </p>
        </div>
      </div>
    </>
  )
} 