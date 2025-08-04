import React from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  variant?: 'default' | 'glass' | 'elevated'
  hover?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', hover = false, children, ...props }, ref) => {
    const baseStyles = "rounded-xl border transition-all duration-300"
    
    const variants = {
      default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-sm",
      glass: "glass dark:glass-dark shadow-lg",
      elevated: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg"
    }
    
    const hoverStyles = hover ? "card-hover" : ""

    return (
      <div
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          hoverStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card 