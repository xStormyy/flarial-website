'use client'

import { motion } from 'framer-motion'

const reviews = [
  {
    content: 'flarial is one of the best clients, has actually unique modules and is a clean client with many modules',
    author: 'AxTheAxolotll',
  },
  {
    content: 'Flarial stands out with distinctive modules and a clean design, making it a top-tier choice.',
    author: 'Namu',
  },
  {
    content: 'Flarial impresses with its diverse modules and intuitive, clean interface. A top-notch choice for smooth gameplay and enhanced Minecraft experience.',
    author: '8ded',
  },
]

export default function Reviews() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-transparent"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-300">Reviews</h2>
          <p className="text-gray-400 text-lg">Collected from active users from the Flarial Discord</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="group relative h-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-300"/>
                <div className="relative bg-gradient-to-br from-gray-900 via-black to-black rounded-lg p-8 h-full min-h-[320px] border border-red-500/20 group-hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between">
                  <div className="absolute -top-4 -left-2 text-red-500/20 pointer-events-none">
                    <svg
                      className="h-16 w-16 transform -rotate-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <p className="text-gray-200 text-lg leading-relaxed mb-6 italic">
                      {review.content}
                    </p>
                    <div className="flex items-center pt-4 border-t border-red-500/10">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                        <span className="text-white font-medium">
                          {review.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-200 font-medium">{review.author}</p>
                        <p className="text-red-500/60 text-sm">Flarial User</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}