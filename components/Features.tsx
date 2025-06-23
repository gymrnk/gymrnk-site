export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Live Rankings',
      description: 'See how you stack up against friends in real-time across different muscle groups.'
    },
    {
      icon: '💪',
      title: 'Track Progress',
      description: 'Log workouts effortlessly and watch your strength grow over time.'
    },
    {
      icon: '🏆',
      title: 'Weekly Competitions',
      description: 'Compete in muscle-specific challenges and climb the leaderboards.'
    }
  ]

  return (
    <section id="features" className="py-16 md:py-20 bg-gym-gray-50 overflow-hidden">
      <div className="container-width">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Why GymRNK?
          </h2>
          <p className="text-lg sm:text-xl text-gym-gray-600 max-w-2xl mx-auto px-4">
            Transform your workouts into competitions. Every rep counts towards your ranking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{feature.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-base text-gym-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
