'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Card from './ui/Card'
import Button from './ui/Button'
import { formatPrice } from '@/lib/utils'

interface PricingCardProps {
  name: string
  price: number
  period: string
  description: string
  features: string[]
  notIncluded: string[]
  popular: boolean
  cta: string
  color: string
  index: number
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  period,
  description,
  features,
  notIncluded,
  popular,
  cta,
  color,
  index
}) => {
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
      className="relative"
    >
      {popular && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2"
        >
          <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg">
            Most Popular
          </span>
        </motion.div>
      )}
      
      <Card 
        className={cn(
          "p-8 h-full relative overflow-hidden",
          popular ? "ring-2 ring-primary-500 scale-105" : ""
        )}
        variant="glass"
      >
        {/* Background gradient for popular card */}
        {popular && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 dark:from-primary-900/20 dark:to-secondary-900/20" />
        )}
        
        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {name}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {description}
            </p>
            
            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold gradient-text">
                {formatPrice(price)}
              </span>
              <span className="text-gray-600 dark:text-gray-400">
                /{period}
              </span>
            </div>
          </div>
          
          {/* Features */}
          <div className="space-y-4 mb-8">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center">
                <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 dark:text-gray-300">
                  {feature}
                </span>
              </div>
            ))}
            
            {notIncluded.map((feature, idx) => (
              <div key={idx} className="flex items-center opacity-50">
                <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-500 dark:text-gray-400">
                  {feature}
                </span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <Button
            className={cn(
              "w-full",
              popular 
                ? "bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700" 
                : ""
            )}
            variant={popular ? "primary" : "outline"}
            size="lg"
          >
            {cta}
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

export default PricingCard 