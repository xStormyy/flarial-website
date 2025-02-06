'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const screenshots = [
  {
    url: '/untitled-2-844x642.png',
    alt: 'Flarial Client Interface',
    caption: 'Modern User Interface'
  },
  // Add more screenshots here when available
]

const features = [
  { name: 'Custom Modules', flarial: true, others: false },
  { name: 'Modern UI', flarial: true, others: 'Varies' },
  { name: 'Regular Updates', flarial: true, others: 'Varies' },
  { name: 'Performance Focused', flarial: true, others: false },
  { name: 'Open Source', flarial: true, others: false },
]

export default function UIShowcase() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? screenshots.length - 1 : prev - 1
    )
  }

  return (
    <section className="py-24 bg-black font-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Experience the Difference
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A modern, intuitive interface designed for seamless gameplay enhancement
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-xl overflow-hidden group"
          >
            <div className="aspect-w-16 aspect-h-12 relative">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={screenshots[currentImageIndex].url}
                    alt={screenshots[currentImageIndex].alt}
                    fill
                    className="object-cover rounded-xl shadow-2xl shadow-red-500/10 
                             transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {screenshots.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white text-center">
                {screenshots[currentImageIndex].caption}
              </p>
            </div>
          </motion.div>

          {/* Feature Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-900/50 rounded-xl p-6 backdrop-blur-sm"
          >
            <h3 className="text-xl font-semibold text-white mb-6">Feature Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="py-3 text-left text-gray-400">Feature</th>
                    <th className="py-3 text-center text-red-500">Flarial</th>
                    <th className="py-3 text-center text-gray-400">Others</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="border-b border-gray-800/50"
                    >
                      <td className="py-3 text-gray-300">{feature.name}</td>
                      <td className="py-3 text-center">
                        {feature.flarial ? (
                          <svg className="w-5 h-5 text-red-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <span className="text-gray-500">—</span>
                        )}
                      </td>
                      <td className="py-3 text-center text-gray-400">
                        {typeof feature.others === 'boolean' ? (
                          feature.others ? (
                            <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          ) : (
                            <span>—</span>
                          )
                        ) : (
                          feature.others
                        )}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}