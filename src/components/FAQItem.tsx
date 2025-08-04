'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  index: number
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 rounded-lg px-4 transition-colors duration-200"
        aria-expanded={isOpen ? "true" : "false"}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
          {question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div 
              id={`faq-answer-${index}`}
              className="pb-6 px-4 text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default FAQItem 