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
      type: 'video',
      src: '/showcase/ranking-demo.webm',
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

  const renderMedia = (item, className = "") => {
    if (item.type === 'video') {
      return (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`absolute inset-0 w-full h-full object-cover bg-white ${className}`}
        >
          <source src={item.src} type="video/webm" />
        </video>
      )
    }
    return (
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className={`object-cover object-center bg-white ${className}`}
        unoptimized={item.type === 'gif'}
      />
    )
  }

  // iPhone 16 Pro Max Frame Component
  const IPhoneFrame = ({ children, scale = 1, screenHeight = 680 }) => {
    const screenWidth = 305 * scale
    const actualScreenHeight = screenHeight * scale
    const framePadding = 10 * scale
    const frameWidth = screenWidth + (framePadding * 2)
    const frameHeight = actualScreenHeight + (framePadding * 2) + (35 * scale) // Extra space for Dynamic Island
    
    return (
      <div className="relative" style={{ width: `${frameWidth}px`, height: `${frameHeight}px` }}>
        {/* Phone Frame - Titanium finish */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-[2.5rem] shadow-2xl" 
             style={{ boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.5)' }}>
          {/* Inner Frame Border */}
          <div className="absolute inset-[2px] bg-black rounded-[2.4rem] overflow-hidden">
            {/* Dynamic Island - Smaller size */}
            <div 
              className="absolute left-1/2 transform -translate-x-1/2 bg-black rounded-full z-50" 
              style={{ 
                top: `${10 * scale}px`,
                width: `${65 * scale}px`, 
                height: `${20 * scale}px` 
              }}
            ></div>
            {/* Screen Container */}
            <div 
              className="absolute bg-black"
              style={{
                top: `${framePadding}px`,
                left: `${framePadding}px`,
                right: `${framePadding}px`,
                bottom: `${framePadding}px`,
              }}
            >
              {/* Actual Screen */}
              <div 
                className="relative w-full rounded-[1.8rem] overflow-hidden bg-white"
                style={{ 
                  height: `${actualScreenHeight}px`,
                  marginTop: `${25 * scale}px`, // Space for Dynamic Island
                  boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)'
                }}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
        {/* Action Button (left side) */}
        <div className="absolute left-[-3px] top-[30%] w-[3px] h-[35px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-r-sm"></div>
        {/* Volume Buttons */}
        <div className="absolute left-[-3px] top-[40%] w-[3px] h-[30px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-r-sm"></div>
        <div className="absolute left-[-3px] top-[48%] w-[3px] h-[30px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-r-sm"></div>
        {/* Power Button */}
        <div className="absolute right-[-3px] top-[40%] w-[3px] h-[60px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-l-sm"></div>
      </div>
    )
  }

  return (
    <>
      {/* Desktop View - Elegant Flat Gallery */}
      <div className="hidden md:block mt-16 relative">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent blur-3xl" />
        
        <div className="relative">
          {/* Flat Gallery Container */}
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-6">
              
              {/* Far Left - Smallest */}
              <div className="transform transition-all duration-500 hover:scale-105"
                   style={{ 
                     opacity: 0.6,
                     filter: 'brightness(0.85)'
                   }}>
                <IPhoneFrame scale={0.52} screenHeight={680}>
                  {renderMedia(showcaseItems[0])}
                </IPhoneFrame>
              </div>
              
              {/* Left - Small */}
              <div className="transform transition-all duration-500 hover:scale-105"
                   style={{ 
                     opacity: 0.75,
                     filter: 'brightness(0.9)',
                     marginLeft: '-16px',
                     marginRight: '-16px'
                   }}>
                <IPhoneFrame scale={0.64} screenHeight={680}>
                  {renderMedia(showcaseItems[1])}
                </IPhoneFrame>
              </div>
              
              {/* Center - Largest with emphasis */}
              <div className="transform transition-all duration-500 z-20"
                   style={{ 
                     filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))'
                   }}>
                <IPhoneFrame scale={0.8} screenHeight={680}>
                  {renderMedia(showcaseItems[2])}
                </IPhoneFrame>
              </div>
              
              {/* Right - Small */}
              <div className="transform transition-all duration-500 hover:scale-105"
                   style={{ 
                     opacity: 0.75,
                     filter: 'brightness(0.9)',
                     marginLeft: '-16px',
                     marginRight: '-16px'
                   }}>
                <IPhoneFrame scale={0.64} screenHeight={680}>
                  {renderMedia(showcaseItems[3])}
                </IPhoneFrame>
              </div>
              
              {/* Far Right - Smallest */}
              <div className="transform transition-all duration-500 hover:scale-105"
                   style={{ 
                     opacity: 0.6,
                     filter: 'brightness(0.85)'
                   }}>
                <IPhoneFrame scale={0.52} screenHeight={680}>
                  {renderMedia(showcaseItems[4])}
                </IPhoneFrame>
              </div>
              
            </div>
          </div>
          
          {/* Caption - Apple style */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Real-time rankings
            </h3>
            <p className="text-lg text-gray-600 font-normal">
              Compete with friends and track your progress
            </p>
          </div>
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
                  <div className="relative mx-auto w-fit">
                    {/* Mobile iPhone Frame */}
                    <div className="relative" style={{ width: '280px', height: '560px' }}>
                      {/* Phone Frame - Titanium finish */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-[2.2rem] shadow-2xl" 
                           style={{ boxShadow: '0 15px 40px -8px rgba(0, 0, 0, 0.5)' }}>
                        {/* Inner Frame Border */}
                        <div className="absolute inset-[2px] bg-black rounded-[2.1rem] overflow-hidden">
                          {/* Dynamic Island - Smaller */}
                          <div className="absolute top-[9px] left-1/2 transform -translate-x-1/2 w-[55px] h-[16px] bg-black rounded-full z-50"></div>
                          {/* Screen Container */}
                          <div className="absolute top-[10px] left-[10px] right-[10px] bottom-[10px] bg-black">
                            {/* Actual Screen */}
                            <div className="relative w-full h-[510px] rounded-[1.6rem] overflow-hidden bg-white mt-[23px]" 
                                 style={{ boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.1)' }}>
                              {item.type === 'video' ? (
                                <video
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="absolute inset-0 w-full h-full object-cover bg-white"
                                >
                                  <source src={item.src} type="video/webm" />
                                </video>
                              ) : (
                                <Image
                                  src={item.src}
                                  alt={item.alt}
                                  fill
                                  className="object-cover object-center bg-white"
                                  unoptimized={item.type === 'gif'}
                                  quality={100}
                                />
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Mobile Frame Buttons */}
                      <div className="absolute left-[-2px] top-[25%] w-[2px] h-[25px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-r-sm"></div>
                      <div className="absolute left-[-2px] top-[35%] w-[2px] h-[20px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-r-sm"></div>
                      <div className="absolute left-[-2px] top-[42%] w-[2px] h-[20px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-r-sm"></div>
                      <div className="absolute right-[-2px] top-[35%] w-[2px] h-[45px] bg-gradient-to-b from-gray-700 to-gray-800 rounded-l-sm"></div>
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
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
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
                    currentSlide === index ? 'bg-gray-900 w-6' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Caption */}
          <p className="text-center mt-4 text-sm text-gray-600 px-8">
            Swipe to explore GymRNK features
          </p>
        </div>
      </div>
    </>
  )
}