export default function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-40 md:pb-32 overflow-hidden">
      <div className="container-width">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-4 md:mb-6 animate-fade-up px-2">
            Compete. Train. Dominate.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gym-gray-600 mb-8 md:mb-10 animate-fade-up animation-delay-100 px-2">
            The social fitness app that ranks your gains and fuels your competitive spirit.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-up animation-delay-200">
            <a href="#download" className="btn-primary text-base md:text-lg w-full sm:w-auto max-w-xs mx-auto sm:mx-0">
              Download for iOS
            </a>
            <a href="#features" className="btn-secondary text-base md:text-lg w-full sm:w-auto max-w-xs mx-auto sm:mx-0">
              Learn More
            </a>
          </div>
        </div>
        
        {/* iPhone Mockup - Fixed overflow */}
        <div className="mt-12 md:mt-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gym-blue/20 to-purple-500/20 blur-2xl md:blur-3xl opacity-50" />
          <div className="relative bg-gym-gray-100 rounded-2xl md:rounded-3xl p-4 md:p-8 text-center mx-2 sm:mx-0">
            <div className="aspect-[9/16] max-w-[200px] sm:max-w-[250px] md:max-w-sm mx-auto bg-gym-gray-200 rounded-xl md:rounded-2xl flex items-center justify-center">
              <span className="text-gym-gray-500 text-sm">iPhone Mockup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
