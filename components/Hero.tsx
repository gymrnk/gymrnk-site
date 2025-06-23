import AppShowcase from './AppShowcase'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="container-width">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-up">
            Compete. Train. Dominate.
          </h1>
          <p className="text-xl md:text-2xl text-gym-gray-600 mb-10 animate-fade-up animation-delay-100">
            The social fitness app that ranks your gains and fuels your competitive spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animation-delay-200">
            <a href="#download" className="btn-primary">
              Download for iOS
            </a>
            <a href="#features" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
        
        {/* App Showcase instead of iPhone Mockup */}
        <AppShowcase />
      </div>
    </section>
  )
}