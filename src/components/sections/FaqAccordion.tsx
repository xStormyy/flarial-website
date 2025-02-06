'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'What platforms are supported?',
    answer: 'We only support the Windows 10 and 11 operating systems.',
  },
  {
    question: 'Is Flarial Client a cheat?',
    answer: 'No, Flarial Client is not and never will be a cheating software.',
  },
  {
    question: 'Is Flarial Client free?',
    answer: 'Yes, Flarial Client is both Free and Open-Source (GPL-3), and is powered through the hard work of our community members'
  },
  {
    question: 'Can you use Flarial Client on servers?',
    answer: 'Yes, you can use it on any server that supports your Minecraft version.',
  },
  {
    question: 'Can you use your own resource packs?',
    answer: 'Yes, you can use your own resource packs.',
  },
]

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="divide-y divide-gray-800">
      {faqs.map((faq, index) => (
        <div key={index} className="py-6">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex justify-between items-center w-full text-left focus:outline-none"
          >
            <h3 className="text-xl font-semibold text-white pr-8">
              {faq.question}
            </h3>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0"
            >
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.div>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="mt-4 text-gray-400">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}