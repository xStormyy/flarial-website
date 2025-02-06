import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Reviews from '@/components/sections/Reviews'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      
      {/* UI Showcase Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/untitled-2-844x642.png"
                alt="Flarial Client Interface"
                width={844}
                height={642}
                className="w-full h-auto"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-transparent pointer-events-none"></div>
            </div>
            <div className="lg:pl-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Smooth UI
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Navigate with Ease, Embrace the Sleek with the Flarial UI! Our modern interface is designed to enhance your gameplay experience while maintaining functionality and performance.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-300">
                  <svg 
                    className="w-6 h-6 text-red-500 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Intuitive Controls
                </li>
                <li className="flex items-center text-gray-300">
                  <svg 
                    className="w-6 h-6 text-red-500 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Clean Design
                </li>
                <li className="flex items-center text-gray-300">
                  <svg 
                    className="w-6 h-6 text-red-500 mr-3" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Customizable Interface
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Reviews />
    </>
  )
}
