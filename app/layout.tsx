import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { WaitlistProvider } from '@/components/WaitlistProvider'

export const metadata: Metadata = {
  title: 'GymRNK - Compete, Train, Dominate',
  description: 'The social fitness app where you compete with friends, track workouts, and dominate the leaderboards.',
  keywords: [
    'fitness app',
    'gym ranking',
    'workout tracker',
    'fitness competition',
    'social fitness',
    'exercise tracker',
    'gym leaderboard',
    'fitness challenges',
    'workout competition',
    'strength training app'
  ],
  openGraph: {
    title: 'GymRNK - Compete, Train, Dominate',
    description: 'The social fitness app where you compete with friends',
    url: 'https://gymrnk.com',
    siteName: 'GymRNK',
    images: [
      {
        url: 'https://gymrnk.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GymRNK - Compete, Train, Dominate',
    description: 'The social fitness app where you compete with friends',
    images: ['https://gymrnk.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className="bg-white text-gym-black overflow-x-hidden">
        <GoogleAnalytics />
        <WaitlistProvider>
          <Header />
          <main className="min-h-screen overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </WaitlistProvider>
      </body>
    </html>
  )
}