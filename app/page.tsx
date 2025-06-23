import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import DownloadCTA from '@/components/DownloadCTA'
import StructuredData from '@/components/StructuredData'


export default function Home() {
  return (
    <>
     <StructuredData />
      <Hero />
      <Features />
      <Testimonials />
      <DownloadCTA />
    </>
  )
}