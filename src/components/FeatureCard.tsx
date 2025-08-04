'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import Card from './ui/Card'

interface FeatureCardProps {
  title: string
  description: string
  icon: LucideIcon
  color: string
  bgColor: string
  index: number
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  color,
  bgColor,
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
    >
      <Card 
        className="p-6 h-full hover"
        variant="glass"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={cn(
            "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
            bgColor
          )}
        >
          <Icon className={cn("w-6 h-6", color)} />
        </motion.div>
        
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </Card>
    </motion.div>
  )
}

export default FeatureCard 