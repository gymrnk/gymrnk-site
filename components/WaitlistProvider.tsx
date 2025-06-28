'use client'

import { createContext, useContext, useState, ReactNode } from 'react'
import WaitlistPopup from './WaitlistPopup'

interface WaitlistContextType {
  showWaitlistPopup: (source?: 'popup-timer' | 'download-button' | 'other') => void
}

const WaitlistContext = createContext<WaitlistContextType | undefined>(undefined)

export const useWaitlist = () => {
  const context = useContext(WaitlistContext)
  if (!context) {
    throw new Error('useWaitlist must be used within a WaitlistProvider')
  }
  return context
}

interface WaitlistProviderProps {
  children: ReactNode
}

export function WaitlistProvider({ children }: WaitlistProviderProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [popupSource, setPopupSource] = useState<'popup-timer' | 'download-button' | 'other'>('popup-timer')

  const showWaitlistPopup = (source: 'popup-timer' | 'download-button' | 'other' = 'popup-timer') => {
    // Don't show if already submitted
    const submitted = localStorage.getItem('waitlistSubmitted')
    if (!submitted) {
      setPopupSource(source)
      setShowPopup(true)
    }
  }

  return (
    <WaitlistContext.Provider value={{ showWaitlistPopup }}>
      {children}
      {showPopup && <WaitlistPopup source={popupSource} onClose={() => setShowPopup(false)} />}
    </WaitlistContext.Provider>
  )
}