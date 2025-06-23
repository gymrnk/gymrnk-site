export default function Testimonials() {
  const testimonials = [
    {
      quote: "GymRNK completely changed how I approach my workouts. The competition keeps me motivated!",
      author: "Sarah M.",
      role: "Fitness Enthusiast"
    },
    {
      quote: "Finally, an app that makes tracking workouts fun. Love competing with my gym buddies!",
      author: "Mike D.",
      role: "Powerlifter"
    },
    {
      quote: "The weekly rankings push me to train harder. It's like having a personal coach.",
      author: "Jessica L.",
      role: "CrossFit Athlete"
    }
  ]

  return (
    <section className="py-16 md:py-20">
      <div className="container-width">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4">
            Loved by Athletes
          </h2>
          <p className="text-lg sm:text-xl text-gym-gray-600">
            Join thousands who've transformed their fitness journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 px-4 md:px-0">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
              <p className="text-base md:text-lg text-gym-gray-600 mb-4 md:mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-base">{testimonial.author}</p>
                <p className="text-sm text-gym-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
