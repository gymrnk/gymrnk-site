'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gym-gray-100">
      <nav className="container-width py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl md:text-2xl font-bold">
            GymRNK
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#features" className="text-gym-gray-600 hover:text-gym-black transition-colors">
              Features
            </Link>
            <Link href="/blog" className="text-gym-gray-600 hover:text-gym-black transition-colors">
              Blog
            </Link>
            <Link href="/#download" className="btn-primary">
              Download App
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gym-gray-100 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/#features" 
                className="text-gym-gray-600 hover:text-gym-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/blog" 
                className="text-gym-gray-600 hover:text-gym-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/#download" 
                className="btn-primary text-center w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Download App
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
