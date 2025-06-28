'use client'

import { useState, useEffect } from 'react'

interface WaitlistPopupProps {
  onClose?: () => void
  source?: 'popup-timer' | 'download-button' | 'other'
}

export default function WaitlistPopup({ onClose, source = 'popup-timer' }: WaitlistPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  useEffect(() => {
    // Check if user has already submitted or dismissed
    const dismissed = localStorage.getItem('waitlistDismissed')
    const submitted = localStorage.getItem('waitlistSubmitted')
    
    if (!dismissed && !submitted) {
      // Show popup after 5 seconds
      const timer = setTimeout(() => {
        setShowPopup(true)
        setTimeout(() => setIsVisible(true), 50)
      }, 5000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ firstName, email, source }),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage({ type: 'success', text: 'You\'re on the list! We\'ll notify you when we launch.' })
        setHasSubmitted(true)
        localStorage.setItem('waitlistSubmitted', 'true')
        setTimeout(() => {
          handleClose()
        }, 3000)
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong. Please try again.' })
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Network error. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem('waitlistDismissed', 'true')
    setTimeout(() => {
      setShowPopup(false)
      onClose?.()
    }, 300)
  }

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!showPopup) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black transition-opacity duration-300 ${
        isVisible ? 'bg-opacity-50' : 'bg-opacity-0'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 transform transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95'
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close popup"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gym-black mb-2">
            Join the GymRNK Waitlist
          </h2>
          <p className="text-gray-600">
            Be the first to know when we launch and get exclusive early access!
          </p>
        </div>

        {/* Form */}
        {!hasSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gym-black focus:border-transparent outline-none transition-all"
                placeholder="Enter your first name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gym-black focus:border-transparent outline-none transition-all"
                placeholder="Enter your email"
              />
            </div>

            {message && (
              <div className={`p-3 rounded-lg text-sm ${
                message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}>
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-4 bg-gym-black text-white font-medium rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Joining...' : 'Join Waitlist'}
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="mb-4">
              <svg className="w-16 h-16 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-lg font-medium text-gray-800">You're on the list!</p>
            <p className="text-gray-600 mt-2">We'll notify you when GymRNK launches.</p>
          </div>
        )}

        <p className="text-xs text-gray-500 text-center mt-6">
          We respect your privacy and will never spam you.
        </p>
      </div>
    </div>
  )
}