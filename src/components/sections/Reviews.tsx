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
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Reviews</h2>
          <p className="text-gray-400">Collected from active users from the Flarial Discord</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="bg-gradient-to-r from-gray-900 to-black rounded-lg p-6 h-full border border-red-500/20 hover:border-red-500/40 transition-colors duration-300">
                <div className="relative">
                  <svg 
                    className="absolute -top-4 -left-4 h-8 w-8 text-red-500 opacity-50"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-300 mb-4 text-lg italic">
                    &ldquo;{review.content}&rdquo;
                  </p>
                </div>
                <div className="flex items-center mt-6">
                  <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center">
                    <span className="text-red-500 font-medium">
                      {review.author.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <p className="ml-3 text-gray-400">{review.author}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}